const Fave = ({ title, desc, pid }) => {
  return (
    <div key={pid}>
      <p>{title}</p>
      <p>{desc}</p>
      <p>{pid}</p>
    </div>
  );
};

export default Fave;
