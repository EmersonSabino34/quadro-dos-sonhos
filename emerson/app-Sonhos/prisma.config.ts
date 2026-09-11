/**
 * Prisma 7+ configuration entrypoint for Migrate and other tooling.
 * Move connection URLs here instead of in schema.prisma.
 *
 * This file will be read by Prisma CLI. Set your DATABASE_URL in the
 * environment or in a secrets manager. Example:
 *
 * export DATABASE_URL="postgresql://user:pass@host:5432/dbname"
 */

// CommonJS-style config to make Prisma CLI parse the file reliably
// Re-export CommonJS config so the Prisma CLI can read config from cjs file.
module.exports = require('./prisma.config.cjs');

