"use client"
import { ProgressBar } from "react-progressbar-fancy"

export const ProgressBarComponent = () => {
    return <div>
        <ProgressBar score={75} primaryColor={"#333333"} secondaryColor={"red"} hideText={true}/>
    </div>
}
