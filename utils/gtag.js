export const GA_TRACKING_ID = 'UA-191470493-1';

export const pageView = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
  console.log('config')
};
