// for browse page
export const getSortByQuery = (sort: string) => {
  if (sort === "Popularity") {
    return "popularity";
  } else if (sort === "Rating") {
    return "rating";
  } else if (sort === "Date Published") {
    // need to impleemnt
    return "";
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
