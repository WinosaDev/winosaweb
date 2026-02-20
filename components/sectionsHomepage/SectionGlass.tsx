import Image from "next/image";

export default function SectionFrame() {
  return (
    <section className="w-full bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 font-serif text-black">

        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-24 lg:mb-32 leading-tight">
          EMPOWERING YOUR VISION WITH PEOPLE,<br />
          INTEGRITY, AND TECHNOLOGY
        </h2>

        <TimelineRow
          side="right"
          title="WHO WE ARE"
          text="Kami adalah sekelompok profesional dengan kreativitas dan kemampuan tingkat tinggi.
          Dengan kejujuran, keberanian, dan kolaborasi tim yang kuat, kami mengubah visi Anda
          menjadi solusi nyata yang memberikan nilai bisnis jangka panjang."
        >
          <DoubleOvalImage />
        </TimelineRow>

        <TimelineRow
          side="left"
          title="WHAT WE DO"
          text="Winosa Mitra Bharatajaya adalah konsultan bisnis dan pengembang software yang
          berfokus pada solusi IT untuk mendukung pertumbuhan bisnis Anda."
        >
          <DoubleOvalImage reverse />
        </TimelineRow>

        <TimelineRow
          side="right"
          title="VISION, MISSION & TRUST"
          text="Kami berkomitmen menjadi perusahaan konsultan dan pengembang IT yang terpercaya,
          inovatif, serta mampu bersaing di tingkat nasional dan internasional."
          isLast
        >
          <SingleOvalImage />
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
      <div
        className="
          absolute
          top-16
          left-4
          lg:left-1/2
          lg:-translate-x-1/2
          flex
          flex-col
          items-center
        "
      >
        <div className="w-4 h-4 bg-black rounded-full z-10" />
        {!isLast && (
          <div className="w-px bg-black mt-2 h-[var(--line-height)]" />
        )}
      </div>

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
      <h3 className="font-bold mb-4">{title}</h3>
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function DoubleOvalImage({ reverse }: { reverse?: boolean }) {
  return (
    <div className="relative w-[320px] h-[180px]">
      <MagnifyOval
        className={`${reverse ? "right-0" : "left-0"} top-6`}
        size="lg"
      />
      <MagnifyOval
        className={`${reverse ? "left-0" : "right-0"} bottom-0`}
        size="sm"
      />
    </div>
  );
}

function SingleOvalImage() {
  return (
    <div className="w-[220px] h-[140px]">
      <MagnifyOval size="md" />
    </div>
  );
}

function MagnifyOval({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
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
        backgroundImage: "url(/placeholder.jpg)",
        backgroundSize: "180%",
        backgroundPosition: "center",
        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
      }}
    >
      <Image
        src="/placeholder.jpg"
        alt="oval"
        fill
        className="object-cover opacity-40"
      />
    </div>
  );
}
