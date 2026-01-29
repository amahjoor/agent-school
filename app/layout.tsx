import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent School - AI That Learns Once, Runs Repeatedly",
  description: "Discover where your target personas hang out. AI learns your research methodology once ($2), then runs it repeatedly ($0.20) - 10x cheaper than competitors.",
  openGraph: {
    title: "Agent School - AI That Learns Once, Runs Repeatedly",
    description: "10x cheaper than Apollo, Clay, or ZoomInfo. AI learns your workflows once, then executes deterministically.",
    type: "website",
  },
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
