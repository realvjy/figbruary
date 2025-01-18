import seoData from "./next-seo.config";

export const getMetaDataForPage = (title) => {
  return {
    title,
    openGraph: {
      type: "website",
      description: seoData.openGraph.description,
      url: seoData.openGraph.url,
      title: title,
      locale: "en_EN",
      siteName: "figbruary",
      images: [
        {
          width: 1200,
          height: 630,
          url: seoData.openGraph.images[0].url,
          alt: title,
        },
      ],
    },
    twitter: {
      card: seoData.twitter.cardType,
      title: title,
      description: seoData.openGraph.description,
      creator: seoData.twitter.handle,
      creatorId: seoData.twitter.id,
      site: "vjy.me",
      images: [seoData.openGraph.images[0].url],
    },
  };
};

export const getCurrentDatePrompt = (data) => {
  const dateObj = new Date();
  // const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const month = dateObj.getMonth() + 1; // months from 1-12
  const day = dateObj.getDate();
  if (month == 2) {
    return data.find((date) => date.day == day);
  }
};

export const getTodayDay = () => {
  const dateObj = new Date();
  const day = dateObj.getUTCDate();
  return day;
};

export const getCurrentDate = () => {
  const dateObj = new Date();
  const day = dateObj.getDate();

  const month = dateObj.getMonth() + 1;
  return {
    day,
    month,
  };
};

export const parseDate = (dateString) => {
  // Parse the date string
  const dateParts = dateString.split(","); // Split by comma
  const [dayMonth, year] = [dateParts[0].trim(), dateParts[1].trim()]; // Separate day & month and year

  const [day, month] = dayMonth.split(" "); // Split day and month

  return {
    day: parseInt(day, 10),
    month,
    year: parseInt(year.slice(-2), 10), // Get last 2 digits of the year
  };
};

export const getTagClass = (t) => {
  switch (t) {
    case "illustration":
      return "orange";
      break;
    case "prototype":
      return "purple";
      break;
    case "UI":
      return "blue";
      break;
    default:
      return "pink";
      break;
  }
};
