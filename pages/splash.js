import Image from "next/image";
import Link from "next/link";

export default function Splash() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#fcfcfc] text-center px-4">
      <Image
        src="/nxpage-logo-trimmed-small.png"
        alt="NXPAGE Logo"
        width={160}
        height={160}
        className="mb-6 drop-shadow-md"
        priority
      />

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Discover. Connect. Elevate.
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        The next generation of presence is here. Meet the operators reshaping the grid.
      </p>

      <Link href="/spotlight/raye" passHref>
        <a className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition mb-2 block">
          See Raye’s Presence
        </a>
      </Link>

      <Link href="/spotlight/emma" passHref>
        <a className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition block">
          Meet Emma (Fast Hands)
        </a>
      </Link>
    </div>
  );
}