const BASE_IMAGE_URL = `https://s2.vndb.org`;
const IMAGE_FORMAT = `.jpg`;

export const getImageUrlFromId = (imgId: string) => {
  // need to handle null images from db
  if (imgId === undefined || imgId === null) return "";

  const group = imgId.substring(0, 2);
  const fullNum = imgId.substring(2, imgId.length);
  const num = imgId.substring(imgId.length - 2, imgId.length);

  return `${BASE_IMAGE_URL}/${group}/${num}/${fullNum}${IMAGE_FORMAT}`;
};

export const parseDate = (dateNum: number) => {
  const dateStr = dateNum.toString();
  if (dateStr.toString().length !== 8) {
    return "Unrecognized date format";
  }

  const year = dateStr.substr(0, 4);

  let month = dateStr.substr(4, 2);
  console.log(month);
  if (month === "01") {
    month = "Jan";
  } else if (month === "02") {
    month = "Feb";
  } else if (month === "03") {
    month = "Mar";
  } else if (month === "04") {
    month = "Apr";
  } else if (month === "05") {
    month = "May";
  } else if (month === "06") {
    month = "Jun";
  } else if (month === "07") {
    month = "Jul";
  } else if (month === "08") {
    month = "Aug";
  } else if (month === "09") {
    month = "Sep";
  } else if (month === "10") {
    month = "Oct";
  } else if (month === "11") {
    month = "Nov";
  } else {
    month = "Dec";
  }

  let date = dateStr.substr(6, 2);
  if (date[0] == "0") date = date[1];

  return `${month} ${date}, ${year}`;
};

export const getSortByQuery = (sort: string) => {
  if (sort === "Popularity") {
    return "popularity";
  } else if (sort === "Rating") {
    return "rating";
  } else if (sort === "Date Published") {
    return "min_released";
  } else if (sort === "Recent Release") {
    return "max_released";
  } else {
    return "popularity";
  }
};

export const getSortOrderQuery = (desc: boolean) => {
  if (desc) return "descending";
  return "ascending";
};

export const getPlaytimeFromLength = (length: number) => {
  if (length === 0) return "Unknown";
  else if (length === 1) return "< 2 hours";
  else if (length === 2) return "2 - 10 hours";
  else if (length === 3) return "10 - 30 hours";
  else if (length === 4) return "30 - 50 hours";
  else return "> 50 hours";
};

const RELATION_SHORTCUT_MAP = new Map<string, string>([
  ["ser", "Series"],
  ["seq", "Sequel"],
  ["preq", "Prequel"],
  ["set", "Setting"],
  ["char", "Shares Character"],
  ["side", "Side Story"],
  ["fan", "Fandisc"],
  ["alt", "Alternate Version"],
]);

export const getRelationName = (rel: string) => {
  if (RELATION_SHORTCUT_MAP.has(rel)) {
    return RELATION_SHORTCUT_MAP.get(rel);
  }

  return rel;
};

const LANGUAGE_SHORTCUT_MAP = new Map<string, string>([
  ["ja", "Japanese"],
  ["zh", "Chinese"],
  ["en", "English"],
  ["ru", "Russian"],
  ["es", "Spanish"],
  ["it", "Italian"],
  ["fr", "French"],
  ["ko", "Korean"],
  ["vi", "Vietnamese"],
  ["pt-br", "Brazil"],
  ["pl", "Polish"],
  ["tr", "Turkish"],
  ["de", "German"],
  ["hu", "Hungarian"],
  ["ar", "Argentinian"],
  ["cs", "Czech"],
]);

export const LANGUAGE_REV_SHORTCUT_MAP = () => {
  let res = new Map<string, string>();

  LANGUAGE_SHORTCUT_MAP.forEach((full: string, sc: string) => {
    res.set(full, sc);
  });

  return res;
};

export const FILTER_LANGUAGE_ITEMS = () => {
  let items: string[] = [];

  LANGUAGE_SHORTCUT_MAP.forEach((full: string, sc: string) => {
    items.push(full);
  });

  items = items.sort();
  return items;
};

export const getFullLanguageName = (lang: string) => {
  const name = LANGUAGE_SHORTCUT_MAP.get(lang);

  if (name !== undefined) {
    return name;
  }

  return "Unknown";
};

export interface VndbSearchQuery {
  page?: number;
  sort?: string;
  tags?: string[];
  search?: string;
}

export const FILTER_MAIN_THEME_TAGS_MAP = new Map<string, string>([
  ["Action", "g12"],
  ["Romance", "g96"],
  ["Drama", "g147"],
  ["Fantasy", "g2"],
  ["Science Fiction", "g105"],
  ["Sexual Content", "g23"],
  ["Comedy", "g104"],
  ["Horror", "g7"],
  ["Yuri", "g1986"],
]);

export const getTagIdsFromNames = (names: string[]) => {
  return names.map((name) => {
    const id = FILTER_MAIN_THEME_TAGS_MAP.get(name);
    if (id !== undefined) return id;
    return ""; // just incase, typsecript type checking
  });
};

export const FILTER_MAIN_THEME_TAGS_ITEMS = () => {
  let items: string[] = [];
  FILTER_MAIN_THEME_TAGS_MAP.forEach((id: string, name: string) => {
    items.push(name);
  });

  items = items.sort();
  return items;
};

export const FILTER_RELEASED_YEARS = [
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009",
  "2008",
  "2007",
  "2006",
  "2005",
  "2004",
  "2003",
  "2002",
  "2001",
  "2000",
  "1999",
  "1998",
  "1997",
  "1996",
  "1995",
  "1994",
  "1993",
  "1992",
  "1991",
  "1990",
  "1989",
  "1988",
  "1987",
  "1986",
  "1985",
  "1984",
  "1983",
  "1982",
  "1981",
  "1980",
];

export const FILTER_PLATFORMS_MAP = new Map<string, string>([
  ["Windows", "win"],
  ["Linux", "lin"],
  ["Mac OS", "mac"],
  ["Website", "web"],
  ["Android", "and"],
  ["IOS", "ios"],
  ["Nintendo DS", "nds"],
  ["PSP", "psp"],
  ["PlayStation 2", "ps2"],
  ["PlayStation 3", "ps3"],
  ["PlayStation 4", "ps4"],
  ["PlayStation 5", "ps5"],
  ["PlayStation Vita", "psv"],
  ["VNDS", "vns"],
  ["Blu-ray Player", "bdp"],
  ["Xbox 360", "xb3"],
  ["Xbox One", "xbo"],
  ["Nintendo Switch", "swi"],
  ["Nintendo Wii", "wii"],
  ["Nintendo Wii U", "wiu"],
  ["Nintendo 3DS", "n3d"],
  ["Gameboy Advance", "gba"],
  ["Gameboy Color", "gbc"],
]);

export const FILTER_PLATFORM_ITEMS = () => {
  let items: string[] = [];
  FILTER_PLATFORMS_MAP.forEach((sc: string, full: string) => {
    items.push(full);
  });

  items = items.sort();
  return items;
};
