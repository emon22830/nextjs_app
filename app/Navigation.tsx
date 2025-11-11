import Link from "next/link";

export default function Navigation() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">MD EMON</div>

      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/service">Service</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
