# About the App

A full-stack personal Fitness Log application with four main screens rendered with a mix of Pug (Register, Login and About) and an Angular component for the Home (data) page. The application enables users to securely register and authenticate, then view a list of workouts for the week. All data is stored in a MongoDB database and accessed through an Express REST API. The app utilises the MEAN stack and follows the MVC architecture pattern. It also implements Bootstrap for responsive UI design, RESTful APIs for data communication, Git for version control, Passport.js and SSL for security and is deployed on the cloud to Render. 

## Screens

Register: Pug form, client+server validation (unique email, strong password, check that combination matches an account in the database, Passport.js hash and salt).

Login: Passport.js, Express sessions.

Main: Angular page. List your workouts and weekly summary

About: Information about the app

## Render
https://fitnesslogwebapp.onrender.com/

