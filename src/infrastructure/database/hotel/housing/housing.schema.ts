import { integer, numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";


const housingSchema = pgTable("housing", {
    id: serial("id").primaryKey(),
    description: text("description").notNull(),
    rooms: integer("rooms").notNull(),
    bathrooms: integer("bathrooms").notNull(),
    max_people: integer("max_people").notNull(),
    max_children: integer("max_children").notNull(),
    featured_image_id: integer("featured_image_id"),
    price_per_night: numeric("price_per_night").notNull(),
    type: text("type").notNull(),
    location: text("location").notNull(),
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
})

export  default housingSchema