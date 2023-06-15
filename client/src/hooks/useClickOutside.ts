import { useEffect } from "react";

interface useClickOutsideProps {
  ref: React.MutableRefObject<null | HTMLButtonElement>;
  callback: () => void;
  exclude: React.MutableRefObject<null | HTMLDivElement>[];
}

export const useClickOutside = ({
  ref,
  callback,
  exclude,
}: useClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const shouldExclude = exclude.some(
        (excludeRef) =>
          excludeRef.current &&
          excludeRef.current.contains(event.target as Node)
      );

      if (
        ref.current &&
        !shouldExclude &&
        !ref.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, exclude]);
};
