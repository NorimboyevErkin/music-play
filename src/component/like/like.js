import React, { useState } from "react";
import { Heart, HeartFill } from "../../assets/icon/icon";
import { Btn } from "../../styles-components/button";

function Like({ islike }) {
  const [like, setlike] = useState(islike || false);
  return (
    <Btn
      type="link"
      onClick={() => {
        setlike(!like);
      }}
    >
      {like ? <HeartFill color="var(--green)" /> : <Heart />}
    </Btn>
  );
}

export default Like;
