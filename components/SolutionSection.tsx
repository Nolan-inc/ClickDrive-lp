'use client';

import React from 'react';
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

interface SolutionSectionProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
}

const SolutionSection: React.FC<SolutionSectionProps> = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-black w-full relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="AIがあなたの専属マーケターに"
        description="次世代の「AIドリブン集客プラットフォーム」でビジネスを加速させましょう"
      />
    </div>
  );
};

export default SolutionSection;