type TBehavior = {
  behavior: 'smooth' | 'auto';
};

const scrollToTop =
  ({ behavior = 'smooth' }: TBehavior) =>
  () =>
    window.scrollTo({ top: 0, behavior });

export default scrollToTop;
