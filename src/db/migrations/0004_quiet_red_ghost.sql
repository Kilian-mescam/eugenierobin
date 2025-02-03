ALTER TABLE "projects" ADD COLUMN "image" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN IF EXISTS "image_url";