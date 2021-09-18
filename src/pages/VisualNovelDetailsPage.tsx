import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { Helmet } from "react-helmet";

import DetailsSidebar from "../components/details/DetailsSidebar";
import DetailsSidebarItem from "../components/details/DetailsSidebarItem";
import Overview from "../components/details/Overview";
import Tags from "../components/details/Tags";
import Staff from "../components/details/Staff";
import Characters from "../components/details/Characters";
import Releases from "../components/details/Releases";
import BannerImage from "../components/details/BannerImage";
import Screenshots from "../components/details/Screenshots";
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
    const filteredImages = result.payload.screenshots.filter((img) => {
      return img.nsfw === "0";
    });
    if (filteredImages.length === 0) {
      setBannerImage("");
    } else {
      setBannerImage(
        filteredImages[Math.floor(Math.random() * filteredImages.length)].src
      );
    }
    window.scrollTo(0, 0);
  }, [result]);

  if (result.status === "init" || result.status === "loading")
    return <LoadingIcon />;
  if (result.status === "error") return <ErrorIcon />;

  const vn: VnDetails = result.payload;

  const description = vn.desc.split("\n").map((line, idx) => {
    return (
      <div className="break-words w-full" key={idx}>
        {line} <br />
      </div>
    );
  });

  const screenImages = vn.screenshots
    .filter((screen) => {
      return screen.nsfw === "0" && screen.violence === "0";
    })
    .map((screen) => screen.src);

  const languages = vn.languages.map((lang, idx) => {
    const name = VNDBHelper.getFullLanguageName(lang);
    return <div key={idx}>{name}</div>;
  });

  const platforms = vn.platforms.map((plat, idx) => {
    const name = VNDBHelper.getFullPlatformName(plat);
    return <div key={idx}>{name}</div>;
  });

  return (
    <div className="flex flex-col justify-start items-center bg-light font-overlock relative w-full">
      <Helmet>
        <title>{result.payload.title} · VNList</title>
      </Helmet>
      {screenImages.length > 0 && bannerImage !== "" ? (
        <BannerImage src={bannerImage} />
      ) : (
        <div className="w-full h-40 bg-light " />
      )}

      <div className="bg-accentPrimary w-full">
        <div
          className="flex flex-row justify-center items-start w-full max-w-8xl
        px-8 pt-10  md:flex-col-reverse sm1s:items-center md:px-6 sm1s:pd-3 xs:pd-1 m-auto"
        >
          <div className="pr-8 pl-4 sm1s:px-1 w-full">
            <div
              className="italic text-3xl sm1s:text-2xl mb-5 text-right text-darkAccent sm1s:text-center
              md:break-words sm1s:mt-3"
            >
              {vn.title}
            </div>
            <DetailsTextScrollbar
              className="text-right text-lg text-dark hover:text-darkAccent block max-w-7xl
          overflow-y-hidden min-h-44 max-h-56 pl-5 md:px-3 md:w-full
          sm1s:px-2 sm1s:text-center sm1s:text-base break-words"
            >
              <div style={{ direction: "ltr" }}>{description}</div>
            </DetailsTextScrollbar>
            <ul
              className="flex flex-row justify-between items-center text-lg mt-12 text-dark font-overlock
            pl-12 lg1s:pl-9 md:pl-0 pb-3 xs:overflow-scroll"
            >
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
            className="rounded-lg h-96 w-64 md:w-48 md:h-72 sm1s:w-36 sm1s:h-56 shadow-md z-20
            mt-titleImageMedium md:-mt-48"
            src={vn.image.src}
          />
        </div>
      </div>

      <div
        className="md:px-6 sm:px-3  xs:px-2 px-8 sm:py-6 py-8 w-full 
       bg-light"
      >
        <div className="max-w-8xl w-full items-start flex flex-row sm:flex-col justify-center m-auto">
          <div className="w-full mr-10">
            <Switch>
              <Route exact path={url}>
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
              <Route exact path={`${url}/releases`}>
                <Releases releases={vn.releases} />
              </Route>
            </Switch>
          </div>
          <div
            className="flex flex-col sm:w-full sm:grid sm:grid-cols-2 sm:justify-items-center xs:gap-x-2 sm1s:gap-x-5 sm:mt-8
          sm:gap-x-8 justify-center items-start"
          >
            <DetailsSidebar>
              {vn.original && (
                <DetailsSidebarItem>
                  <>
                    <div className="text-darkAccent">Original Name</div>
                    {vn.original}
                  </>
                </DetailsSidebarItem>
              )}
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
                {vn.publishers
                  .filter((publisher) => {
                    return publisher.official;
                  })
                  .map((publisher) => {
                    return <div key={publisher.id}>{publisher.name}</div>;
                  })}
              </DetailsSidebarItem>
            </DetailsSidebar>
            <div className="sm:w-full">
              <div className="sm:hidden mb-3 mt-8 text-darkAccent text-xl">
                Media
              </div>
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
        </div>
      </div>

      {vn.screenshots.length > 0 && (
        <Screenshots screenshots={vn.screenshots} />
      )}
    </div>
  );
};

export default VisualNovelDetailsPage;
