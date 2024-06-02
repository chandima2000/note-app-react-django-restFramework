# My Notes App

## Overview
This project is a full-stack web application built using React for the frontend, Django and Django REST framework for the backend, and PostgreSQL as the database.
The main focus of this project is how to work with React, Django, Rest Framework and PostgreSQL Database together and how to deploy the full-stack project.
This project is deployed to this 👉 https://choreo.dev/ website.
- You can get handson experience "My-Notes-App" full-stack project through this Link 👉 https://a39fca2d-85ab-4360-bd49-68799635c80d.e1-us-east-azure.choreoapps.dev/register
- Unfortunately😓, the website provides a 7-day trial period for free hosting. Therefore after the trial period over, You can not access the "My-Notes-App" website.
  
## Features
- User Authentication
- RESTful API
- JWT authentication
- CRUD Operations
- Responsive Design


## Technologies Used
### Frontend
- ReactJs
  
### Backend
- Django
- Django REST Framework

### Database
- PostgreSQL

## Setup and Installation

### Prerequisites
- Make sure that Node.js version 18.18.0 or above is installed on your local machine.
- Make sure that python version 3.12.2 or above is installed on your local machine
- PostgreSQL
- npm or yarn
- pip

### Clone the repository
- Use the following URL to clone the repository:
```bash
https://github.com/chandima2000/noteApp-react-django-restFramework.git
```

### Frontend

1. Navigate to the `frontend` directory:
  ```bash
    cd frontend
  ```
2. Install dependencies:
  ```bash
   npm install
    # or
   yarn install
  ```
3. Start the React application:
 ```bash
  npm run dev
 ```

### Backend
  (for Windows OS)
1. Create a virtual environment:
  ```bash
   python -m venv env
  ```
2. Activate the virtual environment: (for Powershell)
  ```bash
   env\Scripts\activate.ps1
  ```
3. Install dependencies:
   - Create a file called "requirements.txt" in the root directory
   - Import the following packages into the file.
     
    ![image](https://github.com/chandima2000/noteApp-react-django-restFramework/assets/101726882/fceec879-53bf-4c84-8883-f5eed8862a75)
  - run the following command. (Make sure that you have activated the virtual environment)
  ```bash
     pip install -r requirements.txt
  ```
4. Navigate to the `backend` directory:
  ```bash
    cd backend
  ```
5. Set up the database:

  ```bash
   python manage.py makemigrations
   python manage.py migrate
  ```
6. Run the development server on the local machine:
    (By default the server runs on the port 8000)
  ```bash
    py manage.py runserver
  ```

## Environment Variables

- Create a .env file in the root directory and add the following variables:
  
  ![image](https://github.com/chandima2000/noteApp-react-django-restFramework/assets/101726882/7089d905-8a41-44d9-adc2-42ef15d41d26)


- Create a .env file in the frontend folder and add the following variable:

  ![image](https://github.com/chandima2000/noteApp-react-django-restFramework/assets/101726882/fdf3ce97-304f-4787-b5b1-fa8ba007caeb)

## Contributing
- Contributions are welcome! Please submit a pull request or open an issue for any changes.
