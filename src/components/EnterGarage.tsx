import { useState } from "react";
import styled from "styled-components";
import { Button } from "../partials/styledComponents";
import { BsCarFrontFill } from "react-icons/bs";
import {SelectParkingSlotModal }from "./SelectParkingSlotModal";

export const EnterGarage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleCarParking = () => {
    setShowModal((prev) => !prev);
  };

  const Wrapper = styled.div<{ $empty?: boolean }>`
    diplay: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    justify-items: center;
    border: 1px solid ${(props) => (props.$empty ? "red" : "#00A972")};
    width: 200px;
    padding-block: 0.5rem;
  `;

  const carIcon = {
    width: "100%",
    fontSize: "4rem",
    margin: "auto",
    textAlign: "center",
    color: "#00A972",
  };

  return (
    <Wrapper>
      <BsCarFrontFill style={carIcon} />
      <div
        style={{ margin: "auto", textAlign: "center", width: "100%" }}
        onClick={toggleCarParking}
      >
        <Button $primary>Enter Garage</Button>
      </div>
      {showModal && (
        <SelectParkingSlotModal handleCloseModal={setShowModal} />
      )}
    </Wrapper>
  );
};
