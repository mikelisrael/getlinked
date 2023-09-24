import { useRouter } from "next/router";
import { useEffect } from "react";

const ScrollToTop = () => {
  const router = useRouter();

  // Scroll to the top whenever the route changes
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <></>;
};

export default ScrollToTop;
