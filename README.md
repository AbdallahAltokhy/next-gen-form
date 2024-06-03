<!-- @format -->

# Next-Generation Form

This project is a demonstration of a next-generation form that leverages AI to dynamically parse user input and generate structured data. The form allows users to input unstructured data, which is then processed by an AI model to extract and display the information in a structured format.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Running the Application](#running-the-application)

## Project Setup

### Prerequisites

- Node.js
- OpenAI API key

### Initial Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AbdallahAltokhy/next-gen-form.git
   cd next-gen-form

   ```

2. **Install Dependencies**

   ```bash
   cd Client
   npm install
   ```

   ```bash
   cd Server
   npm install
   ```

3. **Set Up Environment Variables**
   copy the .env.example file and rename it to .env
   ```bash
   cp .env.dist .env
   ```
   Update the `.env` file with your OpenAI API key.

## Running the Application

To run the full application, you will need to start both the frontend and backend servers. You can do this by running the following commands in separate terminal windows:

```bash
cd Client
npm start
```

```bash
cd Server
npm start
```

This will start the frontend server at `http://localhost:3000` and the backend server at `http://localhost:5000`. You can then access the application by navigating to `http://localhost:3000` in your web browser.
