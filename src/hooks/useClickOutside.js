import { useRef, useEffect } from "react";

const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let theHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", theHandler);

    return () => {
      document.removeEventListener("mousedown", theHandler);
    };
  });

  return domNode
};

export default useClickOutside