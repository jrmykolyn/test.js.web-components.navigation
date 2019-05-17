# Test - JS - Web Components - Navigation

## Table of Contents
- [About](#about)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)

## About
This repository contains a 'search results'-like page, complete with mock navigations and product data. The navigation elements are built using Web Components, while the product elements are not.

This purpose of this repository is to explore the following:
- How can primitive data be made available to Web Components?
- How can 'rich'/reference-type data be made available to Web Components?
- How should responsibilities be spread across multiple web components?
- What is involved in creating a 'complex' Web Componet (ie. a component that is itself made up of Web Components)?

## Prerequisites
In order to run this project, please ensure that both Node and npm are installed on your system.

## Installation
To install this project, as well as its dependencies, complete the following steps:
  - Download or clone the repository to your local file system.
  - Using the command line, navigate to the root of the repository.
  - Run `npm install`.

## Usage
To start this project, complete the following steps;
  - Using the command line, navigate to the root of the repository.
  - Run `npm start`.

This starts a local server, which listens on requests at `localhost:8080/`. With the server running, open the browser of your choice and navigate to the correct URL.

Use the navigation component (located on the left-hand side of the viewport) to add or remove refinements. Each time the selected refinements are updated, the products (located on the right-hand side of the viewport) will be updated.

## Documentation
Currently, this project does not include any external documentation.

For an overview of the project's evolution, please consult the CHANGELOG.
