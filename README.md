[![Tag][tag-shield]][tag-url]
[![CI][workflow-shield]][workflow-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
<!-- [![Contributors][contributors-shield]][contributors-url] -->

# Personal Efficiency Helper

[![Powered][powered-shield]][forthebadge-url] 
[![Build][build-shield]][forthebadge-url] 
[![Made][made-shield]][forthebadge-url]

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#design">Design Mockups</a></li>
    <li><a href="#getting_started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
      <ul>
        <li><a href="#scripts">Available Scripts</a></li>
      </ul>
    </li>
    <li><a href="#author">Author</a></li>
    <li><a href="#license">License</a></li>
  </ul>
</details>

## About <a name = "about"></a>

The assistant to improve your personal efficiency on the daily basis. Current application version contains concentration keeper, playlists for productive work, personal efficiency hacks, and recommendations. ToDo planner, habits tracker, and personal statistics are planned for the future development.

* Client: Typescript+React
* Server: Express.js, PostgreSQL


## Design Mockups <a name = "design"></a>

Current design mockups and UI palette is available in [Figma](https://www.figma.com/file/0D6TspleL2f30VaCTQGKsS/Personal-Efficiency-Helper?node-id=0%3A1).

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. <!--See [deployment](#deployment) for notes on how to deploy the project on a live system.-->

### Prerequisites <a name = "prerequisites"></a>

Download the project from GitHub

```bash
git clone https://github.com/mari1647iv/personal-efficiency-helper.git
```

Ensure you have a running PostgreSQL server

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib postgresql-client
sudo systemctl start postgesql.service
```

Install the necessary dependecies using `npm`

```npm
cd client
npm i
cd ../server
npm i
cd..
```

### Installation <a name = "installation"></a>

Create user and database for the application

```bash
sudo -iu posrgres
createuser --pwprompt pefuser
createdb -O pefuser pefdb
```
You can access the database from ```pefuser``` shell 
```bash
su - pefuser
psql pefdb
``` 
or from another OS username:
```bash
psql -d pefdb -h localhost -U pefuser -W
```

Run this script to start the server

```node
cd server
npm run ts-dev
```

Start the client application

```npm
cd client
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage <a name = "usage"></a>

### Available Scripts <a name = "scripts"></a>

In the client directory, you can run:

#### `npm start`

Runs the app in the development mode on port 3000.

The page will reload when you make changes. You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<!-- ### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app) -->

## Author <a name = "author"></a>

**Marina Ivanova. Frontend developer from Kazan, Russia**

- Github: [@mari1647iv](https://github.com/mari1647iv)
- Email: ima1647@outlook.com
- Telegram: [@mari1647iv](https://t.me/mari1647iv)
- CV: https://career.habr.com/mari1647iv/print.pdf

Project Link: https://github.com/mari1647iv/personal-efficiency-helper

## License <a name = "license"></a>

Distributed under the MIT License. See `LICENSE.md` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[workflow-shield]: https://img.shields.io/github/actions/workflow/status/mari1647iv/personal-efficiency-helper/node.js.yml?branch=main&style=for-the-badge
[workflow-url]: https://github.com/mari1647iv/personal-efficiency-helper/actions/workflows/node.js.yml
<!-- [contributors-shield]: https://img.shields.io/github/contributors/mari1647iv/personal-efficiency-helper.svg?style=for-the-badge
[contributors-url]: https://github.com/mari1647iv/personal-efficiency-helper/graphs/contributors -->
[issues-shield]: https://img.shields.io/github/issues/mari1647iv/personal-efficiency-helper.svg?style=for-the-badge
[issues-url]: https://github.com/mari1647iv/personal-efficiency-helper/issues
[license-shield]: https://img.shields.io/github/license/mari1647iv/personal-efficiency-helper.svg?color=orange&style=for-the-badge
[license-url]: https://github.com/mari1647iv/personal-efficiency-helper/blob/main/LICENSE
[tag-shield]: https://img.shields.io/github/v/tag/mari1647iv/personal-efficiency-helper?style=for-the-badge
[tag-url]: https://github.com/mari1647iv/personal-efficiency-helper/tags
[powered-shield]: https://forthebadge.com/images/badges/powered-by-coffee.svg
[build-shield]: https://forthebadge.com/images/badges/built-with-love.svg
[made-shield]: https://forthebadge.com/images/badges/made-with-typescript.svg?style=for-the-badge
[forthebadge-url]: https://forthebadge.com
