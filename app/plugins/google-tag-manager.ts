export default defineNuxtPlugin(() => {
  if (process.server || process.dev) return;

  const { proxy } = useScriptGoogleTagManager();

  useScriptEventPage((title, path) => {
    proxy.dataLayer.push({
      event: 'pageview',
      title,
      path,
    });
  });
});
