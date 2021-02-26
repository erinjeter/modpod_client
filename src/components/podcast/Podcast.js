// import Favorites from "./Favorites";

const Podcast = ({ title, desc, pid }) => {
  return (
    <div key={pid}>
      <p>{title}</p>
      <p>{desc}</p>
      <p>{pid}</p>
      {/* <Favorites pid={pid} /> */}
    </div>
  );
};

export default Podcast;
