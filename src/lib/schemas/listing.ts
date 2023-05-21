import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const listings = mysqlTable('listings', {
    id: int('id').autoincrement().primaryKey(),
    name: varchar('name', { length: 30 }), // Set the length to 30 characters
    title: varchar('title', { length: 255 }),
});