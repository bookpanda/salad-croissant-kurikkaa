#!/bin/sh

# Wait for PostgreSQL to be available
while ! nc -z postgres 5432; do
  echo "Waiting for PostgreSQL to start..."
  sleep 1
done

# Run Prisma schema commands
npx prisma db push

# Start your application
pnpm start:prod
