import Image from "next/image";
import Logo from "@/assets/error-404.png"
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="w-full max-w-lg">
    <Image
      src={Logo}
      alt="Page not found"
      className="w-full h-auto"
    />
  </div>
   <Link href="/"
   className="inline-flex items-center gap-2 mt-8 px-6 py-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all duration-300 hover:translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 "
   >Back to home</Link>
</div>
  );
}