import { Box, CssBaseline } from "@mui/material";
import "./globals.css";
import NavProvider from "@/components/UserNav/NavProvider";
import Footer from "@/components/footer/page";

export const metadata = {
  title: "Athlunaz",
  description:
    "Athlunaz, a pioneering force in India's sports scene, empowers athletes with top-tier gear, expert coaching, and access to premier academies. Join the SportJacks community and be part of the revolution in sports excellence with SportJacks!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#fff" }}>
        {/* <CssBaseline /> */}
        <NavProvider>{children}</NavProvider>
        <Footer />
      </body>
    </html>
  );
}
