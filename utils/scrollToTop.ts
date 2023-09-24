import React from "react";

export const scrollToTop = () => {
  const ScrollToTop = (): void => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    //   return <></>
  };

  return ScrollToTop;
};
