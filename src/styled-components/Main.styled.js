import styled from 'styled-components';

export const StyledMain = styled.main`
  max-width: 100vw;
  .headline {
    display: grid;
    place-items: center;
    margin: 4.5rem 0 3rem 0;
    h1 {
      font-size: 2.6rem;
      margin-bottom: 0.2rem;
    }
    .underline {
      height: 3px;
      width: 70px;
      background: var(--clr-1);
    }
  }
  /* buttons */
  .btn-section {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
    .btn {
      margin: 0 1rem;
      padding: 0.3rem 0.5rem;
      font-size: 1rem;
      color: var(--clr-1);
      background: transparent;
      border: none;
      border-radius: 5px;
      transition: 0.3s;
      cursor: pointer;
      text-transform: capitalize;
      &:hover {
        background: var(--clr-1);
        color: var(--clr-2);
      }
    }
  }
  /* menu */
  .menu-container {
    width: 90%;
    margin: auto;
    max-width: 1200px;
    display: grid;
    place-items: center;
    grid-gap: 3rem;
    .menu-item {
      max-width: 400px;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border: 4px solid var(--clr-1);
        border-radius: 5px;
        margin-bottom: 0.5rem;
      }
      div {
        header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px dotted var(--clr-4);
          .title {
            letter-spacing: 0.05rem;
          }
          .price {
            color: var(--clr-1);
            font-weight: 600;
          }
        }
        .description {
          font-size: 0.9rem;
          color: var(--clr-4);
        }
      }
    }
  }
  @media (min-width: 768px) {
    .menu-container {
      width: 80%;
      max-width: 600px;
      .menu-item {
        max-width: 600px;
        display: grid;
        grid-template-columns: 40% 60%;
        justify-items: center;
        grid-gap: 1rem;
        img {
          width: 220px;
          height: 170px;
          margin: 0;
        }
      }
    }
  }
  @media (min-width: 1170px) {
    .menu-container {
      width: 95%;
      max-width: 1200px;
      grid-template-columns: repeat(2, 1fr);
      justify-items: start;
      .menu-item {
        max-width: 560px;
        img {
          width: 100%;
          height: 150px;
        }
        div {
          .description {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
