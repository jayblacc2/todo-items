import React, {useState} from 'react';

import './form.css';

const Form = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      const newItem = item;
      setItems((prevItem) => {
        return [...prevItem, newItem];
      });
      setItem('');
    } else {
      alert('Empty ', item);
    }
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="content">Todo Items</h1>
        <div className="content form-group">
          <label htmlFor="item">Item: </label>
          <input
            type="text"
            name="item"
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            autoComplete="off"
          />
          <button type="submit" className="btn">
            Add Item
          </button>
        </div>
        {items.map((item, index) => {
          return (
            <ul key={index + 1} className="content content-list">
              <li>{item}</li>
              <i class="fa-solid fa-trash-can"></i>
            </ul>
          );
        })}
      </form>
    </div>
  );
};

export default Form;
