ALTER TABLE "bed" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "bed" ALTER COLUMN "size" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "name" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "lastname" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "email" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "phone" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "street" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "city" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "province" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "postal_code" SET DATA TYPE varchar(20);--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "country" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "client" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "equipment" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "equipment" ALTER COLUMN "name" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "housing" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "housing" ALTER COLUMN "description" SET DATA TYPE varchar(500);--> statement-breakpoint
ALTER TABLE "housing" ALTER COLUMN "type" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "housing" ALTER COLUMN "location" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "housing" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "housing" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "housing_equipment" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "housing_images" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "images" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "images" ALTER COLUMN "url" SET DATA TYPE varchar(500);--> statement-breakpoint
ALTER TABLE "images" ALTER COLUMN "alt" SET DATA TYPE varchar(150);--> statement-breakpoint
ALTER TABLE "images" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "reservation" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "reservation" ALTER COLUMN "status" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "reservation" ALTER COLUMN "payment_status" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "reservation" ALTER COLUMN "access_token" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "reservation" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "reservation" ALTER COLUMN "updated_at" SET DEFAULT now();