import ContentLoader from "react-content-loader";

export default function ActionButtonsLoading() {
  return (
    <ContentLoader
      speed={2}
      width={420}
      height={50}
      viewBox="0 0 460 50"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <rect x="1" y="1" rx="24" ry="24" width="154" height="50" />
      <rect x="343" y="1" rx="22" ry="22" width="116" height="50" />
      <rect x="172" y="0" rx="24" ry="24" width="154" height="50" />
    </ContentLoader>
  );
}
