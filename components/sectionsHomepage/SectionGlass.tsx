"use client";

import Image from "next/image";
import { useTranslate } from "@/lib/useTranslate";
import React from "react";

type GlassData = {
  whoWeAre?: {
    image1?: string;
    image2?: string;
  };
  whatWeDo?: {
    image1?: string;
    image2?: string;
  };
  vision?: {
    image?: string;
  };
};

type TimelineRowProps = {
  side: "left" | "right";
  title: string;
  text: string;
  children: React.ReactNode;
  isLast?: boolean;
};

type TextBlockProps = {
  title: string;
  text: string;
  align?: "right";
};

type DoubleOvalProps = {
  reverse?: boolean;
  image1?: string;
  image2?: string;
};

type SingleOvalProps = {
  image?: string;
};

type MagnifyOvalProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  imageUrl?: string;
};

export default function SectionGlass({
  data,
}: {
  data: GlassData | null;
}) {
  const { t } = useTranslate();

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-[1200px] mx-auto px-6 text-black">

        <h2 className="text-center text-4xl font-bold mb-24 leading-tight">
          {t("glass", "headingLine1")}
          <br />
          {t("glass", "headingLine2")}
        </h2>

        <TimelineRow
          side="right"
          title={t("glass", "whoTitle")}
          text={t("glass", "whoDesc")}
        >
          <DoubleOvalImage
            image1={data?.whoWeAre?.image1}
            image2={data?.whoWeAre?.image2}
          />
        </TimelineRow>

        <TimelineRow
          side="left"
          title={t("glass", "whatTitle")}
          text={t("glass", "whatDesc")}
        >
          <DoubleOvalImage
            reverse
            image1={data?.whatWeDo?.image1}
            image2={data?.whatWeDo?.image2}
          />
        </TimelineRow>

        <TimelineRow
          side="right"
          title={t("glass", "visionTitle")}
          text={t("glass", "visionDesc")}
          isLast
        >
          <SingleOvalImage image={data?.vision?.image} />
        </TimelineRow>

      </div>
    </section>
  );
}

function TimelineRow({
  side,
  title,
  text,
  children,
  isLast,
}: TimelineRowProps) {
  return (
    <div className="relative grid lg:grid-cols-2 gap-16 items-center mb-32 min-h-[240px]">

      {/* Timeline Dot + Line */}
      <div className="absolute top-16 left-4 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center">
        <div className="w-4 h-4 bg-black rounded-full z-10" />
        {!isLast && (
          <div className="w-px bg-black mt-2 h-[365px]" />
        )}
      </div>

      {/* LEFT SIDE */}
      <div className="flex justify-center lg:justify-end">
        {side === "left" ? (
          <TextBlock title={title} text={text} align="right" />
        ) : (
          children
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center lg:justify-start">
        {side === "right" ? (
          <TextBlock title={title} text={text} />
        ) : (
          children
        )}
      </div>

    </div>
  );
}

function TextBlock({
  title,
  text,
  align,
}: TextBlockProps) {
  return (
    <div className={`max-w-md ${align === "right" ? "text-right" : ""}`}>
      <h3 className="text-xl font-semibold mb-4 text-black">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function DoubleOvalImage({
  reverse,
  image1,
  image2,
}: DoubleOvalProps) {
  return (
    <div className="relative w-[320px] h-[180px]">
      <MagnifyOval
        className={`${reverse ? "right-0" : "left-0"} top-6`}
        size="lg"
        imageUrl={image1}
      />
      <MagnifyOval
        className={`${reverse ? "left-0" : "right-0"} bottom-0`}
        size="sm"
        imageUrl={image2}
      />
    </div>
  );
}

function SingleOvalImage({ image }: SingleOvalProps) {
  return (
    <div className="relative w-[220px] h-[140px]">
      <MagnifyOval size="md" imageUrl={image} />
    </div>
  );
}

function MagnifyOval({
  size = "md",
  className = "",
  imageUrl,
}: MagnifyOvalProps) {
  const sizeMap = {
    sm: "w-[160px] h-[100px]",
    md: "w-[220px] h-[140px]",
    lg: "w-[240px] h-[150px]",
  };

  return (
    <div
      className={`absolute ${sizeMap[size]} rounded-full overflow-hidden ${className}`}
      style={{
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
      }}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="oval"
          fill
          className="object-cover"
          unoptimized
        />
      )}
    </div>
  );
}