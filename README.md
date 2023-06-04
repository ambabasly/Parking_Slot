# Parking Garage Simulation

The Parking Garage Simulation is a web application that simulates a parking garage environment. Users can enter the garage, select a parking slot, park their car, and later exit the garage. The application provides a visual representation of the parking garage, displays parked cars with their details, and maintains a parking history.

## Features

### Enter Garage

Clicking on the "Enter Garage" button allows users to initiate the parking process. A modal window is displayed with available parking slots and an input field for entering the license plate number.

### Select Parking Slot

Users can choose a parking slot from the list of available slots in the modal window. Each parking slot is identified by a spotId - AF1, AF2, AF3....AF10.

### Park Car

After selecting a parking slot and entering the license plate number, users can click on the "Park" button to park their car. The car's details are added to the garageCollection, including the entranceTimeStamp, state (set to "in-use"), licenseNumber, and spotId.

### Visual Representation

The application provides a visual representation of the parking garage. The garage park display shows a list of parked cars, each represented by a designed car element. The car element displays the spotId at the top and changes its color to red if the car is in use and green if it is available.

### Parking History

The application maintains a parking history section. The history section includes headings for each parking spot, marked as AF1, AF2, AF3 to AF10. Each spot lists all the cars parked in that spot, including both parked and exited cars. The history section records the details of each car, including the spotId, entranceTimeStamp, exitTimeStamp (if applicable), state, and licenseNumber.

### Exit Garage

Each parked car is associated with an exit button. Clicking on the exit button changes the state of the car object from "in-use" to "available". The exit action also adds an exitTimeStamp, set to the time when the exit occurred.


