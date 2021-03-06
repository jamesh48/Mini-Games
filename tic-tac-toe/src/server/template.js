// const { Cloudfront, DEV_ENV } = process.env;


const htmlStart = (data) => {
  return (`<!DOCTYPE HTML>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Tic Tac Toe</title>
        <link rel='stylesheet' href='/static/index.css'/>
      </head>
    <body>
    <div id="tictactoe-root">`)
};


const htmlEnd = () => (`</div>
    </body>
    <script src='/static/index.js'></script>
</html>`);

export {
  htmlStart,
  htmlEnd
}



