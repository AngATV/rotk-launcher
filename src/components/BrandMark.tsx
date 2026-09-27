interface BrandMarkProps {
  compact?: boolean;
}

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div className={`brand-mark${compact ? " brand-mark--compact" : ""}`}>
      <img
        className="brand-mark__image"
        src={compact ? "./branding/rotk-mark.svg" : "./branding/rotk-wordmark-red-skull.svg"}
        alt="ROTK — Return of the King"
        draggable={false}
      />
      {!compact && <span className="brand-mark__caption">RETURN OF THE KING</span>}
    </div>
  );
}
