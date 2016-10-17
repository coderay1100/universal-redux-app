export function fullPage(options) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server Rendering | ${options.title || 'Untitled'}</title>
      </head>
      <body>
        <div id="root">${options.reactApp}</div>
        <script>window.__STATE__ = ${JSON.stringify(options.state)}</script>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  `
}