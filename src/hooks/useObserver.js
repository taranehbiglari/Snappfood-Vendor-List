import { useState, useEffect, useRef } from "react";

const useObserver = ({ options, callback }) => {
  const config = { ...{ root: null, rootMargin: "0%" }, ...options };
  const observableElement = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const inView = (params) => {
    const isInView = params && params[0]?.isIntersecting;
    setIsVisible(isInView);

    if (isInView && callback) callback();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(inView, config);

    if (observableElement.current) observer.observe(observableElement.current);

    return () => {
      if (observableElement.current)
        observer.unobserve(observableElement.current);
    };
  }, [observableElement, config]);

  return { observableElement, isVisible };
};

export default useObserver;
