import "./MountainCard.css";

const MountainCard = ({
  category,
  search,
  data,
  id,
  name,
  categoryjson,
  picture,
}) => {
  return (
    <div className="gallery">
      {data
        .filter((elem) =>
          elem.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .filter((elem) => categoryjson === "" || elem.category === categoryjson)
        .map((item) => (
          <img
            className="img"
            src={`http://localhost:5173/images/${item.picture}`}
          />
        ))}
    </div>
  );
};
export default MountainCard;
