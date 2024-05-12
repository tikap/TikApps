"use client";

import Image from "next/image";
import TrafficCone from "../../resources/images/traffic_cone_32px.png";

export default function UnderConstruction() {
  return (
    <div className="py-20 flex justify-center space-x-8">
      <div className="min-w-max">
        <Image src={TrafficCone} alt="Traffic Cone Icon" />
      </div>
      <div className="text-lg"> Work in progress ...</div>
      <div className="min-w-max">
        <Image src={TrafficCone} alt="Traffic Cone Icon" />
      </div>
    </div>
  );
}
