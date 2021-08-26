FROM mhart/alpine-node:14 AS build

COPY . .

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

RUN npm ci

FROM mhart/alpine-node:14

COPY --from=build . .

CMD ["node", "server.js"]