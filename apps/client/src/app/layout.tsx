import { Metadata } from "next";
import { Providers } from "./providers";
import { Layout } from "@/modules/Layout";
import { AppProvider } from "@/core/context/appProvider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "SALAD-CROISSANT",
  description: "サラダとクロワッサン クリッカー！",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
      <body>
        <Analytics />
        <Providers>
          <AppProvider>
            <Layout>{children}</Layout>
          </AppProvider>
        </Providers>
      </body>
    </html>
  );
}
