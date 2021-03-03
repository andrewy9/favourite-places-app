# Full-stack React project (work in progress)
An application which provides visual suggestions of multiple venues to visit based on the users current location and interests.
The application will also allow the user to to create a profile and then log in so that they can save and manage their favourite places.

## Key technologies
* React.js - The application is a React project with multiple layers of components, which will allow easier management as the application scales up over time.
* Reudx.js - The use of global state will allow easier feed of information between different React components.
* @React-testing-library & Jest - Allows developers to create unit tests for their react components.
* GoogleMap API - Provides visual representation of user's location and surrounding venues. The React-Google-Map module allows cleaner integration of the API.
* FourSquareAPI - Provides geo-data of different venues surrounding the user. This data can be integrated with the GoolgeMap API to show those locations visually as a marker.
* Express.js - Backend server-side library used to connect the application to different (Internal & External) APIS.
* SQLite & Knex - Simple database which will store the user's information and saved venues of interest.
* 0Auth - Used to allow authentication and creation of log-ins for the users.

## Goal
I am creating this application to both practice and demonstrate my ability to create a Full-Stack application with React and its associated technologies. This application will also demonstrate different uses of internal APIs, creation of internal APIS, and creation of unit-tests for its functions and components.
