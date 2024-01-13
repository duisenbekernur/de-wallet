import styles from "./wallet-balance.module.scss";

export default function WalletBalance() {
  return (
    <div className={styles.wallet}>
      <h2>
        $2,934 <span>.32</span>
      </h2>
      <p>TjkLk...5FGs</p>
    </div>
  );
}
