"use client";

import Image from "next/image";
import { useTranslate } from "@/lib/useTranslate";

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

export default function SectionGlass({ data }: { data: GlassData | null }) {
  const { t } = useTranslate();

  return (
    <section className="w-full bg-white py-24 lg:py-32">
      {/* ❌ font-serif DIHAPUS supaya sama seperti Hero */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 text-black">

        {/* HEADING (2 BARIS FIX) */}
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-24 lg:mb-32 leading-tight">
          {t("glass", "headingLine1")}
          <br />
          {t("glass", "headingLine2")}
        </h2>

        {/* WHO WE ARE */}
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

        {/* WHAT WE DO */}
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

        {/* VISION */}
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
}: {
  side: "left" | "right";
  title: string;
  text: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      className="relative grid lg:grid-cols-2 gap-16 items-center mb-32 lg:mb-40 min-h-[240px]"
      style={{ "--line-height": "365px" } as React.CSSProperties}
    >
      {/* TIMELINE DOT + LINE */}
      <div className="absolute top-16 left-4 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center">
        <div className="w-4 h-4 bg-black rounded-full z-10" />
        {!isLast && (
          <div className="w-px bg-black mt-2 h-[var(--line-height)]" />
        )}
      </div>

      {/* LEFT SIDE */}
      <div
        className={`${
          side === "left" ? "lg:order-1 text-right pr-16" : "lg:order-1"
        } flex justify-center lg:justify-end`}
      >
        {side === "left" ? (
          <TextBlock title={title} text={text} align="right" />
        ) : (
          children
        )}
      </div>

      {/* RIGHT SIDE */}
      <div
        className={`${
          side === "right" ? "lg:order-2 pl-16" : "lg:order-2"
        } flex justify-center lg:justify-start`}
      >
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
}: {
  title: string;
  text: string;
  align?: "right";
}) {
  return (
    <div className={`max-w-md ${align === "right" ? "text-right" : ""}`}>
      {/* FONT SIZE SAMA PERSIS SEPERTI VERSI ASLI */}
      <h3 className="font-bold mb-4">
        {title}
      </h3>

      <p className="text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function DoubleOvalImage({
  reverse,
  image1,
  image2,
}: {
  reverse?: boolean;
  image1?: string;
  image2?: string;
}) {
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

function SingleOvalImage({ image }: { image?: string }) {
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
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  imageUrl?: string;
}) {
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
