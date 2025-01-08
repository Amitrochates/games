import { HeroText } from "./ui/HeroText"
import SplineScene from "./ui/SplineScene"
export const Demo = () => {
    return <>
        <section className="h-screen bg-red-900">
        
                <div className="flex justify-center items-center w-full h-screen">
                  <div className="w-1/2"><HeroText /> </div>
                  <div className="w-1/2"><HeroText/></div>
                </div>

        </section>
    </>
}