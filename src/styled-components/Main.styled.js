import styled from 'styled-components';

export const StyledMain = styled.main`
  .container {
    width: 90%;
    margin: auto;
    max-width: 1200px;
    .headline {
      display: grid;
      place-items: center;
      margin: 2rem 0;
      h1 {
        font-size: 2.2rem;
        margin-bottom: 0.25rem;
      }
      .underline {
        height: 3px;
        width: 60px;
        background: var(--clr-1);
      }
    }
    .btn-container {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      .btn {
        margin: 0 0.5rem;
        padding: 0.5rem;
        background: transparent;
        border: none;
        transition: 0.3s;
        border-radius: 5px;
        cursor: pointer;
        color: var(--clr-1);
        font-size: 1rem;
        &:hover {
          background: var(--clr-1);
          color: white;
        }
      }
    }
    .menu-items {
      display: grid;
      grid-gap: 2rem;
      .single-menu-item {
        width: 400px;
        margin: auto;

        img {
          /* width: 350px; */
          width: 100%;
          height: 200px;
          object-fit: cover;
          border: 4px solid var(--clr-1);
          border-radius: 5px;
          margin-bottom: 0.5rem;
        }
        .name-and-price {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dotted var(--clr-3);
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem;
          h4 {
            letter-spacing: 0.2rem;
            font-weight: 600;
          }
          p {
            color: var(--clr-1);
            font-weight: 700;
          }
        }
        .description {
          color: var(--clr-4);
          font-size: 0.9rem;
        }
      }
    }
    @media (min-width: 800px) {
      .menu-items {
        .single-menu-item {
          display: grid;
          grid-template-columns: 35% 65%;
          justify-items: center;
          grid-gap: 1rem;
          width: 100%;
          max-width: 700px;
          img {
            width: 240px;
            height: 180px;
          }
          .description {
            font-size: 1rem;
          }
        }
      }
    }
    @media (min-width: 1180px) {
      .menu-items {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3.5rem;
        .single-menu-item {
          grid-gap: 1.5rem;
          img {
            width: 210px;
            height: 170px;
          }
        }
      }
    }
  }
`;
