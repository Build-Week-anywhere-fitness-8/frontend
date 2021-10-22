# Lambda School Build Week

The purpose of Build Week is to empower students to demonstrate mastery of your learning objectives. The Build Weeks experience helps prepare students for the job market.

## TITLE

### Anywhere Fitness

## Pitch🦾

These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.
<br />

While you could use several mobile apps to accomplish this, AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held.
<br />

Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.

## MVP🎯

1. User can create/register as a `client` and login with the registered credentials.

2. User can create/register as an `instructor` by entering an additional Auth Code during signup, and can login with the registered credentials.

3. `client` and `instructor` are both presented with the appropriate on-boarding walkthrough on first sign-in, with an option to skip it.

4. Authenticated `instructor` can create update and delete a class. At a minimum, each class must have the following properties
   - `Name`
   - `Type`
   - `Start time`
   - `Duration`
   - `Intensity level`
   - `Location`
   - `Current number of registered attendees`
   - `Max class size`

<br />

5. Authenticated `client` can search for available classes. At a minumum, they must be able to search by the following criteria.
   - `Class time`
   - `Class date`
   - `Class duration`
   - `Class type`
   - `Intensity level`
   - `Class location`

<br />

6. Authenticated `instructor` can create virtual punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, pilates, etc.)

7. Authenticated `user` can reserve a spot in a class with available seats open, and can reschedule or cancel their current `reservation` from the mobile app.

## OUR TEAM:

| Unit 4 (backend)    | Unit 3 (frontend) | Unit 2 (frontend)    |
| ------------------- | ----------------- | -------------------- |
| TraNequa Fauntleroy | Monica Salas      | Chris Castillo       |
| George Cavazos      | Irvin Arevalos    | Anthony Amaya        |
|                     |                   | Robert Von Der Becke |

## What is Build Week?

Lambda School Build Weeks is a cross-collaborative project that takes place at the end of each unit of instruction. Learners are tasked with building out a product based on a product canvas detailing the pitch, scope and MVP of the project.
<br />

These projects vary widely in their stated application but all demonstrate full CRUD-functionality in a form of a full-stack developed web application.
Team members will work across all units of instruction- spanning from React Engineers to backend architects- to successfully build and deploy a fully-functioning, React-based web application that supports persistent data storage via a SQL database.
<br />

Build Weeks is an exercise not just in technical chops, but too of a team's ability to realistically plan the development, via an Agile workflow, of a staged production application, all while maintaining a healthy workflow of a collaborative Github organization. The end product is the sum of a week's worth of development and is often debuted as a proof-of-concept, though front end design is taken into consideration through use of design systems and / or CSS frameworks.
<br />

## The primary tech stack we used for this project include:

<br />

| Frontend    | Backend | Database   | Testing | Cloud Deployment  |
| ----------- | ------- | ---------- | ------- | ----------------- |
| Javascript  | NodeJS  | Postgresql | JEST    | Vercel (frontend) |
| React       | Express |            |         | Heroku (backend)  |
| React-Strap |         |            |         |


