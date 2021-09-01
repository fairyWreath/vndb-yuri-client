const LangueShortcutMap = new Map<string, string>([
  ["ja", "Japanese"],
  ["zh", "Chinese"],
  ["en", "English"],
  ["ru", "Russian"],
  ["es", "Spanish"],
]);

export const getFullLanguageName = (lang: string) => {
  const name = LangueShortcutMap.get(lang);

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
