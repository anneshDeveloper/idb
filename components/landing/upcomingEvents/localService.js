export const setBackground = (item) => {
  let arrayBgImage = [
    "/upcomingEvent/Activities_Icons_Set2.svg",
    "/upcomingEvent/Activities_Icons_Set3.svg",
    "/upcomingEvent/Activities_Icons_Set4.svg",
    "/upcomingEvent/Activities_Icons_Set5.svg",
  ];
  let bg;
  let bgImage = arrayBgImage[Math.floor(Math.random() * arrayBgImage.length)];
  switch (item.EventType) {
    case "Educational":
      bg = "#24B3B7";
      return [bg, bgImage];
    case "Community":
      bg = "#FC6273";
      return [bg, bgImage];
    case "Promotional":
      bg = "#223771";
      return [bg, bgImage];
  }
};
