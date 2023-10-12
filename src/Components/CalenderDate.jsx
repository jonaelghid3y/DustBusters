import React from 'react';
import styled from 'styled-components';

const CalenderDate = ({ className, date, divClass, getAvailiableTimes, dotColor, disabled }) => {
  return (
    <CalenderButton
      className={className}
      key={date}
      disabled={disabled}
      onClick={() => disabled ? null : getAvailiableTimes(date)}>
      <div className={divClass} value={date}>
        <p>{date}</p>
      </div>
      <div className={dotColor}></div>
    </CalenderButton>
  );
};

const CalenderButton = styled.div`
        cursor: pointer;
        border: 1px solid black;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 72px;
        @media (max-width: 321px) {
          height: 50px;
        }
        p {
            font-size: 1.2rem;
            font-weight: 300;
            @media (max-width: 321px) {
              font-size: 0.9rem;
            }
        }
        .green, .red, .yellow, .grey {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border-color: #3e907a;
        background-color:  #3e907a;
        }
        .red {
        border-color: #bc473a;
        background-color: #bc473a;
        }
        .yellow {
        border-color: yellow;
        background-color: yellow;
        }
        .grey {
        border-color: grey;
        background-color: grey;
        }
    .active {
        background-color: white;
    }
    .active-no-click {
      cursor: default;
      background-color: blue;
    }
    .nonactive {
        cursor: default;
        background-color: #d9d9d9;
        color: #68625A
    }
    .current {
        border: 3px solid #FFD530;
        width: 50%;
        height: 45%;
        border-radius: 50%;
        margin-bottom: -4px;
        margin-top: -5px;
    }
    .noncurrent {
      cursor: default;
        border: none;
        width: 50%;
        height: 45%;
        border-radius: 50%;
        margin-bottom: -4px;
        margin-top: -5px;
    }
    .active:hover {
        background-color:  #232323;
        color: white;
    }
`;

export default CalenderDate;
