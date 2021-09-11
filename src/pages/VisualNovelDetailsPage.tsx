import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { Helmet } from "react-helmet";

import Carousel from "../components/carousel/Carousel";
import DetailsSidebar from "../components/details/DetailsSidebar";
import DetailsSidebarItem from "../components/details/DetailsSidebarItem";
import Overview from "../components/details/Overview";
import Tags from "../components/details/Tags";
import Staff from "../components/details/Staff";
import Characters from "../components/details/Characters";
import BannerImage from "../components/details/BannerImage";
import DetailsTextScrollbar from "../components/details/DetailsTextScrollbar";
import LoadingIcon from "../components/status/LoadingIcon";
import ErrorIcon from "../components/status/ErrorIcon";

import * as VNDB from "../vndb/Vndb";
import * as VNDBHelper from "../vndb/VndbHelpers";
import { Service } from "../fetch/Service";

import { VnDetails } from "../vndb/VnTypes";

interface VisualNovelParams {
  id: string;
}

const VisualNovelDetailsPage = () => {
  const { id } = useParams<VisualNovelParams>();
  const [result, setResult] = useState<Service<VnDetails>>({
    status: "loading",
  });
  const [bannerImage, setBannerImage] = useState("");

  let { path, url } = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setResult({ status: "loading" });
    VNDB.vnDetails(id)
      .then((item: VnDetails) => setResult({ status: "loaded", payload: item }))
      .catch((err) => {
        setResult({ status: "error", error: err });
      });
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (result.status !== "loaded") return;
    setBannerImage(
      result.payload.screenshots[
        Math.floor(Math.random() * result.payload.screenshots.length)
      ].src
    );
    window.scrollTo(0, 0);
  }, [result]);

  if (result.status === "init" || result.status === "loading")
    return <LoadingIcon />;
  if (result.status === "error") return <ErrorIcon />;

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

  return (
    <div className="flex flex-col justify-start items-center bg-light font-overlock">
      <Helmet>
        <title>{result.payload.title}</title>
      </Helmet>
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
        overflow-y-hidden min-h-44 max-h-56 pl-5 dir"
          >
            <div style={{ direction: "ltr" }}>{description}</div>
          </DetailsTextScrollbar>
          <ul className="flex flex-row justify-between items-center text-lg mt-12 text-dark font-overlock pl-48 pb-3">
            <Link
              to={`${url}`}
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

      <div className="flex flex-row justify-center px-12 py-8 w-full bg-light items-start">
        <div className="w-208  mr-10">
          <Switch>
            <Route exact path={`${url}`}>
              <Overview
                releases={vn.releases}
                relations={vn.relations}
                characters={vn.characters}
                staff={vn.staff}
              />
            </Route>
            <Route exact path={`${url}/tags`}>
              <Tags tags={vn.tags} />
            </Route>
            <Route exact path={`${url}/staff`}>
              <Staff staff={vn.staff} />
            </Route>
            <Route exact path={`${url}/characters`}>
              <Characters characters={vn.characters} />
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

          {/* <div className="mb-3 mt-8 text-darkAccent text-xl"> Media </div>
          <DetailsSidebar>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Languages</div>
              {languages}
            </DetailsSidebarItem>
            <DetailsSidebarItem>
              <div className="text-darkAccent">Platforms</div>
              {platforms}
            </DetailsSidebarItem>
          </DetailsSidebar> */}
        </div>
      </div>

      {screenImages.length > 0 && <Carousel slides={screenImages} />}
    </div>
  );
};

export default VisualNovelDetailsPage;
