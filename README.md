# Playwright Data-Driven Evaluation Framework


## Overview
This project demonstartes a scalable SDET-leve; Playwright automation framrwork using:

- Page Object Model (POM)
- Data- driven testing using JSON
- Playwright custom fixtures
- Authentication using storageState
- CI integration with GitHub Actions

The framrwork validates tests across columns and tags in a project management board application.

---

## tech Stack

    - Playwright(Typescript)
    - Node.js
    - GitHub Actions (CI)

## Framework Architecture

tests/
|
|-- setup/              -> Authentication setup
|-- e2e/                -> Data-driven test cases
|-- fixtures/           -> Custom playwright fixtures
pages/                  -> Page Object Model
data/                   -> JSON test data
playwright.config.ts    -> Multi-project configuration


## Authentication Startegy

    A setup project logs in once and saves the session: playwright/.auth/user.json

        All testsprojects reue this state to avoid repeated login saving execution time

## Data-Driven Approach

    Test scenarios are stored in: data/tasks.json

        Adding a new test requires only adding a JSON object - no code changes.

## Key Features

    - Strict locator startegy
    - Column-scoped assertions
    - Tag validations
    - Reuseable page objects
    - No test duplication
    - CI-ready

## CI/CD Process

    GitHub Actions runs tests on feature brnaches before merging to main

## Author

    Vrushali Shinde

## Note:-
   I used permitted AI tools as part of completing this evaluation; however, I carefully reviewed, understood, and validated every file and line of code before including it. I am confident in my understanding of the entire solution and can clearly explain the logic, design decisions, and implementation details.