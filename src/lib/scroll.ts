export function clearLocationHash() {
  if (!window.location.hash) return;

  window.history.replaceState(
    window.history.state,
    "",
    `${window.location.pathname}${window.location.search}`,
  );
}

export function scrollPageToTop(behavior: ScrollBehavior = "auto") {
  clearLocationHash();

  const scrollRoot = document.scrollingElement ?? document.documentElement;

  window.scrollTo({ top: 0, left: 0, behavior });
  scrollRoot.scrollTo({ top: 0, left: 0, behavior });

  if (behavior === "auto") {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
}

export function scrollToHashTarget(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({ block: "start" });
  return true;
}

export function resetScrollAfterNavigation(hash: string | undefined) {
  if (hash) {
    const scrollToHash = () => scrollToHashTarget(hash);

    if (scrollToHash()) return;

    requestAnimationFrame(() => {
      if (scrollToHash()) return;
      setTimeout(scrollToHash, 0);
    });
    return;
  }

  const resetScroll = () => scrollPageToTop("auto");

  resetScroll();
  requestAnimationFrame(resetScroll);
  requestAnimationFrame(() => {
    resetScroll();
    setTimeout(resetScroll, 0);
  });
}
