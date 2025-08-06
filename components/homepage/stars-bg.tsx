import React from 'react';

type StarsOverlayProps = {
  count: number;
  starURL: string;
  children?: React.ReactNode;
};

const StarsOverlay: React.FC<StarsOverlayProps> = ({ count, starURL }) => {
  const cols = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);

  const stars = Array.from({ length: count }, (_, i) => {
    const row = Math.floor(i / cols);
    const col = i % cols;

    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    const top =
      row * cellHeight +
      Math.random() * cellHeight * 0.8 + // small offset within cell
      cellHeight * 0.1; // padding to avoid edges

    const left =
      col * cellWidth +
      Math.random() * cellWidth * 0.8 +
      cellWidth * 0.1;

    return (
      <img
        key={i}
        src={starURL}
        alt="star"
        style={{
          position: 'absolute',
          top: `${top}%`,
          left: `${left}%`,
          transform: 'translate(-50%, -50%)',
          width: 50,
          height: 50,
          pointerEvents: 'none',
        }}
      />
    );
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: 2270,
        left: 0,
        width: '100%',
        height: '90%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex:0,
      }}
    >
      {stars}
    </div>
  );
};

export default StarsOverlay;
