#!/bin/bash 

npx prisma generate
npx prisma db pull
npm run dev