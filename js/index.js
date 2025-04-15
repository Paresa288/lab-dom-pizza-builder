const pepButton = document.querySelector(".btn-pepperoni");

pepButton.onclick = function () {
  pepButton.classList.toggle("active");

  const peps = document.getElementsByClassName("pep");

  

  for (const pep of peps) {
    pep.classList.toggle("hidden");
  }
  
  ingredientsActive.pepperoni = !ingredientsActive.pepperoni;

  calculateCosts();
};

const costs = {
  pepperoni: 1,
  mushrooms: 1,
  greenPepers: 1,
  whiteSauce: 3,
  glutenFreeCrust: 5
};

const ingredientsActive = {
  pepperoni: true,
  mushrooms: true,
  greenPepers: true,
  whiteSauce: true,
  glutenFreeCrust: true
};

function calculateCosts() {
  const list = document.querySelector(".panel.price > ul");

  list.innerHTML = "";

  const finalCost = document.querySelector(".panel.price > strong");
  

  let total = 10;
  Object.keys(ingredientsActive).forEach(ing => {
    if (ingredientsActive[ing]) {
      total += costs[ing];

      const li = document.createElement("li");
      li.innerText = `${ing}: $ ${costs[ing]}`;

      list.append(li);
    }
    
  
  });
  finalCost.innerText = `$ ${total}`;
}

calculateCosts();

function onClickButton(ingredientClass) {
  this.classList.toggle("active");

  const ing = document.getElementsByClassName(ingredeintClass);

  for (const ing of ings) {
    ing.classList.toggle("hidden");
  }
}