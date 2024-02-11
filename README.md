# Continuos Integration and Continuous Deployment

## Session Overview

In this bootcamp we will cover aspects related to Continuous Integration (CI) and Continuous Deployment (CD).

This bootcamp's aim will be to meet the following _Key Skills and Behaviours (KSBs)_:

- **S10**: Build, manage and deploy code into the relevant environment.
- **S14**: Follow company, team or client approaches to continuous integration, version and source control.

The above KSBs will be achieved through a mixture of theory and practical set of sessions.

> The theory will mainly focus on describing both areas and the reasons why we have CI/CD. The practicals will provide a platform whereby attendees will be able to see CI/CD in action.

## Technologies/Resources Used

In this bootcamp, the following technologies/resources will be used:

- Github (and GitHub Actions to perform CI/CD).
- React (we will use a sample Web Application).
- Docker (to create tagged images for the Web Application so that can be used in a virtualized environment).

With these technologies listed, the following assumptions will be made:

- Attendees will have a basic understanding of Git (adding, committing, pushing and tagging code).
- Attendees will have a good understanding and can work their way around GitHub.
- Attendees will have some basic understanding of React and CSS.

The emphasis of this bootcamp will be focused not around web development but more towards a DevOps approach whereby the attendees will build pipelines from the ground up and see artifacts being built and deployed to targeted environments.

## Pre-Requisites

To use the web application that is built using React, Node 16+ is required.

## Getting Started

To start using this application, ensure that you run `npm install` to download required dependencies

## Mocking

This application uses [MSW](https://mswjs.io/) to render (or mock) the data that would otherwise be sourced from a back end server/database.

Fixtures and handlers can be found under the `src/__mocks__` folder tree.
