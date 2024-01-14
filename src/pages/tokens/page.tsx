import styles from "./tokens.module.scss";
import { useEffect, useState } from "react";
import { IToken } from "../../types.ts";
import TokenItem from "../../components/organisms/TokenItem.tsx";
import TokenItemLoading from "../../components/organisms/TokenItemLoading.tsx";

export default function Tokens() {
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState<IToken[]>([]);

  useEffect(() => {
    async function fetchTokens(): Promise<IToken[]> {
      setLoading(true);
      return new Promise((res) => {
        setTimeout(() => {
          import("../../mock.ts").then((value) => {
            res(value.tokens);
            setLoading(false);
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
        new Array(5)
          .fill(0)
          .map((_, index) => <TokenItemLoading key={index} />)}

      {tokens.length > 0 &&
        !loading &&
        [...tokens, ...tokens, ...tokens, ...tokens].map((token, index) => (
          <TokenItem key={index} token={token} />
        ))}
    </main>
  );
}
