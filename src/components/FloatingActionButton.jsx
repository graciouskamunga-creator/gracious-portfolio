import { useEffect, useState } from "react";

export default function FloatingActionButton({ pathname }) {
  const [visible, setVisible] = useState(false);

  //  Hooks MUST come first
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Safe conditional render AFTER hooks
  if (pathname === "/contact") return null;
  if (!visible) return null;

  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const primaryLink = isMobile
    ? "https://wa.me/265886935105"
    : "mailto:graciouskamunga778@gmail.com";

  const primaryLabel = isMobile ? "Hire Me" : "Email Me";
  const primaryIcon = isMobile ? "📞" : "✉️";

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className="
        fixed bottom-4 right-4 md:bottom-6 md:right-6
        z-[9999]
        flex flex-col gap-3 items-end
      "
    >
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="
          bg-gray-900 hover:bg-gray-800
          dark:bg-gray-700 dark:hover:bg-gray-600
          text-white w-11 h-11 rounded-full
          shadow-lg flex items-center justify-center text-lg
        "
        aria-label="Scroll to top"
      >
        ⬆️
      </button>

      {/* Primary action */}
      <a
        href={primaryLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 hover:bg-green-600
          dark:bg-green-600 dark:hover:bg-green-700
          text-white flex items-center gap-2
          px-4 py-3 rounded-full
          shadow-xl text-sm md:text-base
        "
      >
        <span className="text-lg">{primaryIcon}</span>
        <span className="hidden sm:inline">{primaryLabel}</span>
      </a>
    </div>
  );
}
