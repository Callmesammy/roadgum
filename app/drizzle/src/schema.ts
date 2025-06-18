import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("userDetails", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity().unique(),
  image: varchar("image").notNull(),
  title: varchar("title").notNull(),
  description: varchar("description").notNull(),
});

export const usersHere = pgTable("otherTags", {
id: integer("id").generatedByDefaultAsIdentity().primaryKey().unique().notNull(), 
item1: varchar("item1").notNull(), 
item2: varchar("item2").notNull(), 
item3: varchar("item3").notNull(), 

})
