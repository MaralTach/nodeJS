"use strict";

const User = require("../models/userModel");
const BlogPost = require("../models/blogPostModel");
const BlogCategory = require("../models/blogCategoryModel");

module.exports = async () => {
  // Deleted All Records:
  await User.deleteMany().then(() => console.log(" - User Deleted All"));
  await BlogCategory.deleteMany().then(() =>
    console.log(" - BlogCategory Deleted All"),
  );
  await BlogPost.deleteMany().then(() =>
    console.log(" - BlogPost Deleted All"),
  );

  // Example User:
  const user = await User.create({
    email: "test@test.com",
    password: "12345678",
    firstName: "Test",
    lastName: "Test",
  });
  // Example Category:
  const categories = [
    "World",
    "Technology",
    "Design",
    "Culture",
    "Business",
    "Politics",
    "Science",
    "Health",
    "Style",
    "Travel",
  ];
  const now = new Date();
  for (let category of categories) {
    const blogCategory = await BlogCategory.create({
      name: category,
    });
    // Example Posts:
    for (let key in [...Array(10)]) {
      await BlogPost.create({
        userId: user._id,
        blogCategoryId: blogCategory._id,
        title: `Sample ${category} Post -${key}`,
        content: `
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
                Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
                Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. </p>
                <div class="p-4 text-center"><img src="https://geekflare.com/wp-content/uploads/2016/04/featured-image-generator.jpg"></div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
                Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
                Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
                Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
                Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. </p>
                `,
        published: Boolean(key % 2),
        createdAt: now.getTime() + Math.random() * 10e8, // Random Time
      });
    }
  }

  // End:
  console.log("* Synchronized *");
  /* Finished */
};
