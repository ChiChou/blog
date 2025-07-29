import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="p-4 bg-gray-100 dark:bg-gray-800">
      <main className="flex items-center justify-between w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold m-2">
          <Link href="/" className="logo">
            CodeColorist
          </Link>
        </h1>
        <ThemeToggle />
      </main>
    </header>
  );
}
