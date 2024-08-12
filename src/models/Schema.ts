import { mysqlTable, serial, text, timestamp } from 'drizzle-orm/mysql-core';

export const guestbookSchema = mysqlTable('guestbook', {
  id: serial('id').primaryKey(),
  username: text('username').notNull(),
  body: text('body').notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
});
