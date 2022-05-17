/*
  Warnings:

  - You are about to drop the column `commment` on the `feedbacks` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL DEFAULT '',
    "screenshot" TEXT
);
INSERT INTO "new_feedbacks" ("id", "screenshot", "type") SELECT "id", "screenshot", "type" FROM "feedbacks";
DROP TABLE "feedbacks";
ALTER TABLE "new_feedbacks" RENAME TO "feedbacks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
