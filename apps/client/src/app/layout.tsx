import { Metadata } from "next";
import { Providers } from "./providers";
import { Layout } from "@/modules/Layout";

export const metadata: Metadata = {
  title: "Salad-Croissant",
  description: "Salad-Croissant Kurikka!",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
