import '#internal/nitro/virtual/polyfill'

var nitroApp = useNitroApp()
var listener = toNodeListener(nitroApp.h3App)
var handler = listener
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}

export { useRuntimeConfig, getRouteRules, handler, listener, useNitroApp };