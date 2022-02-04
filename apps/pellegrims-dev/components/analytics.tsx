import React, { FunctionComponent } from 'react';
import Script from 'next/script';

export const Analytics: FunctionComponent = () => (
  <Script id="analytics-script" strategy="lazyOnload">
    {
      'if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"RobinPel",utcoffset:"1"}))};sessionStorage.setItem("_swa","1");'
    }
  </Script>
);

export default Analytics;
