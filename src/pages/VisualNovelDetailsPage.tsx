import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GiTrefoilLily } from "react-icons/gi";

import Carousel from "../components/carousel/Carousel";
import DetailsSidebar from "../components/details/DetailsSidebar";
import DetailsSidebarItem from "../components/details/DetailsSidebarItem";
import DetailsSidebarWithScrollContainer from "../components/details/DetailsSidebarWithScrollContainer";
import Overview from "../components/details/Overview";

import * as VNDB from "../vndb/Vndb";
import * as VNDBHelper from "../vndb/VndbHelpers";
import { Service } from "../fetch/Service";
import { VisualNovel } from "../vndb/VndbTypes";

interface VisualNovelParams {
  id: string;
}

interface TagScore {
  name: string;
  score: number;
}

const VisualNovelDetailsPage = () => {
  const { id } = useParams<VisualNovelParams>();
  const [result, setResult] = useState<Service<VisualNovel>>({
    status: "loading",
  });

  useEffect(() => {
    VNDB.fetchVnDetails(id)
      .then((data: VisualNovel) =>
        setResult({ status: "loaded", payload: data })
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
        <GiTrefoilLily className="text-primary" size="px" />
      </div>
    );
  if (result.status === "loading")
    return (
      <div className="flex flex-col justify-start items-center bg-light min-h-screen">
        loading
      </div>
    );

  const vn: VisualNovel = result.payload;

  const description = vn.description.split("\n").map((line, key) => {
    return (
      <>
        {line}
        <br />
      </>
    );
  });

  const screenImages = vn.screens.map((screen) => screen.image);
  const languages = vn.languages.map((lang) => {
    const name = VNDBHelper.getFullLanguageName(lang);
    return <div>{name}</div>;
  });

  const tags = vn.tag_names.map((tag, key) => {
    return (
      <DetailsSidebarItem>
        <div className="text-darkAccent" key={key}>
          {tag.name}
        </div>
        {tag.score}
      </DetailsSidebarItem>
    );
  });

  return (
    <div className="flex flex-col justify-start items-center bg-light">
      {screenImages.length > 0 && <Carousel slides={screenImages}></Carousel>}

      <div
        className="flex flex-row justify-end items-start bg-accentPrimary max-w-full min-w-full
      px-8 py-5 max-h-titleDetailsContainer min-h-titleDetailsContainer"
      >
        <div className="flex flex-col justify-start pr-8 pl-4">
          <div className="italic text-2xl mb-8 text-right text-darkAccent">
            {vn.title}
          </div>
          <div
            className="text-right text-base text-dark hover:text-darkAccent block max-w-4xl
          max-h-titleDetailsDescription"
          >
            {description}
          </div>
        </div>
        <img
          className="rounded-lg max-h-titleImageMedium min-h-titleImageMedium w-auto"
          src={vn.image}
        />
      </div>

      <div className="flex flex-row justify-end px-7 py-7 w-full bg-light items-start">
        <div className="w-full lg:w-3/4">
          <Overview releases={vn.releases} />
        </div>
        <div className="flex flex-col justify-center items-start px-8">
          <DetailsSidebar>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Original Name</div>
              {vn.original}
            </DetailsSidebarItem>
            {vn.aliases !== null && (
              <DetailsSidebarItem>
                <div className="text-darkAccent">Aliases</div>
                {vn.aliases.split("\n").map((alias, key) => {
                  return <div key={key}>{alias}</div>;
                })}
              </DetailsSidebarItem>
            )}
            <DetailsSidebarItem>
              <div className="text-darkAccent">Released</div>
              {vn.released}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Play Time</div>
              {vn.length}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Rating</div>
              {vn.rating}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Popularity</div>
              {vn.popularity}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Developer</div>
              {vn.developer}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Publishers</div>
              {vn.publishers.map((publisher) => {
                return <div>{publisher}</div>;
              })}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Languages</div>
              {languages}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Original Language</div>
              {vn.orig_lang}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Platforms</div>
              {vn.platforms}
            </DetailsSidebarItem>
          </DetailsSidebar>

          <div className="mt-5 mb-3 text-darkAccent text-xl"> Tags </div>

          <DetailsSidebarWithScrollContainer>
            <DetailsSidebar>{tags}</DetailsSidebar>
          </DetailsSidebarWithScrollContainer>
        </div>
      </div>
    </div>
  );
};

export default VisualNovelDetailsPage;
