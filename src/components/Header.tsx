import { StaticNavbar } from "./ui/StaticNavbar"
import { Navbar } from "./ui/StaticNavbar";
export const Header = () => {
    // return (
    //     <header className="fixed left-0 right-0 top-0 z-50 p-4 transition-all duration-300 ease-in-out">
    //        <div className="mx-auto max-w-[1070px]">
    //             <nav
    //             className="rounded-2xl border-[1.5px] border-gray-200 bg-background px-2 transition-all duration-300 ease-in-out dark:border-gray-50"
    //             aria-label="Main navigation"
    //             >
    //                 <StaticNavbar/>
    //             </nav>
    //         </div>
    //     </header>
    // )

    return (
        <div className="dark relative w-full flex items-center justify-center">
          <Navbar className="top-2" />
         
        </div>
      );

}