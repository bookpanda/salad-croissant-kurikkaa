import { Metadata } from "next";
import { Providers } from "./providers";
import { Layout } from "@/modules/Layout";
import { AppProvider } from "@/core/context/appProvider";

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
          <AppProvider>
            <Layout>{children}</Layout>
          </AppProvider>
        </Providers>
      </body>
    </html>
  );
}
