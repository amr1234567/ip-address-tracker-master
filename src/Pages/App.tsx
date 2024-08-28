import styles from "./App.module.css";
import "leaflet/dist/leaflet.css";
import CustomMap from "../components/map-component/customMap";
import { useEffect, useState } from "react";
import {
  backgroundImageForDesktop,
  backgroundImageForMobile,
} from "../constants/imagesImports";
import Header from "../components/header-component/header";

function App() {
  const [loadedInnerWidth, setLoadedInnerWidth] = useState(1400);
  useEffect(() => {
    const setInnerWidth = () => {
      setLoadedInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", setInnerWidth);
    return () => {
      window.removeEventListener("resize", setInnerWidth);
    };
  });
  return (
    <div className={styles.main}>
      <Header />
      <img
        className={styles["background-image"]}
        src={
          loadedInnerWidth < 700
            ? backgroundImageForMobile
            : backgroundImageForDesktop
        }
        alt=""
      />
      <CustomMap />
    </div>
  );
}

export default App;
