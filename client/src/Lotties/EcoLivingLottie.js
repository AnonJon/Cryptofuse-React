import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./eco-living.json";

export default function EcoLivingLottie() {
  const [start, setStart] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: start,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={500} width={700} />
    </div>
  );
}
