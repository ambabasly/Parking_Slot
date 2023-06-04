import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../partials/styledComponents";
import { listOfSpots } from "../partials/data";
import { toast } from "react-toastify";
import { useGarageContext } from "../context/CarContext";

// styled components
const StyledSelectParkingSlotModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 50;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 95%;
  max-width: 40%;
  padding: 2rem;
  border: 2px solid black;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 0.8rem;
  width: 100%;
`;

const AvailableSpots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const AvailableSpotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const AvailableSpotCard = styled.p`
  padding: 0.3rem;
  border: 1px solid black;
  cursor: pointer;
`;

interface Props {
  handleCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SelectParkingSlotModal: React.FC<Props> = ({ handleCloseModal }) => {
  // const generateRandomLicenseNumber = (): string => {
  //   return Math.floor(100000 + Math.random() * 900000).toString();
  // };

  const { garageCollection } = useGarageContext();

  const [licenceNumber, setLicenseNumber] = useState(0);
  const [selectedSpot, setSelectedSpot] = useState("");

  const parkCar = () => {
    const data = {
      licenceNumber,
      entranceTimeStamp: new Date(),
      state: "in-use",
      spotId: selectedSpot,
    };

    if (!licenceNumber) {
      return toast.error("Pls supply a Licence Number");
    }

    // Check for duplicate licenceNumber in the garageCollection
    const hasDuplicateLicenceNumber = garageCollection.some(
      (car) => car.licenceNumber == licenceNumber && car.state == "in-use"
    );

    if (hasDuplicateLicenceNumber) {
      toast.error(
        "Duplicate licence number car found in garage. Please enter a unique licence number."
      );
      return;
    }

    const updatedGarageCollection = [...garageCollection, data];

    localStorage.setItem(
      "garageCollection",
      JSON.stringify(updatedGarageCollection)
    );

    toast.success(`Car Parked @ Spot # ${selectedSpot}`);
    handleCloseModal(false);

    setTimeout(() => {
      window.location.reload()
    }, 1500);
    
  };

  const updatedListOfSpots = listOfSpots.filter((spot) => {
    // Check if any car in the garageCollection has the same spotId and state is "available"
    const carWithSameSpotIdAndAvailableState = garageCollection.find(
      (car) => car.spotId === spot && car.state === "in-use"
    );

    return !carWithSameSpotIdAndAvailableState; // Filter out the spot if a car with the same spotId and "available" state exists
  });

  return (
    <StyledSelectParkingSlotModal>
      <ModalContent>
        <AvailableSpots>
          Select a Spot from the available Spots to Park:
          <AvailableSpotsContainer>
            {updatedListOfSpots.length ? (
              updatedListOfSpots.map((spot: string) => (
                <AvailableSpotCard onClick={() => setSelectedSpot(spot)}>
                  # {spot}
                </AvailableSpotCard>
              ))
            ) : (
              // show a message when all parking space are filled
              <p>No Parking Space Available</p>
            )}
          </AvailableSpotsContainer>
        </AvailableSpots>
        <div>
          <label htmlFor="plate number">
            <Input
              type="number"
              name="licenceNumber"
              onChange={(e: any) => setLicenseNumber(e.target.value)}
              maxLength={6}
              placeholder="Plate Number"
            />
          </label>
          <div style={{ display: "flex" }}>
            <Button onClick={() => handleCloseModal(prev => !prev)}>Close</Button>
            <Button $primary onClick={parkCar}>
              Park
            </Button>
          </div>
        </div>
      </ModalContent>
    </StyledSelectParkingSlotModal>
  );
};
