import type { ServerSnapshot } from 'Components/GameStore/types';

const htmlStart = (styleTags: string) => (`<!DOCTYPE HTML>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <meta name="theme-color" content="#ffffff">
        <title>Tic Tac Toe</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap">
        ${styleTags}
      </head>
    <body>
    <div id="tictactoe-root">`);

// The browser hydrates from the same snapshot the page was rendered with; "<" is escaped so it can't close the script
const htmlEnd = (snapshot: ServerSnapshot) => (`</div>
    </body>
    <script>window.__TICTACTOE__ = ${JSON.stringify(snapshot).replace(/</g, '\\u003c')}</script>
    <script src='/static/index.js'></script>
</html>`);

export {
  htmlStart,
  htmlEnd
};
