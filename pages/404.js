// pages/404.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#fcfcfc] text-gray-800">
      <h1 className="text-5xl font-bold mb-2 text-yellow-500">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        You’ve reached uncharted territory. Maybe you meant to meet an operator?
      </p>
      <Link href="/pad">
        <a className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
          Go to the Pad
        </a>
      </Link>
    </div>
  );
}