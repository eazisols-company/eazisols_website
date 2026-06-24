import { useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useLayoutEffect } from "react";
import { resetScrollAfterNavigation } from "@/lib/scroll";

export function ScrollToTop() {
  const router = useRouter();
  const { pathname, hash, status } = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname,
      hash: state.location.hash,
      status: state.status,
    }),
  });

  useLayoutEffect(() => {
    if (status !== "idle") return;
    resetScrollAfterNavigation(hash);
  }, [pathname, hash, status]);

  useEffect(() => {
    return router.subscribe("onResolved", ({ toLocation }) => {
      resetScrollAfterNavigation(toLocation.hash);
    });
  }, [router]);

  return null;
}
