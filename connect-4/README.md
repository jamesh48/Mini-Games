# Connect Four

Two-player Connect Four in the browser, built with React, TypeScript and MUI. Players on different computers play live through a small Express + Socket.IO server.

## Setup

```
npm install --legacy-peer-deps
```

`--legacy-peer-deps` works around an old enzyme test adapter that expects React 16.

## Running

Run each of these in its own terminal:

```
npm run react-dev   # compiles the client and rebuilds client/public/bundle.js on change
npm start           # compiles the server and serves the game on http://localhost:4000
```

Set `PORT` to use a different port, e.g. `PORT=5000 npm start`.

## Playing

By default the game is single-device: one browser plays both colors, taking turns, and other devices are turned away.

Click the pencil next to a name to rename that player.

### With a friend

Turn on **Play online** in the header (only shown on the computer running the server). The server starts a Cloudflare tunnel and shows a link to send your friend, with a copy button. Turning it off closes the link and sends other devices away.

- Needs [cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/): `brew install cloudflared`.
- You play **Red** and move first. Your friend plays **Yellow**. Anyone else who opens the link watches.
- Anyone with the link can join while online play is on.
- Players on the same network can also use `http://<your-ip>:4000`, which the server prints at startup. Some office and campus networks block this.
- Refreshing keeps your seat. Restarting the server clears the game and turns online play off.

## Tests

```
npm test
```

Compiles the client, then runs the mocha/enzyme tests against it.
