export const formatDate = (date: Date): string => {
  const options = {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  return new Date(date).toLocaleString("en-US", options);
};
