import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import Script from "next/script";
import LocalConfig from "@/constants/config";
import { WebVitals } from "@/components/common/WebVitals";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Vinay Jain",
  description:
    "Hi, I'm Vinay Jain, a proficient Software Engineer and AI Developer from India, skilled in front-end and back-end development using modern tech stacks along with LLM and RAG-based applications.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      sizes: "any",
      type: "image/svg+xml",
    },
  ],
  keywords: [
    "vinay jain",
    "vinay",
    "vinayjain18",
    "vinay-jain",
    "jain vinay",
    "Websinova Technologies",
    "websinova",
    "full stack developer",
    "indian developer",
    "AI developer",
    "AI expert",
  ],
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${LocalConfig.values.NEXT_PUBLIC_GTAG_ID}`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${LocalConfig.values.NEXT_PUBLIC_GTAG_ID}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
      </head>

      <body
        className={
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }
      >
        {process.env.NODE_ENV === "development" ? <WebVitals /> : null}
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
