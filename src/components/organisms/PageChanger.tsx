import styles from "./page-changer.module.scss";
import DePageChangerItem from "../atoms/DePageChangerItem.tsx";
import { useLocation } from "react-router-dom";

export default function PageChanger() {
  const { pathname } = useLocation();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className={styles.pageChanger}>
      <DePageChangerItem
        href={baseUrl + "tokens"}
        text={"Tokens"}
        active={pathname === baseUrl + "tokens"}
      />
      <DePageChangerItem
        href={baseUrl + "activity"}
        text={"Activity"}
        active={pathname === baseUrl + "activity"}
      />
    </div>
  );
}
