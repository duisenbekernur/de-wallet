import ContentLoader from "react-content-loader";

export default function WalletBalanceLoading() {
  return (
    <ContentLoader
      speed={2}
      width={164}
      height={55}
      viewBox="0 0 164 55"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ margin: "0 auto" }}
    >
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <rect x="0" y="-1" rx="20" ry="20" width="164" height="27" />
      <rect x="85" y="34" rx="0" ry="0" width="1" height="15" />
      <rect x="21" y="31" rx="11" ry="11" width="118" height="17" />
    </ContentLoader>
  );
}
