import React from "react";
import {ApplicationRoute} from "@/utils/routes";
import {useRouter} from "next/navigation";

type Feature = {
  title: string;
  link: string;
};

const features: Feature[] = [
  { title: "ACCOMMODATION", link: ApplicationRoute.ACCOMMODATION },
  { title: "BANQUET", link: ApplicationRoute.BANQUET },
  { title: "RESTAURANT", link: ApplicationRoute.DINING },
  { title: "EVENTS", link: ApplicationRoute.EVENTS },
];

const FeaturesList: React.FC = () => {
  const route = useRouter();

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl 3xl:max-w-4xl py-10 mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-black"
        >
          {/* Title */}
          <h3 className="font-carla text-title text-[#0A0A0A]">
            {feature.title}
          </h3>

          {/* Link */}
          <button
            onClick={()=>{route.push(feature.link)}}
            className="text-title flex items-center gap-2 font-cerapro_medium hover:text-gold_accent"
          >
            BOOK NOW <span aria-hidden>→</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
