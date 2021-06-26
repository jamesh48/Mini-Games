module.exports = {
  apps: [{
    name: 'minesweeper',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: ' ec2-3-140-90-28.us-east-2.compute.amazonaws.com',
      key: '../minesweeper.pem',
      ref: 'origin/master',
      repo: 'git@github.com:jamesh48/rpt26-mini-apps-2.git',
      path: '/home/ubuntu/minesweeper',
      'post-deploy': 'npm install && pm2 startOrRestart ./server/ecosystem.config.js && pm2 save'
    }
  }
}