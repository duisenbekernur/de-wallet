import styles from "./token-item.module.scss";
import { IToken } from "../../types.ts";

interface IProps {
  token: IToken;
}

export default function TokenItem({ token }: IProps) {
  return (
    <div key={token.id} className={styles.token}>
      <img src={"/icons/" + token.icon} alt={token.icon} />
      <div className={styles.tokenInfo}>
        <div className={styles.tokenDescription}>
          <h3>{token.title}</h3>
          <p>{token.company}</p>
        </div>
        <p className={styles.tokenBalance}>{token.balance}</p>
      </div>
    </div>
  );
}
