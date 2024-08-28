import SearchInput from "./search-input-component/serachInput";
import styles from "./header.module.css";
import { useAppSelector } from "../../store/applicationStore";

function InformationBox({
  title,
  value,
}: Readonly<{ title: string; value: string | undefined }>) {
  return (
    <div className={styles["information-box"]}>
      <p className={styles["box-title"]}>{title}</p>
      <p className={styles["box-content"]}>{value}</p>
    </div>
  );
}

function Header() {
  const { location, ip, isp } = useAppSelector((state) => state.search);
  return (
    <div className={styles.header}>
      <h1>IP Address Tracker</h1>
      <SearchInput />
      <div className={styles["information-container"]}>
        <InformationBox title="ip address" value={ip} />
        <div className={styles["vertical-separator"]}></div>
        <InformationBox
          title="location"
          value={location.city + "," + location.country + "," + location.region}
        />
        <div className={styles["vertical-separator"]}></div>
        <InformationBox title="timezone" value={location.timezone} />
        <div className={styles["vertical-separator"]}></div>
        <InformationBox title="isp" value={isp} />
      </div>
    </div>
  );
}

export default Header;
