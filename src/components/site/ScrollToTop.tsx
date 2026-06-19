import { useRouterState } from "@tanstack/react-router";
import { useLayoutEffect } from "react";

function scrollToHashTarget(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({ block: "start" });
  return true;
}

export function ScrollToTop() {
  const { pathname, hash } = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname,
      hash: state.location.hash,
    }),
  });

  useLayoutEffect(() => {
    if (hash) {
      if (scrollToHashTarget(hash)) return;

      requestAnimationFrame(() => {
        scrollToHashTarget(hash);
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
