// Normalizes an error caught by a React error boundary and logs it with enough
// context to debug from the browser console or the hosting platform's logs.
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  // Loaders and server fns commonly throw a raw Response; String(it) is the
  // opaque "[object Response]", so pull out the status and URL instead.
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  console.error("[menu] unhandled error", {
    message,
    ...(error instanceof Error && error.stack !== undefined && { stack: error.stack }),
    route: window.location.pathname,
    ...context,
  });
}
