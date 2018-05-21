#!/usr/bin/env bash

rm -rf .git
rm -rf dist
yarn build
git init
git remote add integration $GH_URI
git config user.name $GH_USER_NAME
git config user.email $GH_USER_EMAIL
git add --all .
git commit -m "Deploy from Travis - build {$TRAVIS_BUILD_NUMBER}"
openssl aes-256-cbc -K $encrypted_45bdefbbb50d_key -iv $encrypted_45bdefbbb50d_iv -in github_deploy_key.enc -out github_deploy_key -d
eval "$(ssh-agent -s)"
chmod 600 github_deploy_key.pem
ssh-add github_deploy_key.pem
echo "Sends build"
git push -f integration dev
