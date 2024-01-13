import styles from "./page-changer.module.scss";
import DePageChangerItem from "../atoms/DePageChangerItem.tsx";
import { useLocation } from "react-router-dom";

export default function PageChanger() {
  const { pathname } = useLocation();

  return (
    <div className={styles.pageChanger}>
      <DePageChangerItem
        href={"/tokens"}
        text={"Tokens"}
        active={pathname === "/tokens"}
      />
      <DePageChangerItem
        href={"/activity"}
        text={"Activity"}
        active={pathname === "/activity"}
      />
    </div>
  );
}
