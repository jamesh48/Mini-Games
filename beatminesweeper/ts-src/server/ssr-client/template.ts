import { GenericScore } from "TSSrc/public/components/Leaderboard/leaderboard-types";

const htmlStart = (DEV_ENV: boolean, Cloudfront: string | undefined, resultScores: GenericScore[]) => {
  console.log(Cloudfront);
  return (`<!DOCTYPE HTML>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Minesweeper</title>
        <link rel="icon" type="image/png" href='${Cloudfront}/mine-images/minecon.png'/>
        <link rel='stylesheet' href='/static/index.css'/>
      </head>

      <script>
        const devStyleSheetHref = '/static/index.css';
        const prodStyleSheetHref = '${Cloudfront}/build/public/index.min.css';
        const [head] = document.getElementsByTagName('HEAD');
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = (${DEV_ENV} === true ? devStyleSheetHref : prodStyleSheetHref)
        head.appendChild(link);
      </script>



      <!-- Server Side Rendering of Page Data -->
      <script>window.__INITIAL__DATA__=${JSON.stringify({ssrTopTimes: resultScores})}</script>

    <body>
    <div id="minesweeper-root">`)
};


const htmlEnd = (DEV_ENV: boolean, Cloudfront: string | undefined) => (`</div>
      <script>
      const devScriptLink = '/static/index.js';
      const prodScriptLink = '${Cloudfront}/build/public/public-bundle.js';

      const [body] = document.getElementsByTagName('BODY');
      let script = document.createElement('script');
      script.src = (${DEV_ENV} === true ? devScriptLink : prodScriptLink)
      body.appendChild(script);
      </script>
    </body>
</html>`);

export {
  htmlStart,
  htmlEnd
}






