create table if not exists messages (
  id text primary key,
  source_id text not null,
  source_type text not null check (source_type in ('dm', 'channel', 'public_channel')),
  channel_id text not null,
  channel_name text not null,
  author_id text not null,
  author_name text not null,
  text text not null,
  ts text not null,
  thread_ts text,
  mentions_martin boolean not null default false,
  participants jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_messages_channel_ts on messages (channel_id, ts desc);
create index if not exists idx_messages_thread_ts on messages (thread_ts);

create table if not exists classified_items (
  id text primary key,
  message_id text not null references messages(id) on delete cascade,
  category text not null check (
    category in (
      'customer_escalation',
      'renewal_risk',
      'simon_ask',
      'exec_ask',
      'people_issue',
      'strategic_project',
      'process_gap'
    )
  ),
  score numeric not null,
  confidence text not null check (confidence in ('high', 'medium', 'low')),
  reasoning_summary text not null,
  action_type text not null check (
    action_type in (
      'reply_now',
      'delegate',
      'book_time',
      'escalate',
      'follow_up_today',
      'capture_for_1_1',
      'watch_only'
    )
  ),
  owner text,
  status text not null check (status in ('open', 'watching', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists idx_classified_items_category_score
  on classified_items (category, score desc);

create table if not exists briefings (
  id text primary key,
  briefing_type text not null check (briefing_type in ('daily', 'midday', 'weekly', 'one-on-one')),
  title text not null,
  scheduled_for text not null,
  summary text,
  content_markdown text not null,
  generated_at timestamptz not null default now(),
  source_message_ids jsonb not null default '[]'::jsonb
);

create table if not exists people_profiles (
  id text primary key,
  name text not null,
  role text not null,
  person_group text not null,
  manager_relationship text not null,
  coaching_needs text,
  coaching_focus text,
  one_on_one_schedule text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
