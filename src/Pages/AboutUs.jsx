import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AboutUs() {
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    }
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    }
  }, [controls1, controls2, inView1, inView2]);
  return (
    <StyledContainer>
      <StyledDiv>
        <StyledImage src='/imgs/pexels-tima-miroshnichenko-6197108.jpg' alt="DustBusters Cleaning" />
        <motion.div initial={{ opacity: 0, y: 50 }} transition={{delay: 0.5, ease: 'easeOut'}} animate={controls1} ref={ref1}>
          <StyledTextContainer>

            <StyledText>

              <BrandName1>Dust</BrandName1><BrandName2>Busters</BrandName2> is a highly experienced cleaning company with a dedicated and trained staff. Our flexibility and wide range of services allow us to provide both complete and partial cleaning solutions. We are based in Stockholm but offer our services nationwide.

            </StyledText>

            <StyledText>
              We cater to private individuals by offering a range of services including everyday cleaning, window cleaning, final cleaning, and our specialty: <BrandName2>dust busting</BrandName2>. Whether the task is large or small, we are committed to providing comprehensive cleaning support!
            </StyledText>

          </StyledTextContainer>
        </motion.div>
      </StyledDiv>
      <StyledDiv style={{ backgroundColor: '#232323', color: 'white', display: 'flex', justifyContent: 'center', }}>
        <StyledTextContainer>
          <motion.div initial={{ opacity: 0, y: 50 }} transition={{delay: 1, ease: 'easeOut'}}  animate={controls2} ref={ref2}>
            <StyledText>
              Our vision is to make cleaning services accessible to everyone, regardless of their location in the country. Therefore, it is important to us that you feel comfortable and confident in our services, including pricing, execution, and quality.
            </StyledText>
            <StyledText>
              With <BrandName1>Dust</BrandName1><BrandName2>Busters</BrandName2>, cleaning will never feel like a chore. You can relax while we do the work for you. We are fully insured, licensed, and handle the RUT deduction for you, allowing you to benefit from a 50% deduction on labor costs.
            </StyledText>
          </motion.div>
        </StyledTextContainer>
      </StyledDiv>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  font-family: 'Poppins', sans-serif;
`;

const StyledDiv = styled.div`
  width: 100%;
  padding: 5vw;
  display: flex;
  flex-direction: row;
  gap: 5vw;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
}
`;

const StyledImage = styled.img`
  height: auto;
  border-radius: 35px;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    width: 350px;
}
`;

const StyledTextContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const StyledText = styled.p`
  font-size: 17px;
  margin-bottom: 1.5rem;
`;

const BrandName1 = styled.span`
  font-weight: 600;
  color: #FFD530;
`;

const BrandName2 = styled.span`
  font-weight: 600;
  color: #FFD530;
`;

export default AboutUs;