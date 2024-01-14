import ActionButtons from "./components/organisms/ActionButtons";
import DeButton from "./components/atoms/DeButton";
import PageChanger from "./components/organisms/PageChanger";

import styles from "./App.module.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ActionButtonsLoading from "./components/organisms/ActionButtonsLoading.tsx";
import PageChangerLoading from "./components/organisms/PageChangerLoading.tsx";
import WalletBalance from "./components/organisms/WalletBalance.tsx";
import WalletBalanceLoading from "./components/organisms/WalletBalanceLoading.tsx";
import Header from "./components/organisms/Header.tsx";
import Footer from "./components/organisms/Footer.tsx";

export default function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pathname === baseUrl) {
      navigate("tokens");
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.contentTop}>
        <Header />
        {loading ? <WalletBalanceLoading /> : <WalletBalance />}
      </section>

      <section className={styles.tokensSection}>
        {loading ? <ActionButtonsLoading /> : <ActionButtons />}

        {!loading && <DeButton icon={"arrow-up.png"} text={"Buy DFC"} />}

        {loading ? <PageChangerLoading /> : <PageChanger />}

        <Outlet />
      </section>

      <Footer />
    </main>
  );
}
