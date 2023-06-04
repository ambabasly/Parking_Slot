interface ParkingSpot {
  spotId: string;
  state: string;
}

export interface Car extends ParkingSpot {
  licenceNumber: number;
  entranceTimeStamp?: Date;
  exitTimeStamp?: Date;
}

export const garageCollection: Car[] = [];

export const listOfSpots: string[] = [
  "AF1",
  "AF2",
  "AF3",
  "AF4",
  "AF5",
  "AF6",
  "AF7",
  "AF8",
  "AF9",
  "AF10",
];