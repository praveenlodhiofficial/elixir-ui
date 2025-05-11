import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <div className="font-exo">
            {children}
          </div>
      </body>
    </html>
  );
}
