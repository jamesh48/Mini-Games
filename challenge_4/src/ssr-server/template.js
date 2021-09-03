const { Cloudfront } = process.env;

export default {
  htmlStart:
    `<!DOCTYPE HTML>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Minesweeper</title>
        <link rel="icon" type="image/png" href='${Cloudfront}/mine-images/minecon.png'/>
        <link rel='stylesheet' href='${Cloudfront}/build/public/index.min.css'/>
      </head>
    <body>
    <div id="minesweeper-root">
    `,
  htmlEnd: `
      </div>
      <script src='${Cloudfront}/build/public/public-bundle.js'></script>
    </body>
</html>
`,
};



