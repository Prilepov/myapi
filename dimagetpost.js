async function getPost(){
 let res = await fetch('http://appdb.trinfidigital.tech/api/post');
 let posts = await res.json();

 console.log(posts);

 posts.forEach((post) => {
  document.querySelector ('.post_id').innerHTML += `
    <option value="${post.id}">${post.id}</option>
  `
  document.querySelector ('.post_title').innerHTML += `
  <option value="${post.title}">${post.title}</option>
  `  
  document.querySelector ('.post_post').innerHTML += `
  <option value="${post.post}">${post.post}</option>
  `
 })
}
getPost();
