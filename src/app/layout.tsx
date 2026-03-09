import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Director CS Assistant",
  description: "Slack-first leadership assistant for Director CS workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
