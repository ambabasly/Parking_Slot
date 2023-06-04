import styled from "styled-components";
import { useGarageContext } from "../context/CarContext";
import { Car } from "../partials/data";

const HistoryLicenceCard = styled.h4`
  width: 150px;
  text-align: center;
`;

const Title = styled.h3`
  font-weight: bolder;
  font-size: 1rem;
`;
const LicenceNumber = styled.p`
  font-size: 0.8rem;
  padding: 0.2rem;
`;

interface Props {
  spotId: string,
  state: string, 
}

export const SpotHistory = ({ state, spotId }:Props) => {
  const { garageCollection } = useGarageContext();

  const carsInSpotId = garageCollection.filter(
    (car: Car) => car.spotId == `${spotId}`
  );

  return (
    <HistoryLicenceCard>
      <Title>Spot: #{spotId}</Title>
      {carsInSpotId?.map((car: any) => (
        <LicenceNumber
          style={{
            border: `1px solid ${state === "available" ? "green" : "red"}`,
          }}
        >
          Licence Number: #{car.licenceNumber}
        </LicenceNumber>
      ))}
    </HistoryLicenceCard>
  );
};
