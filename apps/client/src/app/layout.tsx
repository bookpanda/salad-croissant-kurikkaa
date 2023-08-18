import { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
