import React, { useState, useEffect } from "react";
import DropdownFilter from "../components/filters/DropdownFIlter";
import SearchFilter from "../components/filters/SearchFilter";
import VisualNovelCard from "../components/cards/VisualNovelCard";
import { VnData } from "../vndb/VndbTypes";
import VisualNovelCardList from "../components/cards/VisualNovelCardList";
import { fetchVnList } from "../vndb/Vndb";
import { Service } from "../fetch/Service";

const data: VnData = {
  id: 16610,
  anime: [],
  released: "2015-04-30",
  relations: [
    {
      original: "白衣性恋愛症候群",
      relation: "ser",
      id: 7301,
      official: true,
      title: "Hakuisei Ren'ai Shoukougun",
    },
  ],
  aliases: "White robe love addiction\nHakuisei aijō izonshō\nHakuai",
  image_nsfw: false,
  screens: [
    {
      height: 720,
      image: "https://s2.vndb.org/sf/74/92574.jpg",
      rid: 44928,
      flagging: { votecount: 11, violence_avg: 0, sexual_avg: 0.45 },
      nsfw: true,
      width: 1280,
    },
    {
      nsfw: false,
      width: 1280,
      flagging: { sexual_avg: 0, votecount: 12, violence_avg: 0 },
      image: "https://s2.vndb.org/sf/75/92575.jpg",
      rid: 44928,
      height: 720,
    },
    {
      nsfw: false,
      width: 1280,
      flagging: { sexual_avg: 0, votecount: 11, violence_avg: 0 },
      rid: 44928,
      image: "https://s2.vndb.org/sf/77/92577.jpg",
      height: 720,
    },
    {
      height: 720,
      rid: 44928,
      image: "https://s2.vndb.org/sf/78/92578.jpg",
      flagging: { sexual_avg: 0, violence_avg: 0, votecount: 10 },
      width: 1280,
      nsfw: false,
    },
    {
      rid: 44928,
      image: "https://s2.vndb.org/sf/79/92579.jpg",
      height: 720,
      width: 1280,
      nsfw: false,
      flagging: { sexual_avg: 0, violence_avg: 0, votecount: 12 },
    },
    {
      flagging: { sexual_avg: 0.09, violence_avg: 0, votecount: 11 },
      width: 1280,
      nsfw: false,
      height: 720,
      rid: 44928,
      image: "https://s2.vndb.org/sf/80/92580.jpg",
    },
    {
      height: 720,
      rid: 44928,
      image: "https://s2.vndb.org/sf/81/92581.jpg",
      flagging: { sexual_avg: 0, violence_avg: 0, votecount: 12 },
      width: 1280,
      nsfw: false,
    },
    {
      rid: 44928,
      image: "https://s2.vndb.org/sf/82/92582.jpg",
      height: 720,
      width: 1280,
      nsfw: true,
      flagging: { votecount: 13, violence_avg: 0, sexual_avg: 0.69 },
    },
    {
      width: 1280,
      nsfw: true,
      flagging: { votecount: 11, violence_avg: 0, sexual_avg: 1 },
      image: "https://s2.vndb.org/sf/83/92583.jpg",
      rid: 44928,
      height: 720,
    },
    {
      image: "https://s2.vndb.org/sf/16/93216.jpg",
      rid: 44928,
      height: 720,
      nsfw: true,
      width: 1280,
      flagging: { sexual_avg: 0.62, violence_avg: 0, votecount: 13 },
    },
  ],
  image_flagging: { violence_avg: 0, votecount: 11, sexual_avg: 0 },
  rating: 7.29,
  languages: ["en", "ja", "zh"],
  description:
    '"The bitter-sweet love story of the white robe angels."\n\nOosachi Asuka was a high school girl who lived life in a carefree, easygoing way while holding the nickname "Jellyfish Club Leader." But as graduation approaches, her classmates started to seriously think about college and their futures, which made Asuka feel uneasy.\n\nThe self you want to become...\nDreams of the future...\n\nUnable to answer those two thoughts, Asuka wandered in her closet for a change of pace and discovered an old picture book. The writing was faded, but enough to make out the meanings behind the words.\n\n"I will become a nurse."\n\nWithout a doubt, those were her letters she herself wrote down inside that favorite picture book of hers growing up.  That wasn\'t the only source for her resolve as she has her younger sister "Oosachi Nao":  Younger by one year, same grade level, adores her older sis, and is the self-proclaimed "Responsible Imouto" and "Onee-chan\'s Special Medicine."  Thanks to Nao who\'s looked after her and encouraged her to work hard, Asuka didn\'t have a lot of obstacles in her way. After taking the first steps to becoming a splendid nurse, they both succeeded in entering "The Imperial Capital Nursing Technical School" based in the holy site of Yurigahama.\n\n——Spring.\n\nUpon entering, Asuka encounters two classmates: "Amatou Itsuki" and "Takeda Sakuya."\n\nBoth are attractive, in-shape, excel in school, and possess many other things... none of which she has.  Asuka, who tries to get along with them, gets treated coldly by Sakuya for really no apparent reason...\n\nAlong with the guidance of their instructor "Oohara Kaede", the white robe angel (as Asuka puts it), Asuka and Nao spend their busy days as nursing students.\n\nFrom classroom lectures and nurse basics to on-the-site training.\n\nIn hospitals where the death of people exist close by, Asuka and friends grow together as people, and then as nurses.  They also experience many things not often encountered:\n\nWords of gratitude and words of abuse...\nLives that are saved and lives that are not saved...\nThe meanings behind life and death...\nThe meanings behind the entirety of a person—— the truth of a person.\n\nWhat fate awaits Asuka and everyone else within these three years?\n\nThe answer can only be...\n\n[Translated from [url=http://hakuai.kogado.com/story/]Official Site[/url]]',
  original: "白衣性愛情依存症",
  title: "Hakuisei Aijou Izonshou",
  platforms: ["win", "psv", "swi", "web"],
  length: 3,
  staff: [
    {
      original: "今井 麻美",
      role: "songs",
      name: "Imai Asami",
      aid: 410,
      note: 'OP "Sunny Place"',
      sid: 240,
    },
    {
      name: "Hara Yumi",
      role: "songs",
      note: 'ED "Kimi to no Mirai"',
      aid: 4709,
      sid: 3261,
      original: "原 由実",
    },
    {
      name: "Nanba Ken",
      role: "music",
      note: "BGM",
      aid: 5836,
      sid: 4245,
      original: "難波 研",
    },
    {
      original: "濱田 智之",
      sid: 5526,
      name: "Hamada Tomoyuki",
      role: "music",
      note: "ED composition",
      aid: 7375,
    },
    {
      role: "chardesign",
      name: "Hayase Akira",
      note: null,
      aid: 11291,
      sid: 8835,
      original: "早瀬あきら",
    },
    {
      original: "早瀬あきら",
      name: "Hayase Akira",
      role: "art",
      note: null,
      aid: 11291,
      sid: 8835,
    },
    {
      note: null,
      aid: 11292,
      role: "scenario",
      name: "Kousaka Hio",
      sid: 8836,
      original: "向坂氷緒",
    },
    {
      sid: 11387,
      name: "Xano Yuuki",
      role: "music",
      aid: 14435,
      note: "BGM",
      original: "クサノ ユウキ",
    },
  ],
  image: "https://s2.vndb.org/cv/09/27609.jpg",
  popularity: 3.65,
  orig_lang: ["ja"],
  votecount: 400,
  tags: [
    [32, 2.43, 0],
    [96, 2, 0],
    [97, 3, 0],
    [101, 2.67, 0],
    [104, 1.5, 0],
    [134, 2.75, 0],
    [135, 2.8, 0],
    [148, 2.8, 0],
    [152, 2.5, 2],
    [168, 2, 0],
    [192, 2, 2],
    [221, 2.5, 0],
    [228, 2.6, 2],
    [235, 2.83, 0],
    [270, 2.57, 0],
    [290, 2.8, 2],
    [373, 2.5, 0],
    [432, 2.33, 2],
    [465, 2.25, 0],
    [490, 3, 0],
    [508, 2.67, 1],
    [553, 2.14, 0],
    [596, 2.67, 1],
    [602, 2.67, 0],
    [606, 3, 0],
    [635, 3, 0],
    [672, 2.67, 0],
    [676, 2, 0],
    [691, 2.5, 2],
    [728, 2.8, 0],
    [783, 0.71, 1],
    [799, 1, 2],
    [848, 1.67, 2],
    [874, 2.83, 2],
    [875, 2, 0],
    [876, 2.67, 0],
    [1059, 1.5, 0],
    [1251, 3, 0],
    [1470, 1, 0],
    [1471, 3, 0],
    [1474, 2.5, 0],
    [1529, 2.29, 1],
    [1832, 2.5, 0],
    [1903, 2.8, 0],
    [1986, 3, 0],
    [2008, 2.62, 2],
    [2016, 2, 0],
    [2101, 1.83, 0],
    [2174, 3, 0],
    [2232, 2, 0],
    [3085, 2.67, 0],
    [3203, 2, 0],
    [3247, 3, 0],
  ],
  links: { wikipedia: null, encubed: null, wikidata: "Q22128158", renai: null },
};
const BrowseVisualNovelsPage = () => {
  const [result, setResult] = useState<Service<VnData[]>>({
    status: "loading",
  });

  useEffect(() => {
    fetchVnList()
      .then((items: VnData[]) =>
        setResult({ status: "loaded", payload: items })
      )
      .catch((err) => {
        console.log(err);
        setResult({ status: "error", error: err });
      });
  }, []);

  if (result.status === "init") return <div>init</div>;
  if (result.status === "error")
    return (
      <div className="flex flex-col justify-start items-center bg-light min-h-screen py-16">
        error
      </div>
    );
  if (result.status === "loading")
    return (
      <div className="flex flex-col justify-start items-center bg-light min-h-screen">
        loading
      </div>
    );

  return (
    <div
      className="bg-light w-full min-h-screen bottom-0 px-12
    py-4 font-overlock"
    >
      <div className="flex flex-row justify-between items-center mb-6">
        <SearchFilter />
        <DropdownFilter
          label="Tags"
          items={["test1", "test2"]}
          multiSelect={true}
        />
        <DropdownFilter label="Languages" items={[]} multiSelect={true} />
        <DropdownFilter label="Released" items={[]} multiSelect={false} />
        <DropdownFilter label="Platforms" items={[]} multiSelect={true} />
      </div>
      <VisualNovelCardList vns={result.payload} />
    </div>
  );
};

export default BrowseVisualNovelsPage;
