import React, { useState } from "react";
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
  const [isOpenDropMenu, setisOpenDropMenu] = useState({});
  const [currentMusic, setcurrentMusic] = useState(
    "https://cdns-preview-e.dzcdn.net/stream/c-efe84e57a61d55f279c9f0c988eb4534-6.mp3"
  );
  const [isPlay, setisPlay] = useState(false);
  const [audioMusic, setaudioMusic] = useState(null);
  const audio = new Audio();
  return (
    <>
      <MyContext.Provider value={myObj}>
        <DropMenu.Provider value={{ isOpenDropMenu, setisOpenDropMenu }}>
          <CurrentMusic.Provider
            value={{
              curMusic: { currentMusic, setcurrentMusic },
              curPlay: { isPlay, setisPlay },
              curTime: { currentTime, setCurrentTime },
              curSeekValue: { seekValue, setSeekValue },
              curDrationTime: { durationTime, setdurationTime },
            }}
          >
            <AudioMusic.Provider value={{ audioMusic, setaudioMusic }}>
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
