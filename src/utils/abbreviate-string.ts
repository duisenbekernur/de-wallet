export const abbreviateString = (str: string, length = 5) => {
  if (str.length <= length) {
    return str;
  }

  const prefix = str.slice(0, length);
  const suffix = str.slice(-length);

  return `${prefix}...${suffix}`;
};
