import styled from "styled-components";
import {EnterGarage} from "./EnterGarage";
import {ParkingHistory }from "../ParkingHistory";
import {ParkingCard} from "../ParkingCard";
import { useGarageContext } from "../context/CarContext";
import {FullscreenLoading }from "./Loader";
import { toast } from "react-toastify";
import { Car } from "../partials/data";

const Wrapper = styled.div`
  border: solid black;
  height: 80vh;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%;
  margin-block: 2rem;
  overflow: hidden;
  overflow-y: scroll;
  margin: auto;
`;
const CarsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;


const Container = styled.div`
display: grid;
grid-template-columns: 2fr 5fr;
gap: 1rem;
align-items: center;
justify-content: center;
`;

interface GarageCollection {
  [spotId: string]: Car;
}

export function Home() {
  const { garageCollection, loading } = useGarageContext(); 

  if (loading) {
    return <FullscreenLoading />;
  }

  // function to handle exiting from garage
  const ExitButton = (licenceNumber: number) => {
    const handleExitClick = () => {
      // Check if licenceNumber is empty
      if (!licenceNumber) {
        toast.error("Please select a car");
        return;
      }

      // Retrieve the garageCollection from localStorage
      const storedGarageCollection = localStorage.getItem("garageCollection");
      let updatedGarageCollection = [];

      try {
        if (storedGarageCollection) {
          const parsedGarageCollection = JSON.parse(storedGarageCollection);

          // Find the car with the selected licenceNumber and update its state
          updatedGarageCollection = parsedGarageCollection.map((car:Car) => {
            if (car.licenceNumber === licenceNumber) {
              return { ...car, state: "available", exitTimeStamp: new Date() };
            }
            return car;
          });

          // Save the updated garageCollection to localStorage
          localStorage.setItem(
            "garageCollection",
            JSON.stringify(updatedGarageCollection)
          );

          toast.success(`Car with licence number ${licenceNumber} has exited`);
        } else {
          toast.error("No cars found in the garage");
        }
        
        setTimeout(() => {
          window.location.reload()
        }, 1500);

      } catch (error) {
        console.log("Error updating car state:", error);
      }
    };

    handleExitClick();
  };

  // For elements with same spotId, get only the latest element to show the latest car in garage
  const filteredGarageCollection = Object.values(
    garageCollection.reduce((acc:GarageCollection, car:Car) => {
      // Use the spotId as the key to store the latest car object
      acc[car.spotId] = car;
      return acc;
    }, {})
  );

  return (
    <Wrapper>
      {/* <Heading>- Parking Lot -</Heading> */}
      <Container>
        <div style={{borderRight: "1px solid red"}}>
        <EnterGarage />
        </div>
        <CarsContainer>
          {filteredGarageCollection.map((car: any) => (
            <ParkingCard
              {...car}
              handleExitGarage={() => ExitButton(car.licenceNumber)}
            />
          ))}
        </CarsContainer>
      </Container>
      <ParkingHistory />
    </Wrapper>
  );
}
