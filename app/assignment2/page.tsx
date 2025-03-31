import Link from "next/link";

export default function Assignment2() {
  return (
    <div className="text-black">
    <h1>Welcome to Our Website</h1>
    <nav>
      <Link href="/assignment2/about">About Us</Link> | 
      <Link href="/assignment2/contact">Contact Us</Link> |
      <Link href="/assignment2/users">Users</Link>
    </nav>
  </div>
  );
}
