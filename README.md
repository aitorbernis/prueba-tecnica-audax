# Audax Technical Test

This repository contains the solution for the Fullstack Developer Technical Test. The system fetches real-time data from the public REE API about the national electric balance, stores the information in MongoDB, and exposes it via a GraphQL API. The backend is built with Node.js using TypeScript, and the frontend with React.

## Project Structure

prueba-tecnica-audax/          ← Root folder
│
├── README.md
│
└── codebase/                  ← Folder containing the codebase
    ├── backend/               ← Folder containing the backend
    │   ├── src/
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── Dockerfile
    │
    └── frontend/               ← Folder containing the frontend
        ├── src/
        ├── package.json
        ├── tsconfig.json
        └── Dockerfile


## Technologies Used

- **Backend**: Node.js, TypeScript, Express, Apollo Server Express, Mongoose, Axios, node-cron.
- **Database**: MongoDB.
- **Containerization**: Docker and Docker Compose.
- **Testing**: Jest (or Mocha) (to be implemented).

## Setup and Running

### Prerequisites

- Node.js (>=14)
- npm or yarn
- Docker and Docker Compose (optional, for running the complete system)

### Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/aitorbernis/prueba-tecnica-audax.git
    cd audax-technical-test/codebase/backend
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Environment Setup:**
    - Create a `.env` file in the `backend` directory with the following sample variables:
      ```env
      MONGODB_URI=<your-mongodb-connection-string>
      PORT=3000
      ```
    - Adjust the values to match your environment.

4. **Run the Server in Development Mode:**
    ```bash
    npm run dev
    ```

### Containerization with Docker

To run the backend along with MongoDB using Docker Compose:

1. Make sure Docker and Docker Compose are installed.
2. From the root of the project (`audax-technical-test/`), execute:
    ```bash
    docker-compose up --build
    ```

## Next Steps

- Develop and test data ingestion from the REE API.
- Implement the GraphQL API with queries and resolvers.
- Develop the frontend in React to consume the GraphQL API.
- Create unit and integration tests.

## License

This project is open source and distributed under the [MIT License](LICENSE).

---

Contributions and enhancements are welcome. Happy coding!
