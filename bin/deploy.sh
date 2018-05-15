#!/usr/bin/env bash

if [ "${TRAVIS_PULL_REQUEST}" == "false" ] && [ "${TRAVIS_BRANCH}" == "dev" ]; then
  openssl aes-256-cbc -K $encrypted_45bdefbbb50d_key -iv $encrypted_45bdefbbb50d_iv -in github_deploy_key.enc -out github_deploy_key -d
  pm2 restart pokeapi-graphql
fi