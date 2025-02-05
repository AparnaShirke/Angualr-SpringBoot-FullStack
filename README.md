### Week 1 

# AngularFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Week 2 

## Logging Setup

This project implements structured logging using ngx-logger. 
Run `npm install ngx-logger` to install ngx-logger.

## Logging Strategy

Logs are generated at different levels (info, warn, error) depending on the severity of the message.

Logs are stored in local storage for debugging purposes.

Critical logs are sent to a remote logging server for analysis.

Developers can configure log levels dynamically to avoid excessive logging in production environments.

## Unit Testing Guidelines

Run `ng test`  to execute unit tests,

Use Jasmine and Karma for writing and running unit tests.

Test components for rendering and interaction.

Test services for business logic and API calls.

Use mock dependencies and spies to isolate units.

Ensure code coverage is adequate with meaningful test cases.

## Running Unit Tests in CI/CD Pipeline

Unit tests are executed automatically in the CI/CD pipeline before merging changes.

Tests are triggered using a GitHub Actions.

Ensure all tests pass before a build is deployed to staging or production

## Week 3

## CI/CD Process

The CI/CD pipeline automates building, testing, and deploying the application.

## Steps in the Pipeline

Code Commit: Developers push code changes to the repository.

Build and Linting: The pipeline verifies code quality and builds the project.

Unit Testing: Runs ng test to ensure components and services function correctly.

End-to-End Testing: Executes ng e2e tests for UI validation.

Deployment: Deploys the application to a staging/production server if all checks pass.

## Contributing to the CI/CD Pipeline

Modified the CI/CD configuration file (.github/workflows for GitHub Actions)

Ensure tests are up-to-date before pushing changes.

Review pipeline logs and fix any failed steps before requesting a merge.