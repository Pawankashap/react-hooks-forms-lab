import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  let [search,setsearch]=useState("")
  const [newItems, setArray] = useState(items)
 
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSelectedCategory('')
    setSelectedCategory(event.target.value)
    setsearch(event.target.value)
  }
  const itemsToDisplay = newItems.filter((item) => {
    if (search!="") return item.name.toLowerCase().includes(selectedCategory.toLowerCase());
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function onItemFormSubmit(prop) {
    setArray([...newItems, prop])
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}  />
      <Filter search={search} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
