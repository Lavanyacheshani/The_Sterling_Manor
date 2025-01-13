import { ReactNode } from "react";

type SectionProps = {
  title: string;
  description: ReactNode; // Accept JSX or string
  leafIcon?: any;
  isLeafRight?: boolean; // Determines if the leaf icon is aligned to the right
};

const CustomTitle = ({
  title,
  description,
}: SectionProps) => {
  return (
    <div className="relative py-8 lg:py-10 4xl:py-14 text-center">
      <div className="flex flex-col justify-start items-center md:gap-y-3">
        {/* Title and Description */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 4xl:text-7xl font-bold text-gold_accent
         px-10 md:px-0 max-w-3xl md:max-w-xl 2xl:max-w-4xl 4xl:max-w-6xl font-carla">
          {title}
        </h1>
        <p className="mt-1 3xl:mt-2 px-0 md:px-10 3xl:px-0 text-gray-800 max-w-3xl body-text mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CustomTitle;
