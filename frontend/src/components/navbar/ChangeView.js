const ChangeView = () => {

  // const activeClassGrid = viewGrid ? 'uk-active' : '';
  // const activeClassList = viewList ? 'uk-active' : '';
  
  return (
    <div className="uk-button-group uk-margin-left">
      <button
        className={"uk-button uk-button-default"}
        // onClick={() => {setViewGrid(true); setViewList(false)}}
      >
        <span uk-icon="icon:  grid"></span>
      </button>
      <button
        className={"uk-button uk-button-default"}
        // onClick={() => {setViewGrid(false); setViewList(true)}}
      >
        <span uk-icon="icon:  list"></span>
      </button>
    </div>
  )
}

export default ChangeView;