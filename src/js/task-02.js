const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredientsContainerEl = document.querySelector("ul#ingredients");

const elements = ingredients.map((option) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = option;
  ingredientEl.classList.add("item");
  return ingredientEl;
});

console.log(elements);
ingredientsContainerEl.append(...elements);
