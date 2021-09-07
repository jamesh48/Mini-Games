const { Cloudfront } = process.env;

export default {
  htmlStart: (data) => {
    return (
      `<!DOCTYPE HTML>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Minesweeper</title>
        <link rel="icon" type="image/png" href='${Cloudfront}/mine-images/minecon.png'/>
        <link rel='stylesheet' href='${Cloudfront}/build/public/index.min.css'/>
        <!-- Server Side Rendering of Page Data -->
        <script>window.__INITIAL__DATA__=${JSON.stringify(data)}</script>
      </head>
    <body>
    <div id="minesweeper-root">
    `)
  },
  htmlEnd: `
      </div>
      <!-- <script src='${Cloudfront}/build/public/public-bundle.js'></script> -->
      <script src='/static/index.js'></script>
    </body>
</html>
`,
};



