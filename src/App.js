import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AudioMusic,
  CurrentMusic,
  DropMenu,
  CurrentAlbum,
  MusicOptions,
  LikedSongsList,
  SearchValue,
  LibraryAlbum,
} from "./utils/context";
import Error404 from "./pages/Error404";
import Home from "./pages/home";
import Layout from "./component/layout";
import Search from "./pages/search";
import Library from "./pages/library";
import PlayList from "./pages/playlist";
import LikedSongs from "./pages/liked-songs";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
///////////////////////
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // browswer eslab qoliw uchun
import HttpApi from "i18next-http-backend"; // dynamic file bn iwlaw
import useLocalStore from "./utils/data/useLocalStore";
import getAlbum from "./utils/data/useGetData";

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
  // DropMenu
  const [OpenDropMenu, setOpenDropMenu] = useState({});
  const [OpenFullPlayer, setOpenFullPlayer] = useState({});
  // LikedSongs
  const [likedSongsId, setlikedSongsId] = useLocalStore("liked-songs-id", []);
  const [likedSongs, setlikedSongs] = useLocalStore("liked-songs", []);

  // AudioMusic
  const audioMusic = useRef(new Audio());
  // CurrentAlbum
  const [album, setalbum] = useLocalStore("album", []);
  const [currentAlbum, setcurrentAlbum] = useState(null);
  const [currentAlbumSongsIndex, setcurrentAlbumSongsIndex] = useState(0);
  // MusicOptions
  const [isShuffle, setisShuffle] = useState(false);
  const [isRepeat, setisRepeat] = useState(false);
  // LibraryAlbum
  const [libraryAlbum, setlibraryAlbum] = useState(null);
  // CurrentMusic
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setdurationTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [currentMusic, setcurrentMusic] = useState({
    id: null,
    imgUrl: null,
    title: null,
    description: null,
    audioUrl: null,
  });
  const [isPlay, setisPlay] = useState(false);
  const [volume, setvolume] = useState(audioMusic.current.volume);
  const [speed, setspeed] = useState(audioMusic.current.playbackRate);
  // SearchValue
  const [search, setsearch] = useState("");

  useEffect(() => {
    if (album.length < 1) {
      getAlbum()
        .then((data) => {
          setalbum(data);
        })
        .catch(() => {
          console.log("Loading");
        });
    }
  }, []);

  return (
    <>
      <DropMenu.Provider
        value={{
          dropSide: { OpenDropMenu, setOpenDropMenu },
          fullPlayer: { OpenFullPlayer, setOpenFullPlayer },
        }}
      >
        <LikedSongsList.Provider
          value={{
            likedMusic: { likedSongs, setlikedSongs },
            likedMusicId: { likedSongsId, setlikedSongsId },
          }}
        >
          <AudioMusic.Provider value={audioMusic.current}>
            <CurrentAlbum.Provider
              value={{
                albums: { album, setalbum },
                curAlbum: { currentAlbum, setcurrentAlbum },
                curAlbumSongIndex: {
                  currentAlbumSongsIndex,
                  setcurrentAlbumSongsIndex,
                },
              }}
            >
              <LibraryAlbum.Provider value={{ libraryAlbum, setlibraryAlbum }}>
                <MusicOptions.Provider
                  value={{
                    shuffle: { isShuffle, setisShuffle },
                    repeat: { isRepeat, setisRepeat },
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
                    <SearchValue.Provider value={{ search, setsearch }}>
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
                    </SearchValue.Provider>
                  </CurrentMusic.Provider>
                </MusicOptions.Provider>
              </LibraryAlbum.Provider>
            </CurrentAlbum.Provider>
          </AudioMusic.Provider>
        </LikedSongsList.Provider>
      </DropMenu.Provider>
    </>
  );
}

export default App;
