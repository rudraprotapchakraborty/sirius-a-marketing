"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };
  
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
  
    document.addEventListener("mousemove", moveCursor);
    document.body.style.cursor = "none";
  
    // Select interactive elements and safely cast them to HTMLElement
    const elements = document.querySelectorAll("a, button");
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement; // Explicitly cast to HTMLElement
      htmlEl.style.cursor = "none";
      htmlEl.addEventListener("mouseenter", handleMouseEnter);
      htmlEl.addEventListener("mouseleave", handleMouseLeave);
    });
  
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default";
  
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement; // Cast again in cleanup
        htmlEl.style.cursor = "";
        htmlEl.removeEventListener("mouseenter", handleMouseEnter);
        htmlEl.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);  

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none mix-blend-difference rounded-full bg-white z-[9999] transition-transform duration-200 ease-out"
      style={{
        width: isHovering ? "50px" : "25px",
        height: isHovering ? "50px" : "25px",
        transition: "transform 0.1s ease-out, width 0.2s ease-out, height 0.2s ease-out",
        transformOrigin: "center",
      }}
    />
  );
};

export default CustomCursor;
