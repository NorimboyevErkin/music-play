import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { AudioMusic, CurrentMusic, DropMenu, MyContext } from "./utils/context";
import Error404 from "./pages/Error404";
import Home from "./pages/home";
import Layout from "./component/layout";
import Search from "./pages/search";
import Library from "./pages/library";
import PlayList from "./pages/playlist";
import LikedSongs from "./pages/liked-songs";
import "antd/dist/antd.css";
///////////////////////
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // browswer eslab qoliw uchun
import HttpApi from "i18next-http-backend"; // dynamic file bn iwlaw

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ru", "uz"],
    fallbackLng: "en",
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

//////////////////////
function App() {
  const [myObj, setmyObj] = useState({
    music: {
      volume: 1,
      speed: 1,
    },
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setdurationTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [OpenDropMenu, setOpenDropMenu] = useState({});
  const [OpenFullPlayer, setOpenFullPlayer] = useState({});
  const [currentMusic, setcurrentMusic] = useState({
    imgUrl: null,
    title: null,
    description: null,
    audioUrl: null,
  });
  const [isPlay, setisPlay] = useState(false);
  const audioMusic = useRef(new Audio());
  const [volume, setvolume] = useState(audioMusic.current.volume);
  const [speed, setspeed] = useState(audioMusic.current.playbackRate);

  return (
    <>
      <MyContext.Provider value={myObj}>
        <DropMenu.Provider
          value={{
            dropSide: { OpenDropMenu, setOpenDropMenu },
            fullPlayer: { OpenFullPlayer, setOpenFullPlayer },
          }}
        >
          <CurrentMusic.Provider
            value={{
              curMusic: { currentMusic, setcurrentMusic },
              curPlay: { isPlay, setisPlay },
              curTime: { currentTime, setCurrentTime },
              curSeekValue: { seekValue, setSeekValue },
              curDrationTime: { durationTime, setdurationTime },
              curVolume: { volume, setvolume },
              curSpeed: { speed, setspeed },
            }}
          >
            <AudioMusic.Provider value={audioMusic.current}>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/play-list" element={<PlayList />} />
                  <Route path="/liked-songs" element={<LikedSongs />} />
                  <Route path="*" element={<Error404 />} />
                </Routes>
              </Layout>
            </AudioMusic.Provider>
          </CurrentMusic.Provider>
        </DropMenu.Provider>
      </MyContext.Provider>
    </>
  );
}

export default App;
