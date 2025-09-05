import { relations } from "drizzle-orm/relations";
import { client, reservation, housing, images, bed, housingEquipment, equipment, housingImages } from "./schema";

export const reservationRelations = relations(reservation, ({one}) => ({
	client: one(client, {
		fields: [reservation.clientId],
		references: [client.id]
	}),
	housing: one(housing, {
		fields: [reservation.housingId],
		references: [housing.id]
	}),
}));

export const clientRelations = relations(client, ({many}) => ({
	reservations: many(reservation),
}));

export const housingRelations = relations(housing, ({one, many}) => ({
	reservations: many(reservation),
	image: one(images, {
		fields: [housing.featuredImageId],
		references: [images.id]
	}),
	beds: many(bed),
	housingEquipments: many(housingEquipment),
	housingImages: many(housingImages),
}));

export const imagesRelations = relations(images, ({many}) => ({
	housings: many(housing),
	housingImages: many(housingImages),
}));

export const bedRelations = relations(bed, ({one}) => ({
	housing: one(housing, {
		fields: [bed.housingId],
		references: [housing.id]
	}),
}));

export const housingEquipmentRelations = relations(housingEquipment, ({one}) => ({
	housing: one(housing, {
		fields: [housingEquipment.housingId],
		references: [housing.id]
	}),
	equipment: one(equipment, {
		fields: [housingEquipment.equipmentId],
		references: [equipment.id]
	}),
}));

export const equipmentRelations = relations(equipment, ({many}) => ({
	housingEquipments: many(housingEquipment),
}));

export const housingImagesRelations = relations(housingImages, ({one}) => ({
	housing: one(housing, {
		fields: [housingImages.housingId],
		references: [housing.id]
	}),
	image: one(images, {
		fields: [housingImages.imageId],
		references: [images.id]
	}),
}));