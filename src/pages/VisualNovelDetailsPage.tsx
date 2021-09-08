import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { GiTrefoilLily } from "react-icons/gi";

import Carousel from "../components/carousel/Carousel";
import DetailsSidebar from "../components/details/DetailsSidebar";
import DetailsSidebarItem from "../components/details/DetailsSidebarItem";
import DetailsSidebarWithScrollContainer from "../components/details/DetailsSidebarWithScrollContainer";
import Overview from "../components/details/Overview";

import * as VNDB from "../vndb/Vndb";
import * as VNDBHelper from "../vndb/VndbHelpers";
import { Service } from "../fetch/Service";

import { VnDetails } from "../vndb/VnTypes";

import BannerImage from "../components/details/BannerImage";
import DetailsTextScrollbar from "../components/details/DetailsTextScrollbar";

import VnRelationCard from "../components/cards/VnRelationCard";

interface VisualNovelParams {
  id: string;
}

interface TagScore {
  name: string;
  score: number;
}

const VisualNovelDetailsPage = () => {
  const { id } = useParams<VisualNovelParams>();
  const [result, setResult] = useState<Service<VnDetails>>({
    status: "loading",
  });
  const [bannerImage, setBannerImage] = useState("");

  let { path, url } = useRouteMatch();

  useEffect(() => {
    VNDB.vnDetails(id)
      .then((item: VnDetails) => setResult({ status: "loaded", payload: item }))
      .catch((err) => {
        setResult({ status: "error", error: err });
      });
  }, []);

  useEffect(() => {
    if (result.status !== "loaded") return;
    setBannerImage(
      result.payload.screenshots[
        Math.floor(Math.random() * result.payload.screenshots.length)
      ].src
    );
  }, [result.status]);

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

  const vn: VnDetails = result.payload;

  const description = vn.desc.split("\n").map((line, key) => {
    return (
      <>
        {line} <br />
      </>
    );
  });

  const screenImages = vn.screenshots.map((screen) => screen.src);

  const languages = vn.languages.map((lang) => {
    const name = VNDBHelper.getFullLanguageName(lang);
    return <div>{name}</div>;
  });

  const platforms = vn.platforms.map((plat) => {
    const name = VNDBHelper.getFullPlatformName(plat);
    return <div>{name}</div>;
  });

  const tags = vn.tags.map((tag, key) => {
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
    <div className="flex flex-col justify-start items-center bg-light font-overlock">
      {screenImages.length > 0 && <BannerImage src={bannerImage} />}
      <div
        className="flex flex-row justify-center items-start bg-accentPrimary w-full 
      px-8 pt-10 shadow-md "
      >
        <div className="pr-8 pl-4">
          <div className="italic text-3xl mb-5 text-right text-darkAccent">
            {vn.title}
          </div>
          <DetailsTextScrollbar
            className="text-right text-lg text-dark hover:text-darkAccent block max-w-7xl
        overflow-y-hidden max-h-56 pl-5 dir"
          >
            <div style={{ direction: "ltr" }}>{description}</div>
          </DetailsTextScrollbar>
          <ul className="flex flex-row justify-between items-center text-lg mt-12 text-dark font-overlock pl-48 pb-3">
            <Link
              to={`${url}/`}
              className="px-2 cursor-pointer border-b-3 border-transparent hover:text-darkAccent"
            >
              Overview
            </Link>
            <Link
              to={`${url}/tags`}
              className="px-2 cursor-pointer border-b-3 border-transparent hover:text-darkAccent"
            >
              Tags
            </Link>
            <Link
              to={`${url}/characters`}
              // need to turn off auto page scroll for this link
              className="px-2 cursor-pointer border-b-3 border-transparent hover:text-darkAccent"
            >
              Characters
            </Link>
            <Link
              to={`${url}/releases`}
              className="px-2 cursor-pointer border-b-3 border-transparent hover:text-darkAccent"
            >
              Releases
            </Link>
            <Link
              to={`${url}/staff`}
              className="px-2 cursor-pointer border-b-3 border-transparent hover:text-darkAccent"
            >
              Staff
            </Link>
          </ul>
        </div>
        <img
          className="rounded-lg h-96 w-64 shadow-md 
          mt-titleImageMedium"
          src={vn.image.src}
        />
      </div>

      <div className="flex flex-row justify-center px-12 py-12 w-full bg-light items-start">
        <div className="w-208  mr-10">
          <Switch>
            <Route exact path={url}>
              <Overview
                releases={vn.releases}
                relations={vn.relations}
                characters={vn.characters}
                staff={vn.staff}
              />
            </Route>
          </Switch>
        </div>
        <div className="flex flex-col justify-center items-start">
          <DetailsSidebar>
            <DetailsSidebarItem>
              {vn.original && (
                <>
                  <div className="text-darkAccent">Original Name</div>
                  {vn.original}
                </>
              )}
            </DetailsSidebarItem>
            {vn.alias && (
              <DetailsSidebarItem>
                <div className="text-darkAccent">Aliases</div>
                {vn.alias.split("\n").map((alias, key) => {
                  return (
                    <div className="py-0.5" key={key}>
                      {alias}
                    </div>
                  );
                })}
              </DetailsSidebarItem>
            )}
            <DetailsSidebarItem>
              <div className="text-darkAccent">Original Language</div>
              {VNDBHelper.getFullLanguageName(vn.olang)}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Released</div>
              {VNDBHelper.parseDate(vn.min_released)}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Play Time</div>
              {VNDBHelper.getPlaytimeFromLength(vn.length)}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Rating</div>
              {vn.c_rating / 100}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Popularity</div>
              {vn.c_popularity / 100}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Developer</div>
              {vn.developers[0]}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Publishers</div>
              {vn.publishers.map((publisher) => {
                return <div>{publisher.name}</div>;
              })}
            </DetailsSidebarItem>
          </DetailsSidebar>

          <div className="mb-3 mt-8 text-darkAccent text-xl"> Media </div>

          <DetailsSidebar>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Languages</div>
              {languages}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Platforms</div>
              {platforms}
            </DetailsSidebarItem>
          </DetailsSidebar>
        </div>
      </div>

      {screenImages.length > 0 && <Carousel slides={screenImages} />}
    </div>
  );
};

export default VisualNovelDetailsPage;
