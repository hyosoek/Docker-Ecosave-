FROM node:22-alpine3.19
 
RUN apk add bash

WORKDIR /app
COPY ./ /app

EXPOSE 8000
EXPOSE 8443
 
RUN npm install
# RUN npx prisma generate
# RUN npx prisma migrate deploy
# RUN npx prisma db push

RUN chmod +x docker-start.sh

# wait-for-it.sh
CMD ["bash","docker-start.sh"]
# CMD ["npm","run","dev"]
