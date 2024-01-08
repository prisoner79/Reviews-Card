// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Nidhi Chaudhary',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Ridhi Chaudhary',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Ram Anuj',
      job: 'MERN Developer',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Nitin Nandan',
      job: 'DevOps Expert',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
      id: 4,
      name: 'Mr.Patel',
      job: 'The Boss',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.querySelector(".name");
  const job = document.querySelector(".job");
  const info = document.querySelector(".about");

  const prev = document.querySelector(".prev-btn");
  const next = document.querySelector(".next-btn");
  const random = document.querySelector(".random");

//   set startin value 
let currentItem = 0;
// loade ititial item 

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

next.addEventListener("click", ()=>{
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});
prev.addEventListener("click", ()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

random.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})