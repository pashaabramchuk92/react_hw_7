const HeaderLiked = () => {
  return (
    <table className="uk-table uk-table-divider uk-table-justify">
      <thead>
        <tr>
          <th>Title</th>
          <th className="uk-text-right">Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* {likedPosts.length > 0 && 
        <tr style={{border: 'none'}}>
          <th style={{color: '#333', fontWeight: '600'}}>Posts</th>
        </tr>} */}
        {/* {likedPosts?.map(post => (
          <tr key={post.id}>
            <td>
              {
                post.title.length > 45
                ? `${post.title.slice(0, 45).trim()}...`
                : post.title
              }
            </td>
            <td className="uk-text-right">
              <button
                className="uk-button uk-icon"
                type="button"
                uk-icon="icon: close;"
                onClick={() => setLikePost(pathPosts, post.id, false)}
              >
              </button>
            </td>
          </tr>
        ))} */}
{/* 
        {likedAlbums.length > 0 &&
        <tr style={{border: 'none'}}>
          <th style={{color: '#333', fontWeight: '600'}}>Albums</th>
        </tr>} */}
        {/* {likedAlbums?.map(album => (
          <tr key={album.id}>
            <td>
              {
                album.title.length > 45
                ? `${album.title.slice(0, 45).trim()}...`
                : album.title
              }
            </td>
            <td className="uk-text-right">
              <button
                className="uk-button uk-icon"
                type="button"
                uk-icon="icon: close;"
                onClick={() => setLikeAlbum(pathAlbums, album.id, false)}
              >
              </button>
            </td>
          </tr>
        ))} */}
      </tbody>
    </table>
  )
}

export default HeaderLiked;