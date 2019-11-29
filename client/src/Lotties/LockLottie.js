import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./lock.json";

export default function LockLottie() {
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
      <Lottie options={defaultOptions} height={50} width={50} />
    </div>
  );
}
