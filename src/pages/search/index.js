import CategoryCard from "../../component/category-card/category-card";
const category = [
  {
    title: "Hip-Hop",
    imgUrl: "https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster",
    bgColor: "#A649EE",
  },
  {
    title: "Charts",
    imgUrl: "https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster",
    bgColor: "#1E3264",
  },
  {
    title: "Discover",
    imgUrl: "https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster",
    bgColor: "#27856A",
  },
  {
    title: "Travel",
    imgUrl: "https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster",
    bgColor: "#BA5D07",
  },
  {
    title: "Mood",
    imgUrl: "https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster",
    bgColor: "#876AA7",
  },
  {
    title: "Rock",
    imgUrl: "https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster",
    bgColor: "#AF2896",
  },
  {
    title: "Student",
    imgUrl: "https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster",
    bgColor: "#FC71E6",
  },
  {
    title: "Sleep",
    imgUrl: "https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster",
    bgColor: "#F48444",
  },
  {
    title: "Jazz",
    imgUrl: "https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster",
    bgColor: "#A649EE",
  },
];

function Search() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        padding:"2rem 1rem"
      }}
    >
      {/* <CategoryCard
        imgUrl="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
        title="Jazz"
        bgColor="#F48444"
      />
      <CategoryCard
        imgUrl="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
        title="Student"
        bgColor="#FC71E6"
      /> */}

      {category.map((item, index) => (
        <CategoryCard
          type="square"
          key={index}
          imgUrl={item.imgUrl}
          title={item.title}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  );
}

export default Search;
