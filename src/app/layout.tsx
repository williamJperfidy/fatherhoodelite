import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fatherhood Elite® | Chase Credit Cards",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
            <a className="areset">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" width="30px"></img>
            </a>
          <div>
            <img src="https://creditcards.chase.com/K-Marketplace/images/chasebank-logo-text-bluebg.svg" height="22px" className="navImg"></img>
            <img src="https://creditcards.chase.com/K-Marketplace/images/creditcards_logo_text-bluebg.svg" height="22px" style={{ paddingLeft:"10px" }} className="navImg"></img>
          </div>
          <section>
          <button className="navButton areset">
              Sign in
          </button>
          </section>
        </nav>

        {children}
      </body>
    </html>
  );
}
