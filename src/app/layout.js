import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-emerald-50 dark:bg-slate-900 text-gray-800 dark:text-white">
      <Navbar />
        <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
