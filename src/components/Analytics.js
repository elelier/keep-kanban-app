import { useEffect } from 'react';

const Analytics = ({ gaTrackingId, clarityTrackingId }) => {
  useEffect(() => {
    // Google Analytics
    if (gaTrackingId) {
      (function() {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`;
        script.async = true;
        document.head.appendChild(script);
        
        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){ window.dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', gaTrackingId);
        };
      })();
    }

    // Microsoft Clarity
    if (clarityTrackingId) {
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){
          (c[a].q=c[a].q||[]).push(arguments);
        };
        c[a].l=+new Date();
        t=l.createElement(r);
        y=l.getElementsByTagName(r)[0];
        t.async=1;
        t.src=`https://www.clarity.ms/tag/${i}`;
        y.parentNode.insertBefore(t,y);
      })(window,document,'clarity','script',clarityTrackingId);
    }
  }, [gaTrackingId, clarityTrackingId]);

  return null;
};

export default Analytics;
