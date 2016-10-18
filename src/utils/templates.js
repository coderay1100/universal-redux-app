export function fullPage(options) {
  let extra = ''
  if (options.universal) {
    extra = `
      <script>window.__STATE__ = ${JSON.stringify(options.state)}</script>
      <script src="/assets/bundle.js"></script>
    `
  }
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server Rendering | ${options.title || 'Untitled'}</title>
      </head>
      <body>
        <div id="root">${options.reactApp}</div>
        ${extra}
      </body>
    </html>
  `
}