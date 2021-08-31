import React, { useEffect } from "react";

type AnyEvent = MouseEvent | TouchEvent;

// cool syntax for arrow function with generics
const useClickOutside = <T extends HTMLElement = HTMLElement>(
  func: () => any,
  ref: React.RefObject<T>
) => {
  const handleClickOutside = (event: AnyEvent) => {
    // need as Node here for nullchecking
    if (ref.current && !ref.current.contains(event.target as Node)) {
      func();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);
};

export { useClickOutside };
