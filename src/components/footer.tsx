import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-4 bg-gray-100 dark:bg-gray-900">
      <main className="flex items-center justify-between w-full max-w-2xl mx-auto py-10">
        <p className="text-sm text-gray-500">
          © 2025 CodeColorist. All rights reserved.
        </p>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-color"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-color"
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </footer>
  );
}
