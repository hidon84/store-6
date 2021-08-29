const isSafari = () => {
  const agent = navigator.userAgent.toLocaleLowerCase();

  if (agent.indexOf('safari') !== -1) return true;
  return false;
};

export { isSafari };
