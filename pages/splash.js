import Image from "next/image";
import Link from "next/link";

export default function Splash() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#fcfcfc] text-center px-4">
      <div className="relative h-24 w-24 md:h-32 md:w-32 mb-6 drop-shadow-md">
        <Image
          src="/nxpage-logo-trimmed-main.png"
          alt="NXPAGE Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Discover. Connect. Elevate.
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        The next generation of presence is here. Meet the operators reshaping the grid.
      </p>
      <Link href="/spotlight/raye">
        <a className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition mb-2">
          See Raye’s Presence
        </a>
      </Link>
      <Link href="/spotlight/emma">
        <a className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition">
          Meet Emma (Fast Hands)
        </a>
      </Link>
    </div>
  );
}