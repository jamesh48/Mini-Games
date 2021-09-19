export default (existingColors) => {
  const lastColor = existingColors.pop();
  existingColors.unshift(lastColor);
  return [...existingColors];
};
