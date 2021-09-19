const { Cloudfront, DEV_ENV } = process.env;


const htmlStart = (data) => {
  return (`<!DOCTYPE HTML>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Minesweeper</title>
        <link rel="icon" type="image/png" href='${Cloudfront}/mine-images/minecon.png'/>
        <!-- Server Side Rendering of Page Data -->
        <script>window.__INITIAL__DATA__=${JSON.stringify(data)}</script>
      </head>

      <script>
      const devStyleSheetHref = '/static/index.css';
      const prodStyleSheetHref = '${Cloudfront}/build/public/index.min.css';
      const [head] = document.getElementsByTagName('HEAD');
      let link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = (${DEV_ENV} ? devStyleSheetHref : prodStyleSheetHref)
      head.appendChild(link);
      </script>
    <body>
    <div id="minesweeper-root">`)
};


const htmlEnd = () => (`</div>
      <script>
      const devScriptLink = '/static/index.js';
      const prodScriptLink = '${Cloudfront}/build/public/public-bundle.js';

      const [body] = document.getElementsByTagName('BODY');
      let script = document.createElement('script');
      script.src = (${DEV_ENV} ? devScriptLink : prodScriptLink)
      body.appendChild(script);
      </script>
    </body>
</html>`);

export {
  htmlStart,
  htmlEnd
}



