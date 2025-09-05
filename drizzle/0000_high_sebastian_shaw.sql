-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "client" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar,
	"email" varchar,
	"phone" varchar,
	"street" varchar,
	"city" varchar,
	"province" varchar,
	"postal_code" varchar,
	"country" varchar,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "reservation" (
	"id" integer PRIMARY KEY NOT NULL,
	"date_from" timestamp,
	"date_to" timestamp,
	"status" varchar,
	"client_id" integer,
	"housing_id" integer,
	"total_price" numeric,
	"payment_status" varchar,
	"notes" text,
	"access_token" varchar,
	"created_at" timestamp,
	"updated_at" timestamp,
	CONSTRAINT "reservation_access_token_key" UNIQUE("access_token")
);
--> statement-breakpoint
CREATE TABLE "housing" (
	"id" integer PRIMARY KEY NOT NULL,
	"description" varchar,
	"rooms" integer,
	"bathrooms" integer,
	"max_people" integer,
	"max_children" integer,
	"featured_image_id" integer,
	"price_per_night" numeric,
	"type" varchar,
	"location" varchar,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "images" (
	"id" integer PRIMARY KEY NOT NULL,
	"url" varchar,
	"alt" varchar,
	"created_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "bed" (
	"id" integer PRIMARY KEY NOT NULL,
	"housing_id" integer,
	"fits" integer,
	"size" varchar
);
--> statement-breakpoint
CREATE TABLE "housing_equipment" (
	"id" integer PRIMARY KEY NOT NULL,
	"housing_id" integer,
	"equipment_id" integer
);
--> statement-breakpoint
CREATE TABLE "equipment" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar
);
--> statement-breakpoint
CREATE TABLE "housing_images" (
	"id" integer PRIMARY KEY NOT NULL,
	"housing_id" integer,
	"image_id" integer,
	"order" integer
);
--> statement-breakpoint
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "public"."client"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_housing_id_fkey" FOREIGN KEY ("housing_id") REFERENCES "public"."housing"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "housing" ADD CONSTRAINT "housing_featured_image_id_fkey" FOREIGN KEY ("featured_image_id") REFERENCES "public"."images"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bed" ADD CONSTRAINT "bed_housing_id_fkey" FOREIGN KEY ("housing_id") REFERENCES "public"."housing"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "housing_equipment" ADD CONSTRAINT "housing_equipment_housing_id_fkey" FOREIGN KEY ("housing_id") REFERENCES "public"."housing"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "housing_equipment" ADD CONSTRAINT "housing_equipment_equipment_id_fkey" FOREIGN KEY ("equipment_id") REFERENCES "public"."equipment"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "housing_images" ADD CONSTRAINT "housing_images_housing_id_fkey" FOREIGN KEY ("housing_id") REFERENCES "public"."housing"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "housing_images" ADD CONSTRAINT "housing_images_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE no action ON UPDATE no action;
*/