import React, { useEffect, useState } from 'react';
import { StyledMain } from '../styled-components/Main.styled';
import menuData from './Data';

const Menu = () => {
  const [menuList, setMenuList] = useState(menuData);
  const [isTrue, setIsTrue] = useState(true);

  const filterItems = (cat) => {
    const filterMenuItems = menuList.filter((item) => {
      if (item.category === cat) {
        return item;
      }
    });
    setMenuList(filterMenuItems);
  };

  return (
    <StyledMain>
      <section className='container'>
        <header className='headline'>
          <h1>Our Menu</h1>
          <div className='underline'></div>
        </header>
        <nav className='btn-container'>
          <MenuBtns menu={menuData} filterItems={filterItems} />
        </nav>
        <section className='menu-items'>
          {menuList.map((item) => {
            return <MenuItems key={item.id} {...item} />;
          })}
        </section>
      </section>
    </StyledMain>
  );
};

// *menu items

const MenuItems = ({ title, img, desc, price }) => {
  return (
    <article className='single-menu-item'>
      <img src={img} alt='' />
      <footer className='info-container'>
        <div className='name-and-price'>
          <h4>{title}</h4>
          <p>{price}</p>
        </div>
        <p className='description'>{desc}</p>
      </footer>
    </article>
  );
};

// *buttons

const MenuBtns = ({ menu, filterItems }) => {
  const reduceCat = menu.reduce(
    (total, value) => {
      if (!total.includes(value.category)) {
        total.push(value.category);
      }
      return total;
    },
    ['All']
  );

  return (
    <>
      {reduceCat.map((item, index) => {
        return (
          <button key={index} className='btn' onClick={() => filterItems(item)}>
            {item}
          </button>
        );
      })}
    </>
  );
};

export default Menu;
