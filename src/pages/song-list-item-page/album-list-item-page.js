import React, { useState } from "react";
import { Pause, Play, Repeat, Shuffle } from "../../assets/icon/icon";
import MyInput from "../../component/input/index";
import ShowCase from "../../component/show-case/show-case";
import SongListItemTitle from "../../component/album-list-items-title/album-list-items-title";
import SongListItem from "../../component/album-list-items/album-list-items";
import { Btn } from "../../styles-components/button";
import styles from "./album-list-item-page.styles.module.scss";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
function AlbumListItemPage({ album }) {
  const [play, setplay] = useState(false);
  const { title, description, imgAlbum, playlists } = album;
  return (
    <div className={styles.AlbumListItemPageBox}>
      <div className={styles.AlbumListItemPageBoxShowCase}>
        <ShowCase title={title} description={description} imgUrl={imgAlbum} />
      </div>
      <div className={styles.AlbumListItemPageSongs}>
        <div className={styles.AlbumListItemPageSongsAction}>
          <div className={styles.AlbumListItemPageSongsControll}>
            {play ? (
              <Btn
                type="circle-primary"
                onClick={() => {
                  setplay(!play);
                }}
              >
                <MdPauseCircleFilled
                  style={{ color: "var(--green)", fontSize: "5rem" }}
                />
              </Btn>
            ) : (
              <Btn
                type="circle-primary"
                onClick={() => {
                  setplay(!play);
                }}
              >
                <MdPlayCircleFilled
                  style={{ color: "var(--green)", fontSize: "5rem" }}
                />
              </Btn>
            )}
            <Btn type="link">
              <Repeat width={30} height={30} />
            </Btn>
            <Btn type="link">
              <Shuffle width={30} height={30} />
            </Btn>
          </div>
          <MyInput />
        </div>
        <SongListItemTitle />
        {playlists.map((item, index) => (
          <SongListItem
            key={index}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AlbumListItemPage;
