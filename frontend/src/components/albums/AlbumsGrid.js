import AlbumsGridItem from "./AlbumsGridItem";

const AlbumsGrid = ({ albums }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {
        albums?.length > 0
        ? albums.map(album => <AlbumsGridItem key={album.id} album={album}/>)
        : <div className="uk-align-center">Sorry, albums not found :(</div>
      }
    </div>
  )
}

export default AlbumsGrid;