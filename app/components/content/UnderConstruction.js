"use client";

import Image from "next/image";
import UnderConstructionImage from "@/resources/images/under_construction_512x512.png";

export default function UnderConstruction() {
  return (
    <div className="py-20 flex justify-center">
      <div className="justify-items-center space-y-10">
        <Image
          src={UnderConstructionImage}
          alt="Under Construction Sign"
          height={150}
          width={150}
        />
        <div className="text-lg">Work in progress</div>
      </div>
    </div>
  );
}
