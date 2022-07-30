import { useContext, memo } from "react";
import styles from "./search.styles.module.scss";
import CategoryCard from "../../component/category-card/category-card";
import Input from "../../component/input";
import { SearchValue, CurrentAlbum } from "../../utils/context";
import { Title } from "../../styles-components/text";
import Loading from "../../component/loading/loading";

function Search() {
  const { albums } = useContext(CurrentAlbum);
  const { album, setalbum } = albums;
  const { search, setsearch } = useContext(SearchValue);

  const searchFilter = album.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      {album.length > 0 ? (
        <div className={styles.SearchBox}>
          <div className={styles.SearchInputBox}>
            <Input onChange={setsearch} value={search} />
          </div>
          <Title size="medium">All top music album</Title>
          <div className={styles.SearchGridBox}>
            {searchFilter.map((item, index) => (
              <CategoryCard key={index} data={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.SearchLoading}>
          <Loading />
        </div>
      )}
    </>
  );
}

export default memo(Search);
