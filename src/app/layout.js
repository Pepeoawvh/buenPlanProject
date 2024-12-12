import "dotenv/config";
import "./globals.css";
import Header from "./components/client/header";
import Footer from "./components/client/footer";

export const metadata = {
  title: "Buen Plan CL",
  description: "BuenPlan Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
