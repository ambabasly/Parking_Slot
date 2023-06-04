import styled from "styled-components";
import {SpotHistory }from "./components/SpotHistory";
import { listOfSpots } from "./partials/data";

const Wrapper = styled.div`
  border: solid #00a972;
  height: 35vh;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-inline: 2rem;
  overflow-y: scroll;
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Heading = styled.h1`
  font-weight: bolder;
  font-size: 2rem;
  color: #00a972;

`;

export const ParkingHistory = () => {
  return (
    <Wrapper>
        <Heading>Parking History</Heading>
      <Container>
        {listOfSpots.map((spot) => (
          <SpotHistory spotId={spot} state={""} />
        ))}
      </Container>
    </Wrapper>
  );
};
