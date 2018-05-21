#!/usr/bin/env bash
echo "Init"
rm -rf .git
rm -rf dist
yarn build
git init
git branch -m dev
git remote add integration $GH_URI
git config user.name $GH_USER_NAME
git config user.email $GH_USER_EMAIL
git add --all .
git commit -m "Deploy from Travis - build {$TRAVIS_BUILD_NUMBER}"
openssl aes-256-cbc -K $encrypted_603b04cbb5e7_key -iv $encrypted_603b04cbb5e7_iv -in id_rsa_deploy.enc -out id_rsa_deploy -d
# openssl aes-256-cbc -K $encrypted_45bdefbbb50d_key -iv $encrypted_45bdefbbb50d_iv -in .travis/github_deploy_key.enc -out github_deploy_key.pem -d
eval "$(ssh-agent -s)"
chmod 600 id_rsa_deploy
# ssh-add github_deploy_key.pem
ssh-add id_rsa_deploy
#mv id_rsa_deploy ~/.ssh/id_rsa
echo "Sends build"
git show-ref
git push -f integration dev

