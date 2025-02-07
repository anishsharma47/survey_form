import { Toaster } from "react-hot-toast";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster />
      <body>{children}</body>
    </html>
  );
}
