import React, { useState } from 'react';
import { StyledMain } from '../styled-components/Main.styled';
import menuData from './Data';

const Menu = () => {
  const [menuList, setMenuList] = useState(menuData);

  const allCategories = menuData.reduce(
    (total, value) => {
      if (!total.includes(value.category)) {
        total.push(value.category);
      }
      return total;
    },
    ['all']
  );

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuList(menuData);
      return;
    }
    const newItems = menuData.filter((item) => {
      return item.category === category;
    });
    setMenuList(newItems);
  };

  return (
    <StyledMain>
      <div className='headline'>
        <h1>Our Menu</h1>
        <div className='underline'></div>
      </div>
      <Categories filterItems={filterItems} allCategories={allCategories} />
      <MenuItems menuList={menuList} />
    </StyledMain>
  );
};

const Categories = ({ allCategories, filterItems }) => {
  return (
    <section className='btn-container'>
      {allCategories.map((item, index) => {
        return (
          <button key={index} className='btn' onClick={() => filterItems(item)}>
            {item}
          </button>
        );
      })}
    </section>
  );
};
const MenuItems = ({ menuList }) => {
  return (
    <section className='container'>
      {menuList.map((item) => {
        const { id, title, desc, img, price } = item;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt='' />
            <header>
              <h4>{title}</h4>
              <p>{price}</p>
            </header>
            <p>{desc}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
