import internal from "stream";

/*
  VN search types
*/
interface VnSearchImage {
  src: string;
  nsfw?: any;
  violence?: any;
}

export interface VnSearchItem {
  title: string;
  id: string;
  image: VnSearchImage;
  popularity: number;
  released: number;
  min_released: number;
  max_released: number;
  rating: number;
  length: string;
  producers: string[];
  languages: string[];
  original: string[];
  platforms: string[];
}

export interface VnSearchQuery {
  tags: string[];
  sort_by?: string;
  sort_order?: string;
  released?: number;
  search?: string;
  nsfw?: boolean;
  results?: number;
  last_sort_value?: any;
  last_sort_vid?: string;
  languages?: string[];
  platforms?: string[];
}

/*
  VN detail types
*/
export interface VnImage {
  src: string;
  nsfw: string;
  violence: string;
}

export interface VnTag {
  tag: string;
  score: number;
  spoiler: number;
  name: string;
  parent: string;
}

export interface VnPlayTime {
  // both are numbers
  length: string;
  speed: string;
}

export interface VnStaff {
  aid: number;
  note: string;
  role: string;
  id: string;
  name: string;
  original: string;
}

export interface VnCharacter {
  id: string;
  role: string;
  spoil: number;
  seiyuu_name: string;
  orig_seiyuu_name: string;
  name: string;
  gender: string;
  image: string;
  main_spoil: number;
}

export interface VnRelation {
  vid: string;
  relation: string;
  official: boolean;
  image: string;
  title: string;
  original: string;
}

export interface VnProducer {
  id: string;
  developer: string;
  publisher: string;
  name: string;
  language: string;
}

export interface VnRelease {
  id: string;
  minage?: number;
  voiced: number;
  freeware: boolean;
  doujin: boolean;
  uncensored: boolean;
  official: boolean;
  title: string;
  original: string;
  ani_story: number;
  website: string;
  type: string;
  released: number;
  languages: string[];
  platforms: string[];
  mediums: string[];
  producers: VnProducer[];
}

// export interface VnScreenshot {
//   src: string;
//   nsfw: string;
//   violence: string;
// }

export interface VnPublisher {
  id: string;
  name: string;
  languages: string;
  official: boolean;
}

export interface VnDetails {
  id: string;
  olang: string;
  image: VnImage;
  l_wikidata: number;
  c_votecount: number;
  c_popularity: number;
  c_rating: number;
  length: number;
  title: string;
  original: string;
  alias: string;
  l_renai: string;
  desc: string;
  c_average: number;
  min_released: number;
  tags: VnTag[];
  languages: string[];
  platforms: string[];
  play_time: VnPlayTime;
  staff: VnStaff[];
  characters: VnCharacter[];
  relations: VnRelation[];
  releases: VnRelease[];
  screenshots: VnImage[];
  developers: string[];
  publishers: VnPublisher[];
}
