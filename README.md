<p align="center">
  <img align="center" src="https://github.com/yarapolana/bootcamp-gostack/blob/master/assets/exports/github-challenge-cover_1.png" style="max-width:100%;" />
</p>

<h1 align="center>Challenge 01: Concepts of NodeJS</h1>

<p align="center">
  <img src="https://img.shields.io/badge/node-gray.svg" >
  <img src="https://img.shields.io/badge/express-gray.svg" >
  <img src="https://img.shields.io/badge/jest-gray.svg" >
  <img src="https://img.shields.io/github/license/yarapolana/concepts-of-node" >
  <a href="https://yarapolana.com">
   <img src="https://img.shields.io/badge/createdby-yarapolana-red.svg" >
  </a>
</p>

## Description

<p>This is the code challenge for <i>concepts of node</i> from Rocketseat's GoStack Bootcamp. Here you will find basic CRUD functionalities using express, and execute tests using jest.</p>

<br />

## How to use

```bash
  #  clone this repository
  git clone <link>

  #  install dependencies
  yarn

  #  start application
  yarn dev

  #  test away =)
  yarn test
```

<br/>

<h2>Available tests</h2>

| Test                                                            | Description                                                                                                                                                                                                                      | Status |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `should be able to create a new repository`                     | Should return the repository created in json format.                                                                                                                                                                             | ✅     |
| `should be able to list the repositories`                       | Should return an array of all repositories created.                                                                                                                                                                              | ✅     |
| `should be able to update repository`                           | Should allow only to update these fields **title, url and techs**.                                                                                                                                                               | ✅     |
| `should not be able to update a repository that does not exist` | Should validate if the repository with the id listed on the route params exists. If not throw an error with status `400`.                                                                                                        | ✅     |
| `should not be able to update repository likes manually`        | Should not allow the number of likes to be updated by user manualy, only increment the repository likes. Only the route should be responsible to increment the number of likes.                                                  | ✅     |
| `should be able to delete the repository`                       | Should allow only the repository with the id listed on the route params to be deleted and return an empty response with status `204`.                                                                                            | ✅     |
| `should not be able to delete a repository that does not exist` | Should validate if the repository with the id listed on the route params exists. Only existing repositories should be deleted. If it does not exist, throw an error with status `400`.                                           | ✅     |
| `should be able to give a like to the repository`               | Should allow only the repository with the id listed on the route params to be liked. All likes should be incremented with 1 in each request. Should return the repository liked with the number of likes updated in json format. | ✅     |
| `should not be able to like a repository that does not exist`   | Should validate if the repository with the id listed on the route params exists. Only existing repositories can be liked. If it does not exist, throw an error with status `400`.                                                | ✅     |
|                                                                 |                                                                                                                                                                                                                                  |        |

<br/>

<h2>Available routes</h2>

| Route                           | Body                  | Description                                                                                                                                             |
| ------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `POST - /repositories`          | `{title, url, techs}` | Should create a repository, with uuid() as id, and initialize likes with 0. Params should have these types **title:string, url:string, techs:string[]** |
| `GET - /repositories`           | -                     | Should list all repositories.                                                                                                                           |
| `PUT - /repositories/:id`       | `{title, url, techs}` | Should only update **title, url and techs** of the repository which id matches the id on the route params.                                              |
| `DELETE - /repositories/:id`    | -                     | Should delete the repository which id matches the id on the route params.                                                                               |
| `POST - /repositories/:id/like` | -                     | Should increment number of likes on the repository which id matches the id on the route params.                                                         |

<br />
<h2>Has this helped you?</h2>
<p>Please leave a 🌟 and show this developer some support 🥳.</p>

---

<h4> <a href="https://yarapolana.com"><img src="https://img.shields.io/badge/hire me-red.svg" ></a></h4>

---

### License:

This project is made available under the [MIT LICENSE](LICENSE.md).

### Authors:

<p>
  <a href="https://github.com/yarapolana">
    <img src="https://avatars0.githubusercontent.com/u/19730118?s=460&v=4" width="50" height="50">
  </a>
  <a href="https://dotcode.is">
    <img src="https://dotcode.is/images/logo_dark.svg" width="50" height="50">
  </a>
</p>
