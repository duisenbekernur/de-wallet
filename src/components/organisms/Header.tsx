import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <p>Cancel</p>

      <div className={styles.title}>
        <h4>DeWallet</h4>
        <p>bot</p>
      </div>

      <img src={"/icons/more.png"} alt={"more"} />
    </header>
  );
}
