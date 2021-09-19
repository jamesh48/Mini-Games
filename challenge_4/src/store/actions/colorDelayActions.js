export default (existing, newColorDelay) => {
  if ((existing + newColorDelay) > 25) {
    // If Increasing the Color Delay- do so at a rate of 1, otherwise when decreasing do so at 2.5 rate- full rate is less enjoyable
    newColorDelay = newColorDelay < 0 && existing < 200 ? newColorDelay / 5
      : newColorDelay < 0 ? newColorDelay / 2.5
        : 1

    return existing + newColorDelay;
  }
  return existing;
}