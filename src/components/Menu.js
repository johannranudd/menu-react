import React, { useState } from 'react';
import { StyledMain } from '../styled-components/Main.styled';
import menuData from './Data';

const Menu = () => {
  const [menuList, setMenuList] = useState(menuData);

  const categoriesReduced = menuData.reduce(
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
      <Categories
        filterItems={filterItems}
        categoriesReduced={categoriesReduced}
      />
      <MenuItems menuList={menuList} />
    </StyledMain>
  );
};

const Categories = ({ categoriesReduced, filterItems }) => {
  return (
    <section className='btn-section'>
      {categoriesReduced.map((item, index) => {
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
    <section className='menu-container'>
      {menuList.map((item) => {
        const { id, desc, img, price, title } = item;
        return (
          <article className='menu-item' key={id}>
            <img src={img} alt='' />
            <div>
              <header>
                <h4 className='title'>{title}</h4>
                <p className='price'>$ {price}</p>
              </header>
              <p className='description'>{desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
