#!/bin/bash

# clean npm
rm ./package-lock.json
rm -rf ./node_modules

# clean next
rm -rf ./.next
rm next-env.d.ts

# clean protos
rm -rf ./src/ts/proto

# regen npm
npm i

# regen next
npm run build

# regen protos
npm run proto:build