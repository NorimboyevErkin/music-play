import React , {useEffect} from 'react';
import Status from "../../component/status/status";

function PlayList() {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return <Status status="creating" />;
}

export default PlayList;
