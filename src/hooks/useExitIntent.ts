"use client";

import { useState, useEffect, useCallback } from "react";

export function useExitIntent() {
  const [showModal, setShowModal] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const close = useCallback(() => setShowModal(false), []);

  useEffect(() => {
    if (hasTriggered) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0 && !hasTriggered) {
        setShowModal(true);
        setHasTriggered(true);
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  return { showModal, close };
}
