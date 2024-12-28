Airport Task

This project implements a simple interface for managing and displaying stops with customizable functionality. Users can toggle options, which dynamically update the application’s state.

Features

Toggle stop options dynamically.

Ensure that at least one option is always selected.

Display interactive UI with hover effects and checkbox status.

Installation

To set up the project locally, follow these steps:

Clone the repository:

git clone https://github.com/gorfront/Airport_Task.git

Navigate to the project directory:

cd Airport_Task

Install dependencies:

npm install

Start the development server:

npm start

File Structure

Stops.tsx

This file contains the core functionality of the project. Below is a detailed breakdown:

Props

stops (Array): List of stop objects with the following structure:

id (number): Unique identifier for the stop.

title (string): Display name of the stop.

active (boolean): Indicates whether the stop is selected.

setStops (Function): Updates the state of stops based on user interaction.

Key Functionality

State Management

Ensures that at least one stop remains active.

Dynamically updates the active state of stops when users click on an item.

Event Handling

Handles click events with the handlerCheck function, which updates the state based on the selected stop.

UI Logic

Displays a list of stops with checkboxes.

Implements hover and selection styles for enhanced interactivity.

Stops.css

This file provides the styles for the Stops component. Key highlights include:

Hover Effects: Adds a "только" label on hover.

Dynamic Styling: Changes the appearance of items based on their active state.

Positioning: Ensures proper alignment and spacing of elements.

How It Works

Rendering Stops

The Stops component iterates through the stops array and renders each item with a checkbox and label.

Updating State

Clicking an item triggers the handlerCheck function, which updates the active state of the selected stop.

Dynamic UI Behavior

The "только" label appears when hovering over an item or when an item is active.

Technologies Used

React: For building the component-based UI.

TypeScript: For type safety and improved code maintainability.

CSS: For styling and visual enhancements.

Contributing

If you'd like to contribute:

Fork the repository.

Create a feature branch:

git checkout -b feature-name

Commit your changes:

git commit -m "Add new feature"

Push to your branch:

git push origin feature-name

Open a pull request.

License

This project is open-source and available under the MIT License. See the LICENSE file for more details.

Contact

If you have any questions or issues, feel free to contact gorfront or open an issue in the repository.

