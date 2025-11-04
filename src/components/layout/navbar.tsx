import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full p-4 bg-gradient-to-r from-teal-200 to-cyan-200">
      <div className="container flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          {/* This is a placeholder for the logo in the image. */}
          <span className="font-bold text-lg">Swecha</span>
        </Link>
      </div>
    </header>
  );
}
