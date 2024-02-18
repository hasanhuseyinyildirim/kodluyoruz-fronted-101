const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-12.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const buttonItems=["All","Korea","Japan","China"]

const buttonContainer = document.querySelector('.btn-container');
function createButton(buttonItem){
  const allButton =document.createElement("div")
  allButton.classList.add('btn');
  allButton.classList.add("btn-outline-dark");
  allButton.classList.add("btn-item");
  allButton.textContent=buttonItem
  
  buttonContainer.appendChild(allButton)
}

const menuContainer = document.querySelector('.row');

function createMenuCard(menuItem) {
  const card = document.createElement('div');
  card.classList.add('menu-items');
  card.classList.add("col-lg-6");
  card.classList.add("col-sm-12");
  card.innerHTML = `
    <img class="photo" src="${menuItem.img}" alt="${menuItem.title}">`;
    const menuInfo=document.createElement("div");
    menuInfo.classList.add("menu-info");
    card.appendChild(menuInfo);
      const menuTitle=document.createElement("div")
      menuTitle.classList.add("menu-title")
      menuTitle.innerHTML=`<h4>${menuItem.title}</h4><h4 class="price" >${menuItem.price}</h4>`
      menuInfo.appendChild(menuTitle);

      const menuText=document.createElement("div");
      menuText.classList.add("menu-text");
      menuText.innerHTML=`${menuItem.desc}`
      menuInfo.appendChild(menuText);
  
  menuContainer.appendChild(card);
  
}

// menuyu goster
menu.forEach(item => 
    {
      createMenuCard(item);
    });

buttonItems.forEach(item => 
    {
      createButton(item);
    });

const buttons = document.querySelectorAll('.btn-item');

buttons.forEach(button => 
    {
      button.addEventListener('click', function() 
      {
        const category = button.textContent;
        const filteredMenu = menu.filter(item => 
        {
          if (category === 'All') 
          {
            return true; // Tüm öğeleri göstermek için true döndür
          } 
          else 
          {
            return item.category === category; // Seçilen kategoriye göre filtreleme yap
          }
        });

        // Önceki menü öğelerini temizle
        menuContainer.innerHTML = '';

        // Filtrelenmiş menü öğelerini ekrana ekle
        filteredMenu.forEach(item => 
        {
          createMenuCard(item);
        });
      });
    });
