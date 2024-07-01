"use client"

import React from 'react';
import { ProgressBar } from "react-progressbar-fancy";

interface ProgressBarComponentProps {
  progress:number;
}
export const ProgressBarComponent:React.FC<ProgressBarComponentProps> = ({ progress }) => {
  return (
    <div>
    <ProgressBar
        score={progress}
        primaryColor={"#333333"}
    secondaryColor={"red"}
    hideText={true}
      />
</div>
  );
};
