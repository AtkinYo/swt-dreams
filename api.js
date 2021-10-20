// let randomArrayObject = Math.ceil(Math.random() * 8);
// let randomArrayObject1 = Math.ceil(Math.random() * 8);
// let randomArrayObject2 = Math.ceil(Math.random() * 8);

let userTimeStamp = document.querySelector('.review-timestamp');
let userName = document.querySelector('.username');
let userReviewTitle = document.querySelector('.review-tag');
let userReviewText = document.querySelector('.customer-review');
let reviewBox1 = document.querySelector('.box1a');
let reviewBox2 = document.querySelector('.box2a');
let reviewBox3 = document.querySelector('.box3a');
let reviewBox4 = document.querySelector('.box4a');
let reviewBox5 = document.querySelector('.box5a');
let reviewBox6 = document.querySelector('.box6a');

console.log(reviewBox1.children[1].innerHTML);
console.log(reviewBox1.children[2].innerHTML);

let url =
  'https://app.reviewapi.io/api/v1/reviews?apikey=38996dc0-f7e5-11eb-bee3-b56fb6c500a7&url=https://www.amazon.com/Carlyle-Melatonin-Dissolve-Nighttime-Vegetarian/dp/B07GR9WBFY/ref=sr_1_5?dchild=1&keywords=melatonin&qid=1629118638&sr=8-5&amount=15';

async function reviewApiCall() {
  const response = await fetch(url);

  const jsonData = await response.json();

  console.log(jsonData);

  let arrayUsername = jsonData.reviews[0].user_name;
  let reviewText = jsonData.reviews[0].text;
  let reviewTimestamp = jsonData.reviews[0].timestamp;
  let reviewTitle = jsonData.reviews[0].title;

  reviewBox1.children[0].firstElementChild.lastElementChild.innerHTML =
    arrayUsername;

  reviewBox1.children[3].innerHTML = reviewText;

  reviewBox1.children[1].innerHTML = reviewTimestamp;

  reviewBox1.children[2].innerHTML = reviewTitle;
}

reviewApiCall().catch((error) => {
  console.log('Error Occurred!');
  console.error(error);
});
