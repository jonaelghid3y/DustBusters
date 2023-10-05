import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const ReviewForm = ({ name, setName, content, setContent, rating, setRating, }) => {
  return (
    <>
      <StyledFormDivs>
        <label> Name:</label>
        <StyledInput
          type="text"
          name='name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </StyledFormDivs>
      <StyledFormDivs>
        <label> Comments or feedback:</label>
        <Styledtextarea
          required value={content}
          onChange={(e) => setContent(e.target.value)} />
      </StyledFormDivs>
      <StyledRowDiv2>
        {[...Array(5)].map((_, i) => (
          <StyledStar
            key={i}
            selected={i < rating}
            onClick={() => setRating(i + 1)}
          >
            <AiFillStar size={30} />
          </StyledStar>
        ))}
      </StyledRowDiv2>
    </>
  );
};

const StyledFormDivs = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    `;
const StyledInput = styled.input`
    font-size: 16.5px;
    width: 20vw;
    height: 5vh;
    @media (max-width: 768px) {
    width: 60vw;
    }
`;
const Styledtextarea = styled.textarea`
    width: 20vw;
    height: 9vw;
    font-size: 18px;
    resize: none;

@media (max-width: 768px) {

  width: 60vw;
  height: 15vh;
  
 }

`;

const StyledStar = styled.div`
  cursor: pointer;
  color: ${props => (props.selected ? '#FFD530' : '#ccc')};
  display: flex;
  flex-direction: row;
  transition: 0.5s;
`;

const StyledRowDiv2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
`;

export default ReviewForm
