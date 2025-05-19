"use client"
import React from 'react';
import styled from 'styled-components';
// import Link from 'next/link';

type text = {
  texts : string,
  href : string
}

const Card: React.FC<text> = ({ texts, href }) => {
  return (
    <StyledWrapper>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <div className="card mx-10 my-20">
          <h2  style={{ fontSize: '20px' }}>{texts}</h2>
        </div>
      </a>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .card {
    width: 250px;
    height: 254px;
    background: #07182E;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
  }

  .card h2 {
    z-index: 1;
    color: white;
    font-size: 2em;
  }

  .card::before {
    content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: '';
    position: absolute;
    background: #07182E;
    inset: 5px;
    border-radius: 15px;
  }  
  
  /* .card:hover:before {
    background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
    animation: rotBGimg 3.5s linear infinite;
  } */
`;

export default Card;