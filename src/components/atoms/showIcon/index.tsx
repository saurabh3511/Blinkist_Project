import React from 'react';

interface Props {
  width: string;
  height: string;
  viewBox: string;
  d: string;
}
function showIcon({ width, d, height, viewBox }: Props) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={d} fill="#042330" />
      </svg>
    </div>
  );
}

export default showIcon;