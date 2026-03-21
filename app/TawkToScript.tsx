"use client";

import { useEffect } from "react";

export default function TawkToScript() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Tawk_LoadStart = new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/69b2f9eeb9afea1c32271ab6/1jjhi0j8q';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      if (s0 && s0.parentNode) s0.parentNode.insertBefore(s1,s0);
      else document.head.appendChild(s1);
    })();
  }, []);

  return null;
}
