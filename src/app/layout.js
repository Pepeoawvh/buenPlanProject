import 'dotenv/config';
import "./globals.css";


export const metadata = {
  title: "Ayudaplan",
  description: "Ayuda plan",
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
