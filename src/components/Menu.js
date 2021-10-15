import React, { useState } from 'react';
import { StyledMain } from '../styled-components/Main.styled';
import menuData from './Data';

// const allCategories = new Set([
//   ...'All',
//   menuData.filter((item) => {
//     return;
//   }),
// ]);

const allCategories = menuData.reduce(
  (total, value) => {
    if (!total.includes(value.category)) {
      total.push(value.category);
    }
    return total;
  },
  ['All']
);

const Menu = () => {
  const [menuItems, setMenuItems] = useState(menuData);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(menuData);
      return;
    }
    const newItems = menuData.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
    setMenuItems(newItems);
  };

  return (
    <StyledMain>
      <div className='headline'>
        <h1>Our Menu</h1>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <MenuItems menuItems={menuItems} />
    </StyledMain>
  );
};

const Categories = ({ categories, filterItems }) => {
  // console.log(categories);
  return (
    <div className='btn-container'>
      {categories.map((item) => {
        // console.log(item);
        return (
          <button className='btn' onClick={() => filterItems(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

const MenuItems = ({ menuItems }) => {
  return (
    <section className='container'>
      {menuItems.map((menuItem) => {
        const { id, title, category, img, price, desc } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt='' />
            <header>
              <h4 className='title'>{title}</h4>
              <p className='price'>{price}</p>
            </header>
            <p className='description'>{desc}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
