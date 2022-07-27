import { useContext, memo } from "react";
import styles from "./search.styles.module.scss";
import CategoryCard from "../../component/category-card/category-card";
import Input from "../../component/input";
import { Grid } from "../../styles-components/grid";
import { album } from "../../utils/data/album";
import { SearchValue } from "../../utils/context";

function Search() {
  const { search, setsearch } = useContext(SearchValue);

  const searchFilter = album.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <div className={styles.InputBox}>
        <Input onChange={setsearch} value={search} />
      </div>
      <br />
      <Grid width="164px">
        {searchFilter.map((item, index) => (
          <CategoryCard key={index} data={item} />
        ))}
      </Grid>
    </div>
  );
}

export default memo(Search);
