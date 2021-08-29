const FPS = 60;

const fallbackRequestAnimFrame = (callback: FrameRequestCallback) => {
  window.setTimeout(callback, 1000 / FPS);
};

const getRequestAnimFrame = () => {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    fallbackRequestAnimFrame
  );
};

const requestAnimFrame = getRequestAnimFrame();

export default requestAnimFrame.bind(window);
