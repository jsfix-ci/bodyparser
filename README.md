<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [AdonisJs BodyParser](#adonisjs-bodyparser)
  - [Features](#features)
  - [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<div align="center">
  <img src="https://res.cloudinary.com/adonisjs/image/upload/q_100/v1558612869/adonis-readme_zscycu.jpg" width="600px">
</div>

# AdonisJs BodyParser
> Bodyparser middleware to AdonisJs

[![circleci-image]][circleci-url] [![npm-image]][npm-url] ![](https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript)

The BodyParser middleware parses the incoming HTTP requests body and files, so that you can access them using the `request` instance. The module is written specifically to work with AdonisJs only.

## Features
1. Support for `multipart/form-data`, `application/x-www-form-urlencoded` as well raw HTTP requests.
2. Extensive support for JSON request body including `application/vnd.api+json`, `application/json-patch+json`, `application/csp-report` and `application/json` content type.
3. Exposes API to stream file uploads without writing to the `tmp` directory.

## Usage
Install the addon using `adonis cli` as follows:

```sh
adonis install @adonisjs/bodyparser
```

The command will create the `config/bodyparser.ts` config file. Also, you can manually copy the [config from here](config/index.ts).


[circleci-image]: https://img.shields.io/circleci/project/github/adonisjs/adonis-bodyparser/master.svg?style=for-the-badge&logo=appveyor
[circleci-url]: https://circleci.com/gh/adonisjs/adonis-bodyparser "circleci"

[npm-image]: https://img.shields.io/npm/v/@adonisjs/bodyparser.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@adonisjs/bodyparser "npm"
