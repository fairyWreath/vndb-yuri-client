export interface VnLinks {
  wikidata?: string;
  renai?: any;
  encubed?: any;
  wikipedia?: string;
}

export interface VnStaff {
  name: string;
  role: string;
  note: string;
  aid: number;
  sid: number;
  original: string;
}

export interface VnFlagging {
  sexual_avg: number;
  violence_avg: number;
  votecount: number;
}

export interface VnScreenImage {
  height: number;
  rid: number;
  image: string;
  flagging: VnFlagging;
  width: number;
  nsfw: boolean;
}

export interface VnImageFlagging {
  sexual_avg: number;
  violence_avg: number;
  votecount: number;
}

export interface VnRelation {
  original: string;
  id: number;
  relation: string;
  official: boolean;
  title: string;
}

export interface VnScreen {
  width: number;
  nsfw: boolean;
  flagging: VnFlagging;
  rid: number;
  image: string;
  height: number;
}

export interface VnData {
  links: VnLinks;
  votecount: number;
  tags: number[][];
  popularity: number;
  orig_lang: string[];
  image: string;
  title: string;
  staff: VnStaff[];
  length: number;
  platforms: string[];
  original: string;
  description: string;
  languages: string[];
  rating: number;
  screens: VnScreen[];
  image_flagging: VnImageFlagging;
  relations: VnRelation[];
  image_nsfw: boolean;
  aliases: string;
  anime: any[];
  id: number;
  released: string;
}

/* vndb release type */
export interface VnReleaseProducer {
  publisher: boolean;
  type: string;
  developer: boolean;
  original: string;
  name: string;
  id: number;
}

export interface VnReleaseMedium {
  medium: string;
  qty?: number;
}

export interface VnReleaseVnData {
  title: string;
  original: string;
  id: number;
}

export interface VnRelease {
  producers: VnReleaseProducer[];
  website: string;
  patch: boolean;
  released: string;
  minage?: number;
  id: number;
  languages: string[];
  voiced?: number;
  type: string;
  original: string;
  vn: VnReleaseVnData[];
  doujin: boolean;
  animation: any[];
  resolution: string;
  platforms: string[];
  catalog?: any;
  title: string;
  freeware: boolean;
  notes: string;
  media: VnReleaseMedium[];
  gtin?: any;
}

interface VnLanguageReleases {
  releases: Map<string, VnRelease>;
}

interface VnTagName {
  name: string;
  score: number;
}

// complete vn type
export interface VisualNovel {
  links: VnLinks;
  votecount: number;
  tags: number[][];
  popularity: number;
  orig_lang: string[];
  image: string;
  title: string;
  staff: VnStaff[];
  length: number;
  platforms: string[];
  original: string;
  description: string;
  languages: string[];
  rating: number;
  screens: VnScreen[];
  image_flagging: VnImageFlagging;
  relations: VnRelation[];
  image_nsfw: boolean;
  aliases: string;
  anime: any[];
  id: number;
  released: string;
  developer: string;
  publishers: string[];
  releases: VnRelease[];
  tag_names: VnTagName[];
}
