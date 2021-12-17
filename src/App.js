import React, { useEffect, useState } from "react";
import Page from "./components/Page/Index";
import MainMenu from "./components/MainMenu/Index";
import Background from "./components/Background/Background";

function App() {
  const [currentLocation, setCurrentLocation] = useState({});
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [page, setPage] = useState(""); // used for shortcircuiting

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((data) => {
      setIsLoadingLocation(true);
      setCurrentLocation({
        lat: data.coords.latitude,
        long: data.coords.longitude,
      });
      setIsLoadingLocation(false);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  let display;
  if (page === "") {
    display = (
      <MainMenu {...{ page, setPage, currentLocation, getLocation }}></MainMenu>
    );
  } else {
    display = <Page {...{ page, setPage, currentLocation }}></Page>;
  }

  return (
    <>
      <Background page={page}></Background>
      {!isLoadingLocation && display}
    </>
  );
}

export default App;
