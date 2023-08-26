FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
RUN apk update
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN pnpm install turbo --global
COPY . .
RUN turbo prune --scope=server --docker
# RUN rm -rf ./out/full/apps/server/node_modules
# RUN rm -rf ./out/full/packages/eslint-config-custom/node_modules

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
RUN pnpm install

COPY --from=builder /app/out/full/ .
ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM
 
ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN
RUN pnpm build --filter=server


FROM base AS runner
WORKDIR /app

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 server
# USER server

COPY --from=installer /app/apps/server/package.json /app/apps/server/package.json
COPY --from=installer /app/packages /app/packages
COPY --from=installer /app/.npmrc /app/.npmrc
COPY --from=installer /app/package.json /app/package.json
COPY --from=installer /app/pnpm-workspace.yaml /app/pnpm-workspace.yaml
COPY --from=installer /app/turbo.json /app/turbo.json
RUN pnpm install
# COPY --from=installer --chown=server:nodejs /app/apps/server/dist ./
 
COPY --from=installer /app/apps/server/dist /app/apps/server
EXPOSE 3001
CMD ["node", "./apps/server/main.js"]