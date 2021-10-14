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
        <MenuBtns menu={menuList} />;
      </section>
    </StyledMain>
  );
};

const MenuBtns = ({ menu }) => {
  const filterCat = menu.reduce(
    (total, value) => {
      if (!total.includes(value.category)) {
        total.push(value.category);
      }
      return total;
    },
    ['All']
  );
  console.log(filterCat);
  return (
    <nav className='btn-container'>
      <button className='btn'>button</button>
    </nav>
  );
};

export default Menu;
