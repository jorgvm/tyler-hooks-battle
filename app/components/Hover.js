import React from "react";

export function useHover() {
  const [hovering, setHovering] = React.useState(false);

  const mouseOver = () => setHovering(true);
  const mouseOut = () => setHovering(false);

  const attrs = {
    onMouseOver: mouseOver,
    onMouseOut: mouseOut
  };

  return [hovering, attrs];
}
