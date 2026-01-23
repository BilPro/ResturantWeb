import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "AI Restaurant",
  description: "Smart food ordering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
