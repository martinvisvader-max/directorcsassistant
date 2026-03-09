import type {
  Briefing,
  ClassifiedItem,
  PersonProfile,
  SlackMessageRecord,
} from "@/lib/types";

export interface Repository {
  saveMessages(messages: SlackMessageRecord[]): Promise<void>;
  saveClassifiedItems(items: ClassifiedItem[]): Promise<void>;
  saveBriefing(briefing: Briefing): Promise<void>;
  listRecentMessages(limit?: number): Promise<SlackMessageRecord[]>;
  listOpenClassifiedItems(): Promise<ClassifiedItem[]>;
  listBriefings(limit?: number): Promise<Briefing[]>;
  upsertPeopleProfiles(people: PersonProfile[]): Promise<void>;
}

export class InMemoryRepository implements Repository {
  private readonly messages = new Map<string, SlackMessageRecord>();
  private readonly classifiedItems = new Map<string, ClassifiedItem>();
  private readonly briefings = new Map<string, Briefing>();
  private readonly people = new Map<string, PersonProfile>();

  async saveMessages(messages: SlackMessageRecord[]) {
    for (const message of messages) {
      this.messages.set(message.id, message);
    }
  }

  async saveClassifiedItems(items: ClassifiedItem[]) {
    for (const item of items) {
      this.classifiedItems.set(item.id, item);
    }
  }

  async saveBriefing(briefing: Briefing) {
    const id = briefing.id ?? `${briefing.type}-${briefing.scheduledFor}`;
    this.briefings.set(id, { ...briefing, id });
  }

  async listRecentMessages(limit = 50) {
    return [...this.messages.values()]
      .sort((a, b) => b.ts.localeCompare(a.ts))
      .slice(0, limit);
  }

  async listOpenClassifiedItems() {
    return [...this.classifiedItems.values()].filter((item) => item.status !== "closed");
  }

  async listBriefings(limit = 20) {
    return [...this.briefings.values()]
      .sort((a, b) => (b.generatedAt ?? "").localeCompare(a.generatedAt ?? ""))
      .slice(0, limit);
  }

  async upsertPeopleProfiles(people: PersonProfile[]) {
    for (const person of people) {
      this.people.set(person.id, person);
    }
  }
}

export const repository = new InMemoryRepository();
