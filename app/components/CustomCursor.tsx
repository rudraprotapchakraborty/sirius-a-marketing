"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(
          /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
            navigator.userAgent
          ) || window.innerWidth < 768 // Optional: treat small widths as mobile
        );
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll("a, button");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{
        width: isHovering ? "40px" : "30px",
        height: isHovering ? "40px" : "30px",
        backgroundColor: "rgba(192, 132, 252, 0.6)",
        borderRadius: "50%",
        position: "fixed",
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
        boxShadow: "0 0 12px rgba(140, 80, 255, 0.7)",
      }}
    />
  );
};

export default CustomCursor;
