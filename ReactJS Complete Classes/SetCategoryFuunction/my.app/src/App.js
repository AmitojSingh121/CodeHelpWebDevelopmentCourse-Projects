// / set function dah code ha 
import react from 'react';
import React, { useState } from 'react';
import './App.css'; 
function CategorySelector() {
  // Declare a state variable 'activeCategory' and a function 'setActiveCategory' to update it.
  // Initialize 'activeCategory' to 'all'.
  const [activeCategory, setActiveCategory] = useState('all');

  // Function to handle the category change
  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Update the activeCategory state
  };

  return (
    <div>
      <h1>Select a Category: {activeCategory}</h1>

      <button onClick={() => handleCategoryClick('electronics') }>
        Electronics
      </button>
    
      <button onClick={() => handleCategoryClick('clothing')}>
        Clothing
      </button>

      <button onClick={() => handleCategoryClick('books')}>
        Books
      </button>

      <button onClick={() => handleCategoryClick('all')}>
        All
      </button>

      {/* Display content based on the active category */}
      {activeCategory === 'electronics' && <p>Displaying Electronics products.</p>}
      {activeCategory === 'clothing' && <p>Displaying Clothing items.</p>}
      {activeCategory === 'books' && <p>Displaying Books.</p>}
      {activeCategory === 'all' && <p>Displaying all products.</p>}
    </div>
  );
}

export default CategorySelector;
