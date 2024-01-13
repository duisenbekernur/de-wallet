import ContentLoader from "react-content-loader";

export default function TokenItemLoading() {
  return (
    <ContentLoader
      speed={2}
      width={420}
      height={50}
      viewBox="0 0 460 50"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="64" y="7" rx="10" ry="10" width="113" height="20" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="29" cy="26" r="22" />
      <rect x="63" y="34" rx="8" ry="8" width="94" height="16" />
      <rect x="371" y="4" rx="11" ry="11" width="82" height="20" />
      <rect x="377" y="30" rx="9" ry="9" width="73" height="16" />
    </ContentLoader>
  );
}
