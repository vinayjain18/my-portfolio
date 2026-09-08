import "./globals.scss";
import { Manrope, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Metadata, Viewport } from "next";
import Script from "next/script";
import LocalConfig from "@/constants/config";
import { WebVitals } from "@/components/common/WebVitals";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { themeScript } from "@/components/theme/theme-script";

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  variable: "--font-sans",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-display",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

const siteUrl = "https://vinayjain.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vinay Jain — Software engineer, builder, founder",
    template: "%s — Vinay Jain",
  },
  description:
    "Vinay Jain is a software engineer and founder of WebsiNova Technologies, building RAG-based AI systems, agentic workflows and full-stack products with Next.js, FastAPI, Node.js and Django.",
  applicationName: "Vinay Jain",
  authors: [{ name: "Vinay Jain", url: siteUrl }],
  creator: "Vinay Jain",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Vinay Jain",
    title: "Vinay Jain — Software engineer, builder, founder",
    description:
      "Tech lead turned founder. I build RAG-based AI systems, agentic workflows and full-stack products, and I'm currently building Karyalo and AI voice agents.",
    locale: "en_US",
    images: [
      {
        url: "/vinay-jain-profile-photo.jpeg",
        width: 1254,
        height: 1254,
        alt: "Portrait of Vinay Jain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Jain — Software engineer, builder, founder",
    description:
      "Tech lead turned founder. RAG-based AI systems, agentic workflows and full-stack product engineering.",
    creator: "@vinayjn18",
    images: ["/vinay-jain-profile-photo.jpeg"],
  },
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
  keywords: [
    "vinay jain",
    "vinayjain18",
    "WebsiNova Technologies",
    "Karyalo",
    "AI voice agents",
    "full stack developer",
    "AI developer",
    "RAG systems",
    "agentic AI",
    "next.js developer",
    "fastapi developer",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f1" },
    { media: "(prefers-color-scheme: dark)", color: "#100f0e" },
  ],
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Must run before first paint; next/script is too late by design. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

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

        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <ThemeProvider>
          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
