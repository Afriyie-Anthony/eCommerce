const Navbar = document.getElementById("nav");
const open = document.getElementById("menu");
// Navbar.classList.add('hidden');
open.addEventListener("click", () => {
  Navbar.classList.toggle("hidden");
  Navbar.classList.toggle("flex");
});

document.addEventListener("DOMContentLoaded", function () {
const CardsData = [
  {
    img: "./public/images/product_1.png",
    name: "Cassual Round Neck",
    gender: "Women",
    price: "$70.00",
    describtion:
      "lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum",
  },
  {
    img: "./public/images/product_2.png",
    name: "Leather Hoodie",
    gender: "Men",
    price: "$10.00",
    describtion:
      "lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum",
  },
  {
    img: " ./public/images/product_3.png",
    name: "Kids Round Neck",
    gender: "Kids",
    price: "$25.00",
    describtion:
      "lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum",
  },
  {
    img: "./public/images/product_4_1.png",
    name: "Fashion Coat",
    gender: "Men",
    price: "$120.00",
    describtion:
      "lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum",
  },
  {
    img: "./public/images/product_7.png",
    name: "Trousers",
    gender: "Both",
    price: "$3.00",
    describtion:
      "lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum",
  },
  {
    img: "./public/images/product_6.png",
    name: "Kids Leather Coat",
    gender: "Kids",
    price: "$270.00",
    describtion:
      "lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum",
  },
  {
    img: " ./public/images/product_5.png",
    name: "Office Wear",
    gender: "Women",
    price: "$20.00",
    describtion:
      "lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum",
  },
  {
    img: "./public/images/product_8.png",
    name: "Cassual Round Neck",
    gender: "Women",
    price: "$70.00",
    describtion:
      "lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum in Lorem Ipsum",
  },
];


const MainCardsContainer = document.getElementById("cardsContainer");

const CardsMethods = () => {
  CardsData.forEach((card) => {
    console.log(card);
    
    // Create the main card container
    const cardElement = document.createElement("div");
    cardElement.classList.add("flex", "flex-col", "items-center", "justify-center", "w-full", "md:w-1/2", "lg:w-1/4", "p-4");

    // Create the image element
    const imgElement = document.createElement("img");
    imgElement.src = card.img;
    imgElement.alt = card.name;
    imgElement.classList.add("w-[350px]","rounded-t-md", "object-cover");

    // Create the description container
    const textContainer = document.createElement("div");
    textContainer.classList.add("bg-white", "border", "border-white", "rounded-b-md", "w-[]", "px-3", "py-4");

    // Create the product title
    const titleElement = document.createElement("h1");
    titleElement.classList.add("text-2xl", "font-semibold", "text-gray-800");
    titleElement.textContent = card.name;

    // Create the price and gender info
    const infoElement = document.createElement("p");
    infoElement.classList.add("flex", "items-center", "justify-between", "text-gray-600", "font-semibold");
    infoElement.innerHTML = `${card.gender} <span class="text-[#748ffc]">${card.price}</span>`;


    const btn = document.createElement("button")
    btn.classList.add("bg-[#748ffc]","text-white","py-2","px-2","mt-5","rounded-md")
    btn.textContent = "Add To Cart";
    // Create the product description
    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("py-1", "text-xs", "text-gray-500");
    descriptionElement.textContent = card.describtion;

    // Append elements to the card
    textContainer.appendChild(titleElement);
    textContainer.appendChild(infoElement);
    textContainer.appendChild(descriptionElement);
    textContainer.appendChild(btn)

    // Append image and text container to the card
    cardElement.appendChild(imgElement);
    cardElement.appendChild(textContainer);

    // Append the card to the main container
    MainCardsContainer.appendChild(cardElement);
    console.log(MainCardsContainer);
  });
};

CardsMethods();
});