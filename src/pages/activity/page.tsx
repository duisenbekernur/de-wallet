import { useEffect, useState } from "react";
import { ITokenActivity } from "../../types.ts";
import styles from "./activity.module.scss";
import TokenItemLoading from "../../components/organisms/TokenItemLoading.tsx";
import TokenItemActivity from "../../components/organisms/TokenItemActivity.tsx";

export default function Activity() {
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState<ITokenActivity[]>([]);

  useEffect(() => {
    async function fetchTokens(): Promise<ITokenActivity[]> {
      setLoading(true);
      return new Promise((res) => {
        setTimeout(() => {
          import("../../mock.ts").then((value) => {
            const tokens = value.activityTokens.map((t) => ({
              ...t,
              token:
                value.tokens.find((token) => token.id === t.tokenId) || null,
            }));
            setLoading(false);
            res(tokens);
          });
        }, 2000);
      });
    }

    fetchTokens().then((res) => {
      setTokens(res);
    });
  }, []);

  return (
    <main className={styles.main}>
      {loading &&
        new Array(5).fill(0).map((_, i) => <TokenItemLoading key={i} />)}

      {!loading &&
        tokens.map((token, index) => (
          <TokenItemActivity key={index} token={token} />
        ))}
    </main>
  );
}
