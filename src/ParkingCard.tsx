import React from "react";
import { BsCarFrontFill } from "react-icons/bs";
import styled from "styled-components";
import { Button } from "./partials/styledComponents";
import { Car } from "./partials/data";

interface Props extends Car {
  buttonTitle?: string;
  full?: boolean;
  handleExitGarage: () => void;
}

export const ParkingCard: React.FC<Props> = ({
  state,
  spotId,
  buttonTitle,
  handleExitGarage,
}) => {

  const Wrapper = styled.div<{ $empty?: boolean }>`
    diplay: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    border: 1px solid ${(props) => (props.$empty ? "red" : "#00A972")};
    width: max-content;
  `;

  const ParkingSlot = styled.h4`
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  `;

  const carIcon = {
    width: "100%",
    fontSize: "3rem",
    margin: "auto",
    textAlign: "center",
    color: state == "available" ? "#00A972" : "red",
  };

  return (
    <Wrapper>
      <ParkingSlot># {spotId}</ParkingSlot>
      <div>
        <BsCarFrontFill style={carIcon} />
      </div>
      <Button
        disabled={state === "available"}
        $primary
        onClick={() => handleExitGarage()}
      >
        {state === "available" ? "Available" : "Exit" || buttonTitle}
      </Button>
    </Wrapper>
  );
};
