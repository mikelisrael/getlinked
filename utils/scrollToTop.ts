import React from "react";

const scrollToTop = () => {
  const ScrollToTop = (): void => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    //   return <></>
  };

  return ScrollToTop;
};

export default scrollToTop;
