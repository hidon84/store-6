import requestAnimFrame from './requestAnimFrame';

const elementFade = (
  animationType: 'fade-in' | 'fade-out',
  $el: HTMLElement | unknown,
  duration = 400,
) => {
  return new Promise<null>((resolve, reject) => {
    if (!($el instanceof HTMLElement)) {
      reject(new Error('$el is not HTMLElement instance'));
      return;
    }
    const isFadeIn = animationType === 'fade-in';
    const $target = $el;

    $target.style.display = null;
    $target.style.opacity = isFadeIn ? '0' : '1';

    let lastDate = new Date();

    const tick = () => {
      const nowDate = new Date();
      const gap = (nowDate.getTime() - lastDate.getTime()) / duration;

      const currentOpacity = parseFloat($target.style.opacity);
      let nextOpacity = isFadeIn ? currentOpacity + gap : currentOpacity - gap;
      if (nextOpacity > 1) {
        nextOpacity = 1;
      } else if (nextOpacity < 0) {
        nextOpacity = 0;
      }

      $target.style.opacity = nextOpacity.toString();
      lastDate = nowDate;

      if (
        isFadeIn
          ? parseFloat($target.style.opacity) < 1
          : parseFloat($target.style.opacity) > 0
      ) {
        requestAnimFrame(tick);
      } else {
        if (nextOpacity <= 0) {
          $target.style.display = 'none';
        } else {
          $target.style.display = null;
        }
        resolve(null);
      }
    };

    tick();
  });
};

export const elementFadeIn = ($el: HTMLElement, duration: number) =>
  elementFade('fade-in', $el, duration);
export const elementFadeOut = ($el: HTMLElement, duration: number) =>
  elementFade('fade-out', $el, duration);

export default elementFade;
