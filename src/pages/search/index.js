import { useContext, memo } from "react";
import styles from "./search.styles.module.scss";
import CategoryCard from "../../component/category-card/category-card";
import Input from "../../component/input";
import { album } from "../../utils/data/album";
import { SearchValue } from "../../utils/context";

function Search() {
  const { search, setsearch } = useContext(SearchValue);

  const searchFilter = album.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className={styles.SearchBox}>
      <div className={styles.SearchInputBox}>
        <Input onChange={setsearch} value={search} />
      </div>
      <div className={styles.SearchGridBox}>
        {searchFilter.map((item, index) => (
          <CategoryCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default memo(Search);
