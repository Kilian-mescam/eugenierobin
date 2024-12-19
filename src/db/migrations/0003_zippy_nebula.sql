ALTER TABLE "projects" ADD COLUMN "client_name" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "image_url" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN IF EXISTS "clientName";--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN IF EXISTS "imageUrl";