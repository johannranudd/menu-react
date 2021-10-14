import React, { useState } from 'react';
import { StyledMain } from '../styled-components/Main.styled';
import menuData from './Data';

const Menu = () => {
  const [menuList, setMenuList] = useState(menuData);

  return (
    <StyledMain>
      <section className='container'>
        <header className='headline'>
          <h1>Our Menu</h1>
          <div className='underline'></div>
        </header>
        <nav className='btn-container'>
          <MenuBtns menu={menuList} />
        </nav>
      </section>
    </StyledMain>
  );
};

const MenuBtns = ({ menu }) => {
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
          <button key={index} className='btn'>
            {item}
          </button>
        );
      })}
    </>
  );
};

export default Menu;
