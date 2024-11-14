import 'dotenv/config';
import "./globals.css";

export const metadata = {
  title: "Buen Plan CL",
  description: "BuenPlan Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
