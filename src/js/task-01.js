const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    (element) => `Categoriy: ${element.children[0].textContent}
Elements: ${element.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
console.log(element);
