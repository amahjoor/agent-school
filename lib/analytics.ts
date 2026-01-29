// Simple analytics utility
// Can be connected to Google Analytics, Plausible, or other analytics services

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  // Log to console for development
  console.log('[Analytics]', eventName, properties);

  // TODO: Add your analytics service here
  // Example for Google Analytics:
  // if (window.gtag) {
  //   window.gtag('event', eventName, properties);
  // }

  // Example for Plausible:
  // if (window.plausible) {
  //   window.plausible(eventName, { props: properties });
  // }
};

export const analytics = {
  // Demo flow events
  demoStarted: (query: string) => {
    trackEvent('demo_started', { query });
  },

  run1Completed: (timeElapsed: number) => {
    trackEvent('run1_completed', { timeElapsed });
  },

  run2Started: () => {
    trackEvent('run2_started');
  },

  run2Completed: () => {
    trackEvent('run2_completed');
  },

  comparisonViewed: () => {
    trackEvent('comparison_viewed');
  },

  ctaViewed: () => {
    trackEvent('cta_viewed');
  },

  ctaClicked: (formData?: Record<string, string>) => {
    trackEvent('cta_clicked', formData);
  },

  demoRestarted: () => {
    trackEvent('demo_restarted');
  },

  // Landing page events
  landingViewed: () => {
    trackEvent('landing_viewed');
  },

  tryDemoClicked: () => {
    trackEvent('try_demo_clicked');
  },

  exampleQuerySelected: (query: string) => {
    trackEvent('example_query_selected', { query });
  },
};
