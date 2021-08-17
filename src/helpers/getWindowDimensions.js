export const getWindowDimensions = () => {
  const { innerHeight: height, innerWidth: width } = window;

  return { height, width };
};
