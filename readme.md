# About the App

A simple personal Fitness Log with three screens Register, Login, and Main. Workouts will be retrieved from the database and displayed nicely on the main page (date, type, duration, intensity etc.) and view their past workouts. All data is stored in a MongoDB database and accessed through an Express REST API. The app will make use of a MEAN stack, MVC, Pug, Bootstrap, REST, Git, Passport.js, and cloud hosting.

## Screens

Register: Pug form, client+server validation (unique email, strong password, check that combination matches an account in the database).

Login: Passport.js, Express sessions.

Main: List your workouts. Angular component embedded on this page will provide “This Week Total” widget.

