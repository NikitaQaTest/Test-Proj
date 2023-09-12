/* 1. Створити модуль api_helper.js, в якому будуть реалізовані функції посилання get та post запитів
та десеріалізація респонсу у json об'єкт, який вони будуть повертати (при реалізації поста зверніть увагу на хедери, 
які вказані у інструкції під блоком Post with JSON). Для створення запитів використати пакет
node-fetch, інструкця по використанню тут https://www.npmjs.com/package/node-fetch?activeTab=readme, для 
реалізації асинхронності використати async/await */


const fetch = require("node-fetch");

//GET
async function get(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

//POST
async function post(url, data) {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });
  const data = await response.json();
  return data;
}
/* 2. Реалізувати функцію getPostsByUsedId, яка буде знаходити пости з ресурсу https://jsonplaceholder.typicode.com/posts та робити 
вибірку постів за id користувача. Також у всіх відфільтрованих постів повинна бути відсутня властивість title */


async function getPostsByUsedId(url, userId) {
    const posts = await request.get(url);
  
    const filteredPosts = posts.filter((post) => post.userId === userId);

    filteredPosts.forEach((post) => {
      delete post.title;
    });
  
    return filteredPosts;
  }

/* 3. Реалізувати функцію createNewPost, яка буде створювати новий пост на ресурсі https://jsonplaceholder.typicode.com/posts */
  async function createNewPost(url, body) {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  }


/* 4. Використовуючи синтаксис промісів створити функцію, яка генерує рандомне число від 0 до 10 та з затримкою в 3 секунди
резолвить проміс з результатом "Resolved <число>" у випадку, якщо число більше 5ти, або повертає reject з 
результатом "Rejected <число>", якщо число меньше 5ти. Reject обробити через catch. */

function resolveNumber() {
    return new Promise((resolve, reject) => {

      const number = Math.floor(Math.random() * 10);
      if (number > 5) {
        setTimeout(() => {
          resolve(`Resolved ${number}`);
        }, 3000);
      } else {
        reject(`Rejected ${number}`);
      }
    });
  }