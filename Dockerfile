FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
RUN apk update
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm
RUN pnpm install turbo --global

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
COPY . .
RUN turbo prune --scope=server --docker

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
COPY --from=installer /app .
RUN pnpm install

WORKDIR /app/apps/server
ENV NODE_ENV=production
RUN npx prisma generate
COPY entrypoint.sh /app/apps/server/entrypoint.sh
RUN chmod +x /app/apps/server/entrypoint.sh
# RUN npx prisma db push
EXPOSE 3001
ENTRYPOINT ["/app/apps/server/entrypoint.sh"]
# CMD ["pnpm", "start:prod"]