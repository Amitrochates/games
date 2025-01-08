import Link from "next/link";


export default function CTAButton({href, children,...props}: {href: string, children: React.ReactNode}) {
    return(
<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8B0000_0%,#B22222_50%,#8B0000_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
   
   <Link href={href}>{children}</Link>
  </span>
</button>)
}
// og- from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%
// ty1- from_90deg_at_50%_50%,#FF7F7F_0%,#FF0000_50%,#FF7F7F_100%