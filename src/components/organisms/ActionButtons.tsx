import styles from "./action-buttons.module.scss";
import DeButton from "../atoms/DeButton.tsx";

export default function ActionButtons() {
  return (
    <div className={styles.actionButtons}>
      <DeButton icon={"arrow-up.png"} text={"Deposit"} />

      <DeButton icon={"arrow-down.png"} text={"Send"} plain={true} />

      <DeButton icon={"arrow-both-filled.png"} text={"Buy"} plain={true} />
    </div>
  );
}
