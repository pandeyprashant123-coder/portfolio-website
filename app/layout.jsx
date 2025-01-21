import "./globals.css";
import { Children } from "react";

export const metadata = {
  title: "Prashnta Pandey",
  description: "",
};

const rootLayout = ({ children }) => {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="vkXfb4Q-cDjRR-pE3Uv_AjtFM0TrrvA4MEV4bAwBom0"
      />
      <link rel="icon" href="./favicon.ico"></link>
      <body suppressHydrationWarning={true}>
        <main className="overflow-hidden">{children}</main>
      </body>
    </html>
  );
};

export default rootLayout;
