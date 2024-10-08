import { PrismaClient } from "@prisma/client";
import { ActivityCard } from "@/components/ActivityCard";
import { TopBar } from "@/components/TopBar";
import { ToastContainer } from "react-toastify";

export default async function () {
  const prisma = new PrismaClient();
  const setups = await prisma.setup.findMany();
  const menu = await prisma.menu.findMany();

  return (
    <div className="bg-black min-h-screen w-screen">
      <div className="min-h-screen w-full bg-black flex flex-col">
        <div>
          <TopBar />
        </div>
        <div className="flex-grow overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
            {setups.map((setup: { id: number; screenNo: number; systemType: string; }) => (
              <ActivityCard key={setup.id} id={setup.id} number={setup.screenNo} type={setup.systemType} menu={menu} />
            ))}
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
