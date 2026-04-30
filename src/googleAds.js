const ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID;
const CONVERSION_LABEL = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL;

export function initGoogleTag() {
  if (!ADS_ID) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", ADS_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
  document.head.appendChild(script);
}

export function getBookingConversionSendTo() {
  if (!ADS_ID || !CONVERSION_LABEL) return null;
  return `${ADS_ID}/${CONVERSION_LABEL}`;
}
