import type { Metadata } from "next";
import { eventData } from "@/data/event-data";
import "./globals.css";

export const metadata: Metadata = {
  title: eventData.metadata.title,
  description: eventData.metadata.description,
  keywords: [...eventData.metadata.keywords],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
