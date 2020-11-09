module.exports = {
    apps: [{
      name: 'cadoo',
      script: './app/index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-52-15-167-238.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/cadoo.pem',
        ref: 'origin/master',
        repo: 'git@github.com:danwas/cadoo.git',
        path: '/home/ubuntu/cadoo',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }