
# YomiLearn

YomiLearn is (to be) a small Japanese vocabulary quiz application developed using Node.js, Express, and MongoDB. This project demonstrates practical use of backend development, RESTful API design, database integration, and CI/CD practices using GitLab.

## Features

- Add, update, delete, and retrieve Japanese vocabulary entries
- Generate randomized multiple-choice quizzes
- Check submitted quiz answers and return scores
- MongoDB Atlas for persistent data storage
- Continuous integration pipeline using GitLab CI/CD

## Technology Stack

- Node.js with Express framework
- MongoDB with Mongoose ODM
- GitLab CI/CD
- GitHub for version control
- dotenv for environment configuration
- Jest for unit and integration testing

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/yomilearn.git
cd yomilearn
npm ci
```

Create a `.env` file in the root directory and add the following variables:

```env
MONGO_USER=yourUser
MONGO_PASS=yourPassword
MONGO_HOST=yourHost.mongodb.net
MONGO_DB=yourDatabase
PORT=3000
```

Start the application:

```bash
npm start
```

## Running Tests

```bash
npm test
```

Tests are executed automatically through the GitLab CI pipeline on each push.

## API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/vocab`     | Retrieve all vocabulary  |
| POST   | `/api/vocab`     | Add a new vocabulary     |
| PUT    | `/api/vocab/:id` | Update existing entry    |
| DELETE | `/api/vocab/:id` | Delete a vocabulary item |
| GET    | `/api/quiz`      | Generate a quiz          |
| POST   | `/api/quiz`      | Submit quiz answers      |

## Seeding the Database

To insert initial vocabulary entries into the database, execute:

```bash
node src/scripts/seed.js
```

Ensure environment variables are correctly set.

## CI/CD Pipeline

This project utilizes GitLab CI/CD for continuous integration. The pipeline installs dependencies and runs tests automatically on each push.

## Future Enhancements

- Implement a frontend interface (React, Vue)
- Add user authentication and score tracking
- Include multiple difficulty levels
- Deployment to a free hosting provider