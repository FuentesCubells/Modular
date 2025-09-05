import { pgTable, integer, varchar, timestamp, foreignKey, unique, numeric, text } from "drizzle-orm/pg-core";

// ----------------------
// CLIENT
// ----------------------
export const client = pgTable("client", {
    id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
    name: varchar("name", { length: 100 }),
    lastname: varchar("lastname", { length: 100 }),
    email: varchar("email", { length: 255 }),
    phone: varchar("phone", { length: 50 }),
    street: varchar("street", { length: 255 }),
    city: varchar("city", { length: 100 }),
    province: varchar("province", { length: 100 }),
    postalCode: varchar("postal_code", { length: 20 }),
    country: varchar("country", { length: 100 }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow(),
});

// ----------------------
// IMAGES
// ----------------------
export const images = pgTable("images", {
    id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
    url: varchar("url", { length: 500 }),
    alt: varchar("alt", { length: 150 }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});

// ----------------------
// EQUIPMENT
// ----------------------
export const equipment = pgTable("equipment", {
    id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
    name: varchar("name", { length: 100 }),
});

// ----------------------
// HOUSING
// ----------------------
export const housing = pgTable("housing", {
    id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
    description: varchar("description", { length: 500 }),
    rooms: integer("rooms"),
    bathrooms: integer("bathrooms"),
    maxPeople: integer("max_people"),
    maxChildren: integer("max_children"),
    featuredImageId: integer("featured_image_id"),
    pricePerNight: numeric("price_per_night"),
    type: varchar("type", { length: 50 }),
    location: varchar("location", { length: 255 }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow(),
}, (table) => [
    foreignKey({
        columns: [table.featuredImageId],
        foreignColumns: [images.id],
        name: "housing_featured_image_id_fkey",
    }),
]);

// ----------------------
// RESERVATION
// ----------------------
export const reservation = pgTable("reservation", {
    id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
    dateFrom: timestamp("date_from", { mode: "date" }),
    dateTo: timestamp("date_to", { mode: "date" }),
    status: varchar("status", { length: 50 }),
    clientId: integer("client_id"),
    housingId: integer("housing_id"),
    totalPrice: numeric("total_price"),
    paymentStatus: varchar("payment_status", { length: 50 }),
    notes: text("notes"),
    accessToken: varchar("access_token", { length: 255 }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow(),
}, (table) => [
    foreignKey({
        columns: [table.clientId],
        foreignColumns: [client.id],
        name: "reservation_client_id_fkey",
    }),
    foreignKey({
        columns: [table.housingId],
        foreignColumns: [housing.id],
        name: "reservation_housing_id_fkey",
    }),
    unique("reservation_access_token_key").on(table.accessToken),
]);

// ----------------------
// BED
// ----------------------
export const bed = pgTable("bed", {
    id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
    housingId: integer("housing_id"),
    fits: integer("fits"),
    size: varchar("size", { length: 50 }),
}, (table) => [
    foreignKey({
        columns: [table.housingId],
        foreignColumns: [housing.id],
        name: "bed_housing_id_fkey",
    }),
]);

// ----------------------
// HOUSING_EQUIPMENT
// ----------------------
export const housingEquipment = pgTable("housing_equipment", {
    id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
    housingId: integer("housing_id"),
    equipmentId: integer("equipment_id"),
}, (table) => [
    foreignKey({
        columns: [table.housingId],
        foreignColumns: [housing.id],
        name: "housing_equipment_housing_id_fkey",
    }),
    foreignKey({
        columns: [table.equipmentId],
        foreignColumns: [equipment.id],
        name: "housing_equipment_equipment_id_fkey",
    }),
]);

// ----------------------
// HOUSING_IMAGES
// ----------------------
export const housingImages = pgTable("housing_images", {
    id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
    housingId: integer("housing_id"),
    imageId: integer("image_id"),
    order: integer("order"),
}, (table) => [
    foreignKey({
        columns: [table.housingId],
        foreignColumns: [housing.id],
        name: "housing_images_housing_id_fkey",
    }),
    foreignKey({
        columns: [table.imageId],
        foreignColumns: [images.id],
        name: "housing_images_image_id_fkey",
    }),
]);
