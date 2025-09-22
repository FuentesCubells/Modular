// import { integer, pgTable, serial, timestamp } from "drizzle-orm/pg-core";


// const HousingImagesSchema = pgTable("housing_images", {
//     id: serial("id").primaryKey(),
//     housing_id: integer("housing_id").references(() => house.id);
//     image_id: integer("images").references(() => house.id);
//     order: integer("order")
// })

// const ImagesSchema = pgTable("images", {
//     id: serial("id").primaryKey(),
//     url: text().nullable(),
//     alt: tex().nullable(),
//     created_at: timestamp("created_at").defaultNow(),
// });