import { integer, pgTable, varchar } from "drizzle-orm/pg-core";


export const usersTable = pgTable("userDetails", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity().unique(),
  image: varchar("image").notNull(),
  label: varchar("label").notNull(),
  description: varchar("description").notNull(),
  item1: varchar("item1").notNull(),
  item2: varchar("item2",  {length: 8}).notNull(),
  items: varchar("items", {length: 8}).notNull()
});


