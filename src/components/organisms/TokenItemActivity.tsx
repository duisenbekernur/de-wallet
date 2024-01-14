import styles from "../../pages/activity/activity.module.scss";
import { abbreviateString } from "../../utils/abbreviate-string.ts";
import cls from "classnames";
import { ITokenActivity } from "../../types.ts";
import { useCallback } from "react";
import { formatDate } from "../../utils/format-date.ts";
import { generateImageUrl } from "../../utils/generate-img-url.ts";

interface IProps {
  token: ITokenActivity;
}

export default function TokenItemActivity({ token }: IProps) {
  const getFormattedDate = useCallback((date: Date) => formatDate(date), []);

  return (
    <div key={token.from || token.to} className={styles.token}>
      <div className={styles.images}>
        <img
          src={generateImageUrl("/icons/" + token.token?.icon)}
          alt={token.icon}
        />
        <img
          className={styles.iconType}
          src={generateImageUrl("/icons/" + token.type.toLowerCase() + ".png")}
          alt={token.type}
        />
      </div>
      <div className={styles.tokenInfo}>
        <div className={styles.tokenDescription}>
          <h3>{token.type}</h3>
          <p>
            {token.type === "Withdraw"
              ? "To " + abbreviateString(token.to as string, 5)
              : "From " + abbreviateString(token.from as string, 5)}
          </p>
        </div>
        <div className={styles.balanceContainer}>
          <h3
            className={cls([
              styles.tokenBalance,
              styles[token.type.toLowerCase()],
            ])}
          >
            {(token.type === "Withdraw" ? "-" : "+") +
              " " +
              token.amount +
              " " +
              token.title}
          </h3>
          <p className={styles.date}>{getFormattedDate(token.datetime)}</p>
        </div>
      </div>
    </div>
  );
}
