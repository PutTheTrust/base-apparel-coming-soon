import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin_Sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Base Apparel coming soon page",
  description: "Apparel coming soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin_Sans.className}>
        {children}
        {/* <footer className="mt-8">
          <p className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">PutTheTrust</a>.
          </p>
        </footer> */}
      </body>
    </html>
  );
}
