"use client"
import { ProgressBar } from "react-progressbar-fancy"

export const ProgressBarComponent = () => {
    return <div>
        <ProgressBar score={75} primaryColor={"#333333"} secondaryColor={"red"} hideText={true}/>
    </div>
}


// score 	Progression value of the progressbar. Required.
// label 	Label text of the progressbar. Default: ''
// progressWidth 	The width of the progressbar. Default: ''.
// hideText 	To show only progressbar and remove all text. Default: false.
// darkTheme 	Change the color of the text to black. Default: false.
// progressColor 	Some present gradient colors to choose from. 'red','green','blue','purple'. Default: 'red'.
// primaryColor 	To add custom color for the progressbar. Advice to use both primaryColor and secondaryColor. Default: ''.
// secondaryColor 	To add custom color for the progressbar. Advice to use both primaryColor and secondaryColor. Default: ''.
// disableGlow 	Remove glow effect of the progressbar. Default: false.
// className 	to add extra styles. Default: ''.