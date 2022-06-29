# Hogwarts Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

### Api

I've used [Free jsonplaceholder](https://jsonplaceholder.typicode.com/) to make api calls.

## End User Guide

- Applicaion welcomes you with the login page which has no requirements to block you for moving forward.
- On the home page, you'll see a bunch of books that you can click and check who belongs to.
- Also, there is a history sidebar on the home route where you can see the last book you've checked.
- If you try to access any other routes accidentally, you'll be redirected to the error page that you can navigate to the login page again.

## Demo

[Demo](https://hogwarts-library.netlify.app/) is running on netlify right now.

> It is a free account. Therefore, it goes into standby mode after 30 minutes of inactivity. Please wait for the first run.

## Development process

- Created a shared folder where I can put reusable things like components, directives, pipes, etc..
> Especially, Once you built reusable dummy components like `button`, It satisfies you to implement easily. 
- Created a dummy component for books that requires you to send the `post` interface type data to present something visual.
> After managing to cool animation with css it's very elegant to assign & remove dataset to start the animation with `@HostListener`.
- To be able to manage styling very easily and convenient, `global.scss` file is created in the styles folder.
> Instead of diving into the components and spending some valuable time to find the specific style, you just need to change the css variable. For instance, `--hgw-button-background-color-primary`.
- App injection token and config.json files added to keep global variables like `api_url` and `version`.
> Customizable variable like `api_url` and `version` needs to be configurable. Even though it's a relatively small project, nice to have this flexibility with `app.config` injection token and `config.json` files inside assets.
- Responsiveness is one of the important issues in UI. Therefore, to detect device size viewport listen functions are added.
> Thanks to those functions we are able to understand 1vh equals some amount of pixel and always responsible during implementation like `height: calc(var(--vh, 1vh) * 100);`
- Services are created in their related usage folder. However, somehow if that changes later, it is worth reconsidering and putting it into the shared folder to have a clean & understandable structure. 
- Using svg is very important on FE. Especially, when you want to change some elements' style in different components. For example, We have a frame and initially no fill color but during the component life cycle, we want it to turn into greed or red. Normally, we should have created one more file but thanks to svg, all we need to do is give it a class or id to that element and overwrite the style.
> Thus, angular-svg-icon library is used to consume and track svg elements easily.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build:prod` to build the project. The build artifacts will be stored in the `dist/hogwarts-library` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
> I've used [spectator](https://ngneat.github.io/spectator/) tool to help me get rid of all the boilerplate grunt work, leaving you with readable, sleek and streamlined unit tests.

## Coverage unit tests
- Create a folder called coverage/sonarqube-report inside the directory (src,node_modules and coverage folders should be in the same directory)
- Run `npm run test:coverage` to execute the unit tests and collect the coverage from it.
> It is 100% right now :)

# Future Improvements

## State management

In order to, Sharing data and keeping them in one simple manageable object [ngRx](https://ngrx.io/) will be the choice.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [cypress](https://www.cypress.io/) 
