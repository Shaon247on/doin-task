import { useSyncExternalStore } from "react";

const QUERY = "(min-width: 1024px)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

/** true on lg+ screens. false on the server and on first paint, so mobile never renders the showcase. */
export function useIsDesktop() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  );
}