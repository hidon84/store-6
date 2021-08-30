/* eslint-disable @typescript-eslint/dot-notation */
const isSafari = () => {
  const check =
    /constructor/i.test(window.HTMLElement.toString()) ||
    ((p) => {
      return p.toString() === '[object SafariRemoteNotification]';
    })(
      !window['safari'] ||
        (typeof window['safari'] !== 'undefined' &&
          window['safari'].pushNotification),
    );
  return check;
};

export { isSafari };
