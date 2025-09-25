-- CreateTable
CREATE TABLE "public"."Specialty" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Specialty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SubSpecialty" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specialtyId" TEXT NOT NULL,

    CONSTRAINT "SubSpecialty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Practitioner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specialtyId" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "video" BOOLEAN NOT NULL DEFAULT false,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Practitioner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PractitionerOnSub" (
    "practitionerId" TEXT NOT NULL,
    "subId" TEXT NOT NULL,

    CONSTRAINT "PractitionerOnSub_pkey" PRIMARY KEY ("practitionerId","subId")
);

-- CreateTable
CREATE TABLE "public"."Slot" (
    "id" TEXT NOT NULL,
    "practitionerId" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "isBooked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Slot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Specialty_slug_key" ON "public"."Specialty"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "SubSpecialty_slug_key" ON "public"."SubSpecialty"("slug");

-- CreateIndex
CREATE INDEX "Practitioner_city_idx" ON "public"."Practitioner"("city");

-- CreateIndex
CREATE INDEX "Practitioner_specialtyId_idx" ON "public"."Practitioner"("specialtyId");

-- CreateIndex
CREATE INDEX "Slot_start_idx" ON "public"."Slot"("start");

-- AddForeignKey
ALTER TABLE "public"."SubSpecialty" ADD CONSTRAINT "SubSpecialty_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "public"."Specialty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Practitioner" ADD CONSTRAINT "Practitioner_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "public"."Specialty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PractitionerOnSub" ADD CONSTRAINT "PractitionerOnSub_practitionerId_fkey" FOREIGN KEY ("practitionerId") REFERENCES "public"."Practitioner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PractitionerOnSub" ADD CONSTRAINT "PractitionerOnSub_subId_fkey" FOREIGN KEY ("subId") REFERENCES "public"."SubSpecialty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Slot" ADD CONSTRAINT "Slot_practitionerId_fkey" FOREIGN KEY ("practitionerId") REFERENCES "public"."Practitioner"("id") ON DELETE CASCADE ON UPDATE CASCADE;
