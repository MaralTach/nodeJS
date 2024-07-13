CREATE TABLE "blogPost"(
    "id" BIGINT NOT NULL,
    "categoryId" BIGINT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATE NOT NULL,
    "updatedAt" DATE NOT NULL
);
ALTER TABLE
    "blogPost" ADD PRIMARY KEY("id");
CREATE TABLE "blogCategory"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "blogCategory" ADD PRIMARY KEY("id");
ALTER TABLE
    "blogCategory" ADD CONSTRAINT "blogcategory_name_unique" UNIQUE("name");
ALTER TABLE
    "blogPost" ADD CONSTRAINT "blogpost_categoryid_foreign" FOREIGN KEY("categoryId") REFERENCES "blogCategory"("id");