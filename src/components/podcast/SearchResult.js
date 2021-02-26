
const SearchResult = ({podcast}) => {
  return (
    <div>
      <p>
        {podcast.title_original}
        {podcast.description_original}
        <div key={podcast.id}></div>
      </p>
    </div>
  );
};

export default SearchResult;
