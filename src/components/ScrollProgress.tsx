import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-60 h-[2px] bg-transparent" aria-hidden>
      <div
        className="h-full bg-primary shadow-[0_0_12px_var(--color-cyan-signature)] transition-[width] duration-150"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}