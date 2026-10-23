# Tic Tac Toe

Two-player tic tac toe in the browser, built with React, TypeScript and MUI. Players on different devices play live through the same Express + Socket.IO server that renders the page.

## Setup

```
npm install
```

## Running

```
npm run dev:build   # builds, rebuilds on change, and serves the game on http://localhost:3650
```

`npm start` serves an existing build. Set `PORT` to use a different port, e.g. `PORT=5000 npm start`.

## Playing

By default the game is single-device: one browser plays both X and O, taking turns, and other devices are turned away.

Click the pencil next to a name to rename that player. Players take turns going first each round.

### With a friend

Turn on **Play online** in the header (only shown on the computer running the server). The server starts a Cloudflare tunnel and shows a link to send your friend, with a copy button. The link stays available from the link icon in the header. Turning online play off closes the link and sends other devices away.

- Needs [cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/): `brew install cloudflared`.
- You play **X** and move first. Your friend plays **O**. Anyone else who opens the link watches.
- Anyone with the link can join while online play is on.
- Players on the same network can also use `http://<your-ip>:3650`, which the server prints at startup. Some office and campus networks block this.
- Refreshing keeps your seat. Switching online play on or off, or restarting the server, starts a fresh game.

## Development

```
npm test            # jest
npm run typecheck   # tsc
```

The server owns the game state: browsers send actions over Socket.IO, the server checks them against the sender's seat (`src/server/authorizeAction.ts`), runs the same reducer the client uses (`src/public/components/GameStore/gameReducers.ts`), and sends the new state to everyone.
