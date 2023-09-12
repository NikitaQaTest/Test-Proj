import * as request from "./api_helper/api_helper.js";

//  GET
const data1 = await request.get(baseUrl);

// POST
const data = await request.post(baseUrl, {
  title: "My new post",
  body: "This is my new post.",
});


import * as request from "./api_helper/api_helper.js";

const posts = await getPostsByUsedId(baseUrl, 5);

console.log(posts);



import * as request from "./api_helper/api_helper.js";

const body = {
  userId: 155,
  title: "New title",
  body: "New body",
};
const result = await createNewPost(baseUrl, body);

console.log(result);





  const result1 = resolveNumber();
result
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });