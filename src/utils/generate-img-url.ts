export const generateImageUrl = (relativePath: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}/${relativePath}`;
};
