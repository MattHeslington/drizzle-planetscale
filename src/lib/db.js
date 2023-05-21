import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from '@planetscale/database'

const config = connect ({
    host: import.meta.env.VITE_DATABASE_HOST,
    username: import.meta.env.VITE_DATABASE_USERNAME,
    password: import.meta.env.VITE_DATABASE_PASSWORD
})

export const db = drizzle(config);