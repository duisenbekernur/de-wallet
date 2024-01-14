import { generateImageUrl } from "../../utils/generate-img-url.ts";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <img src={generateImageUrl("/icons/burger-menu.png")} alt="menu" />
        Menu
      </div>
      <img src={generateImageUrl("/icons/attach.png")} alt="attach" />
      <input type="text" placeholder="Message" />
      <img src={generateImageUrl("/icons/voice.png")} alt="voice" />
    </footer>
  );
}
