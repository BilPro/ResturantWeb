import "./globals.css";

export const metadata = {
  title: "AI Restaurant",
  description: "Modern restaurant website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
