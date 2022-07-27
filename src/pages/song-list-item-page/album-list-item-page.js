import React, { useState, useContext } from "react";
import { Repeat, Shuffle } from "../../assets/icon/icon";
import MyInput from "../../component/input/index";
import ShowCase from "../../component/show-case/show-case";
import SongListItemTitle from "../../component/album-list-items-title/album-list-items-title";
import SongListItem from "../../component/album-list-items/album-list-items";
import { Btn } from "../../styles-components/button";
import styles from "./album-list-item-page.styles.module.scss";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { CurrentMusic, CurrentAlbum, MusicOptions } from "../../utils/context";
function AlbumListItemPage({ album }) {
  const { title, description, img, songs } = album;
  const [Search, setSearch] = useState("");
  const { shuffle, repeat } = useContext(MusicOptions);
  const { curMusic, curPlay } = useContext(CurrentMusic);
  const { curAlbum, curAlbumSongIndex } = useContext(CurrentAlbum);
  const { isShuffle, setisShuffle } = shuffle;
  const { isRepeat, setisRepeat } = repeat;
  const { isPlay, setisPlay } = curPlay;

  const { currentAlbumSongsIndex, setcurrentAlbumSongsIndex } =
    curAlbumSongIndex;
  const { currentMusic, setcurrentMusic } = curMusic;

  const filterSongs = songs?.filter((item) => {
    return item.title.toLowerCase().includes(Search.toLowerCase());
  });

  return (
    <div className={styles.AlbumListItemPageBox}>
      <div className={styles.AlbumListItemPageBoxShowCase}>
        <ShowCase title={title} description={description} imgUrl={img} />
      </div>
      <div className={styles.AlbumListItemPageSongs}>
        <div className={styles.AlbumListItemPageSongsAction}>
          <div className={styles.AlbumListItemPageSongsControll}>
            {isPlay ? (
              <Btn
                type="circle-primary"
                height="60px"
                width="60px"
                onClick={() => {
                  setisPlay(false);
                }}
              >
                <MdPauseCircleFilled
                  style={{ color: "var(--green)", fontSize: "4rem" }}
                />
              </Btn>
            ) : (
              <Btn
                type="circle-primary"
                height="60px"
                width="60px"
                onClick={() => {
                  setcurrentMusic(songs[0]);
                  setisPlay(true);
                }}
              >
                <MdPlayCircleFilled
                  style={{ color: "var(--green)", fontSize: "4rem" }}
                />
              </Btn>
            )}

            <Btn
              type="link"
              onClick={() => {
                if (!isShuffle) {
                  setisRepeat(!isRepeat);
                }
              }}
            >
              <Repeat
                width={30}
                height={30}
                color={isRepeat ? "var(--green)" : "#BABABA"}
              />
            </Btn>
            <Btn
              type="link"
              onClick={() => {
                if (!isRepeat) {
                  setisShuffle(!isShuffle);
                }
              }}
            >
              <Shuffle
                width={30}
                height={30}
                color={isShuffle ? "var(--green)" : "#BABABA"}
              />
            </Btn>
          </div>
          <MyInput onChange={setSearch}  />
        </div>
        <SongListItemTitle />
        {filterSongs?.map((item, index) => (
          <SongListItem key={index} index={index} album={title} data={item} />
        ))}
      </div>
    </div>
  );
}

export default AlbumListItemPage;
