import {motion} from "framer-motion";
import { Loader } from "lucide-react";
export default function SplineLoader() {
    return (
        <motion.div
        className="relative h-[200px] w-[200px] md:h-[600px] flex items-center justify-center text-gray-200"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <Loader size={100} />
      </motion.div>
    )
}