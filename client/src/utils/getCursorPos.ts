const getCursorPos = (
  e: React.MouseEvent,
  ref: React.MutableRefObject<HTMLElement>,
) => {
  if (!ref.current) return { x: -1, y: -1, maxX: -1, maxY: -1 };
  const imgRect = ref.current.getBoundingClientRect();
  const x = e.pageX - imgRect.left;
  const y = e.pageY - imgRect.top;
  const resX = x - window.pageXOffset;
  const resY = y - window.pageYOffset;

  return {
    x: resX,
    y: resY,
    maxX: imgRect.width,
    maxY: imgRect.height,
  };
};

export default getCursorPos;
