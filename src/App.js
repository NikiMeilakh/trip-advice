import React from 'react';
import Header from "./Components/Header";
import NavButtons from "./Components/NavButtons";
import Gallery from "./Components/Gallery";
import Cities from "./Components/Cities";
import TitlebarImageList from "./Components/GalleryMUI";

const App = () => {
  return (
      <div className={"advPage"}>
        <Header/>
        <NavButtons/>
        <Gallery/>
        <TitlebarImageList/>
          <Cities/>
      </div>
  );
};

export default App;
