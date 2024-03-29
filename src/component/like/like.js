import React, { useState, memo, useContext, useEffect } from "react";
import { Heart, HeartFill } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";
import { LikedSongsList } from "../../utils/context";

function Like({ data , isLike }) {
  const { likedMusic, likedMusicId } = useContext(LikedSongsList);
  const { likedSongs, setlikedSongs } = likedMusic;
  const { likedSongsId, setlikedSongsId } = likedMusicId;

  const [like, setlike] = useState(likedSongsId.includes(data.id));

  useEffect(() => {
    setlike(likedSongsId.includes(data.id));
  }, [likedSongsId]);

  const likeChange = async () => {
    if (like) {
      await setlikedSongsId((old) => {
        const newlikedsid = old.filter((item) => {
          return item !== data.id;
        });
        return newlikedsid;
      });
      await setlikedSongs((old) => {
        const newlikeds = old.filter((item) => {
          return item.id !== data.id;
        });
        return newlikeds;
      });
    } else {
      await setlikedSongsId((old) => {
        const newlikedsid = [...old, data.id];
        return newlikedsid.reverse();
      });

      await setlikedSongs((old) => {
        const newlikeds = [...old, data];
        return newlikeds.reverse();
      });
    }
    setlike(!like);
  };

  return (
    <Btn
      type="link"
      onClick={() => {
        likeChange();
      }}
    >
      {isLike ? <HeartFill color="var(--green)" /> : <Heart />}
    </Btn>
  );
}

export default memo(Like);
