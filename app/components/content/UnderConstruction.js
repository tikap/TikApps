"use client";

import Image from "next/image";
import TrafficCone from "../../resources/images/traffic_cone_32px.png";

export default function UnderConstruction() {
  return (
    <div className="flex justify-center space-x-8">
      <Image src={TrafficCone} alt="Traffic Cone Icon" />
      <div className="text-lg"> Work in progress ...</div>
      <Image src={TrafficCone} alt="Traffic Cone Icon" />
    </div>
  );
}
