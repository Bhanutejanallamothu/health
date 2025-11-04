import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="w-full p-4 bg-gradient-to-r from-teal-200 to-cyan-200">
      <div className="container flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://swecha.org/sites/default/files/Swecha-Telangana-Logo-124w.png"
            alt="Swecha Logo"
            width={124}
            height={41}
          />
        </Link>
      </div>
    </header>
  );
}
