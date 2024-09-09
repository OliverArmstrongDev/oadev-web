import { useEffect, useState } from "react";

export const useIsMobile = (maxWidth = 768) => {
    const [isMobile, setIsMobile] = useState<Boolean>(window.innerWidth <= maxWidth);
  
    useEffect(() => {
      const handleResize = () => {
        console.log("🚀 ~ Resize: ",  window.innerWidth <= maxWidth)
        setIsMobile(window.innerWidth <= maxWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, [maxWidth]);
  
    return isMobile;
  };