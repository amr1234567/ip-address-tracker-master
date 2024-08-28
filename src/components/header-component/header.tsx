import SearchInput from "./search-input-component/serachInput";
import styles from "./header.module.css";
import { useAppSelector } from "../../store/applicationStore";

function Header() {
  const { location, ip, isp } = useAppSelector((state) => state.search);
  return (
    <div className={styles.header}>
      <h1>IP Address Tracker</h1>
      <SearchInput />
      <div className={styles["information-container"]}>
        <div className={styles["information-box"]}>
          <p className={styles["box-title"]}>ip address</p>
          <p className={styles["box-content"]}>{ip}</p>
        </div>
        <div className={styles["vertical-separator"]}></div>
        <div className={styles["information-box"]}>
          <p className={styles["box-title"]}>location</p>
          <p className={styles["box-content"]}>
            {location.city + "," + location.country + "," + location.region}
          </p>
        </div>
        <div className={styles["vertical-separator"]}></div>
        <div className={styles["information-box"]}>
          <p className={styles["box-title"]}>timezone</p>
          <p className={styles["box-content"]}>{location.timezone}</p>
        </div>
        <div className={styles["vertical-separator"]}></div>
        <div className={styles["information-box"]}>
          <p className={styles["box-title"]}>isp</p>
          <p className={styles["box-content"]}>{isp}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
