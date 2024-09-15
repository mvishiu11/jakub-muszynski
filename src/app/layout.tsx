import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Jakub Muszynski - Personal Website",
  description: "Personal website of Jakub Muszynski, a software engineer based in Warsaw.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <header className="container mx-auto px-4 py-6 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                <Image src="/personal_logo.png" 
                       alt="Logo" 
                       width={75} 
                       height={75}
                       className="rounded-full mx-auto" />
              </Link>
              <nav className="flex items-center space-x-4">
                <Link href="/" passHref>
                  <Button variant="ghost">Home</Button>
                </Link>
                <Link href="/projects" passHref>
                  <Button variant="ghost">Projects</Button>
                </Link>
                <Link href="/about" passHref>
                  <Button variant="ghost">About Me</Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="ghost">Contact</Button>
                </Link>
                <ModeToggle />
              </nav>
            </header>
            <main className="flex-grow">
              {children}
            </main>
            <footer className="container mx-auto px-4 py-6 flex justify-between items-center">
              <div>© {new Date().getFullYear()} Jakub Muszynski</div>
              <div className="space-x-4">
                <a href="https://linkedin.com/in/jakub-muszyński-51133a273" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/mvishiu11" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}