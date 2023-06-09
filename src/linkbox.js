import ItemLink from "./ItemLink";
import itemLinks from "./linkData.js";

const innerJSX = (data) =>
  data.map((item) => {
    return (
      <ItemLink
        name={item.name}
        img={item.img}
        link={item.link}
        imgDesc={item.imgDesc}
      />
    );
  });

const Linkbox = () => {
  return (
    <section className="linkbox main-element">{innerJSX(itemLinks)}</section>
  );
};

export default Linkbox;
