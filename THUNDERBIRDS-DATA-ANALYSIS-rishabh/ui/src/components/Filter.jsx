import React, { useState } from 'react';
import "./filter.css"
function FilteredList() {
  const [filter, setFilter] = useState('all'); // Initial filter is set to 'all'
  const items = [
    { id: 1, name: 'Item 1', category: 'A' },
    { id: 2, name: 'Item 2', category: 'B' },
    { id: 3, name: 'Item 3', category: 'A' },
    // ... Add more items with categories
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  return (
    <div>
      <button onClick={() => setFilter('all')}>Show All</button>
      <button onClick={() => setFilter('A')}>Category A</button>
      <button onClick={() => setFilter('B')}>Category B</button>

      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
