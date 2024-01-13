import ContentLoader from "react-content-loader";

export default function PageChangerLoading() {
  return (
    <ContentLoader
      speed={2}
      width={410}
      height={50}
      viewBox="0 0 480 50"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <rect x="-1" y="7" rx="7" ry="7" width="480" height="32" />
    </ContentLoader>
  );
}
