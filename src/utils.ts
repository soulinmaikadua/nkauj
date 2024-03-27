export const dateFormat = (pubDate: string) => {
  // Parse the date string
  const date = new Date(pubDate);

  // Format the date
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};
