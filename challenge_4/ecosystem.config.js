module.exports = {
  apps: [{
    name: 'minesweeper',
    script: 'dist/server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: ' ec2-3-140-90-28.us-east-2.compute.amazonaws.com',
      key: './minesweeper.pem',
      ref: 'origin/master',
      repo: 'git@github.com:jamesh48/mini-apps-2.git',
      path: '/home/ubuntu/minesweeper',
      'post-deploy': 'cd /home/ubuntu/minesweeper/source/challenge_4 && npm install && npm run build && pm2 startOrRestart ecosystem.config.js && pm2 save'
    }
  }
}