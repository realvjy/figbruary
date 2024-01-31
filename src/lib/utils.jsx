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

export const getTagClass = (t) => {
  switch (t) {
    case "illustration":
      return "orage";
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
