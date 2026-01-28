type CardProps = {
  image: string;
  title: string;
  description: string;
};

export default function Card({ image, title, description }: CardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "16px",
        padding: "16px 20px",
        border: "1.5px solid #000",
        borderRadius: "18px",
        boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
        background: "transparent",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "14px",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: "16px", fontWeight: 600 }}>
          {title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            marginTop: "4px",
            color: "#000",
            lineHeight: 1.4,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
