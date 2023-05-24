import type { Config } from 'drizzle-kit'

export default {
    schema: './src/lib/schemas.ts',
    out: './drizzle',
} satisfies Config
