import Skeleton /* { SkeletonTheme } */ from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const renderSkeleton = () => {
  return <Skeleton count={1} />;
  /*    <SkeletonTheme baseColor="#202020" highlightColor="#444"> */

  /* </SkeletonTheme> */
};
