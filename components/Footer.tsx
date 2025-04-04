import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-300 dark:text-gray-400">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <span className="font-bold font-mono text-xl text-white">
                EventMaster
              </span>
            </div>

            <p className="mt-4 max-w-sm mx-auto lg:mx-0">
              Crafting unforgettable moments with meticulous attention to detail.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 hover:text-white"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/JJ-Eshwar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 hover:text-white"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div className="space-y-4">
              <p className="font-medium text-white">Company</p>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Pricing
                </Link>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Careers
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <p className="font-medium text-white">Help</p>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  FAQ
                </Link>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy
                </Link>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-center">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} EventMaster. All rights
              reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="text-xs hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/"
                className="text-xs hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
