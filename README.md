This is my portfolio site.

# This is a sample build configuration for JavaScript.
# Check our guides at https://confluence.atlassian.com/x/14UWN for more examples.
# Only use spaces to indent your .yml configuration.
# -----
# You can specify a custom docker image from Docker Hub as your build environment.
image: node:10.16.0

pipelines:
  branches:
    master:
      - step:
          name: build stuff
          caches:
            - node
          script:
            - npm install
            - npm run-script build
            - npm run-script export
          artifacts:
            - out/**
      - step:
          name: delete old stuff
          script:
            - ssh root@134.122.100.12 "rm -rf /var/www/blinkpool.com/html/*; exit;"
      - step:
          name: scp copy stuff
          deployment: production
          script:
            - pipe: atlassian/scp-deploy:0.3.4
              variables:
                USER: 'root'
                SERVER: '134.122.100.12'
                REMOTE_PATH: '/var/www/blinkpool.com/html'
                LOCAL_PATH: '/opt/atlassian/pipelines/agent/build/out/*'