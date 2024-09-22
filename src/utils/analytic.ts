// utils/analytics.ts
export const sendEvent = (eventName: string, eventParams: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
      console.log(`Enviando evento: ${eventName}`, eventParams);
    window.gtag('event', eventName, eventParams);
  }
};
