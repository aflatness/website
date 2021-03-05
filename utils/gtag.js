export const GA_TRACKING_ID = 'G-Q4BE8TQ121';

export const pageView = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};
