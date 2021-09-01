import React from "react";
import ContentLoader from "react-content-loader";
const VisualNovelCardSkeleton = () => {
  return (
    <ContentLoader
      speed={1.3}
      width={220}
      height={368}
      backgroundColor="#f5d9d8"
      foregroundColor="#fcf7fb"
    >
      <rect x="3" y="3" rx="5" ry="5" width="208" height="288" />
      <rect x="6" y="300" rx="5" ry="5" width="120" height="20" />
    </ContentLoader>
  );
};

export default VisualNovelCardSkeleton;
