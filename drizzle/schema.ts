import { pgTable, integer, varchar, timestamp, foreignKey, unique, numeric, text } from "drizzle-orm/pg-core"


export const client = pgTable("client", {
	id: integer().primaryKey().notNull(),
	name: varchar(),
	email: varchar(),
	phone: varchar(),
	street: varchar(),
	city: varchar(),
	province: varchar(),
	postalCode: varchar("postal_code"),
	country: varchar(),
	createdAt: timestamp("created_at", { mode: 'string' }),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
});

export const reservation = pgTable("reservation", {
	id: integer().primaryKey().notNull(),
	dateFrom: timestamp("date_from", { mode: 'string' }),
	dateTo: timestamp("date_to", { mode: 'string' }),
	status: varchar(),
	clientId: integer("client_id"),
	housingId: integer("housing_id"),
	totalPrice: numeric("total_price"),
	paymentStatus: varchar("payment_status"),
	notes: text(),
	accessToken: varchar("access_token"),
	createdAt: timestamp("created_at", { mode: 'string' }),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.clientId],
			foreignColumns: [client.id],
			name: "reservation_client_id_fkey"
		}),
	foreignKey({
			columns: [table.housingId],
			foreignColumns: [housing.id],
			name: "reservation_housing_id_fkey"
		}),
	unique("reservation_access_token_key").on(table.accessToken),
]);

export const housing = pgTable("housing", {
	id: integer().primaryKey().notNull(),
	description: varchar(),
	rooms: integer(),
	bathrooms: integer(),
	maxPeople: integer("max_people"),
	maxChildren: integer("max_children"),
	featuredImageId: integer("featured_image_id"),
	pricePerNight: numeric("price_per_night"),
	type: varchar(),
	location: varchar(),
	createdAt: timestamp("created_at", { mode: 'string' }),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.featuredImageId],
			foreignColumns: [images.id],
			name: "housing_featured_image_id_fkey"
		}),
]);

export const images = pgTable("images", {
	id: integer().primaryKey().notNull(),
	url: varchar(),
	alt: varchar(),
	createdAt: timestamp("created_at", { mode: 'string' }),
});

export const bed = pgTable("bed", {
	id: integer().primaryKey().notNull(),
	housingId: integer("housing_id"),
	fits: integer(),
	size: varchar(),
}, (table) => [
	foreignKey({
			columns: [table.housingId],
			foreignColumns: [housing.id],
			name: "bed_housing_id_fkey"
		}),
]);

export const housingEquipment = pgTable("housing_equipment", {
	id: integer().primaryKey().notNull(),
	housingId: integer("housing_id"),
	equipmentId: integer("equipment_id"),
}, (table) => [
	foreignKey({
			columns: [table.housingId],
			foreignColumns: [housing.id],
			name: "housing_equipment_housing_id_fkey"
		}),
	foreignKey({
			columns: [table.equipmentId],
			foreignColumns: [equipment.id],
			name: "housing_equipment_equipment_id_fkey"
		}),
]);

export const equipment = pgTable("equipment", {
	id: integer().primaryKey().notNull(),
	name: varchar(),
});

export const housingImages = pgTable("housing_images", {
	id: integer().primaryKey().notNull(),
	housingId: integer("housing_id"),
	imageId: integer("image_id"),
	order: integer(),
}, (table) => [
	foreignKey({
			columns: [table.housingId],
			foreignColumns: [housing.id],
			name: "housing_images_housing_id_fkey"
		}),
	foreignKey({
			columns: [table.imageId],
			foreignColumns: [images.id],
			name: "housing_images_image_id_fkey"
		}),
]);
