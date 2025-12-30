// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//    return response.json()
// })
// .then((data) => {
//    console.log(data);
// })
// .catch((error) => console.log(error))

// async function getdata() {
//    // get request - async
//    let response =  fetch('https://api.github.com/users/hiteshchoudhary');
//    // parse json - async
//    let dataprocessed = await response.json();
//    console.log(dataprocessed);
// }
// getdata();

import fetch from 'node-fetch';

const BASE = "https://crudcrud.com/api/4f2fba2f3fbd41b2a4c50cb54844f635/posts";

const postAndGet = async () => {
  try {
    const postRes = await fetch(BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Short POST", body: "From Abdul!" }),
    });

    if (!postRes.ok) {
      const text = await postRes.text();
      throw new Error(`POST failed: ${text}`);
    }

    const postData = await postRes.json();
    console.log("✅ POST:", postData);

    const getRes = await fetch(`${BASE}/${postData._id}`);
    const getData = await getRes.json();
    console.log("📥 GET:", getData);
  } catch (err) {
    console.error("❌ ERROR:", err.message);
  }
};

postAndGet();
