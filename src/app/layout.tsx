import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout/ClientLayout";



export const metadata: Metadata = {
  title: "Aleena's Portfolio",
  description: "A modern portfolio showcasing React and Next.js projects",
  icons: { icon:'/images/favicon.png'},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className="app bg-black"
      >
        <ClientLayout>
          {children}
        </ClientLayout>

      </body>
    </html>
  );
}
