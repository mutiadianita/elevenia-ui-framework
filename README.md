# master-ui
React elevenia design system

## Documentation

[Click here](http://172.18.186.60:8080/)

## Add master-ui to your project
```sh
$ cd <your_project_path>
$ yarn add https://github.com/elevenia/master-ui.git#build
# or
$ npm install https://github.com/elevenia/master-ui.git#build
```

## Development mode

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/elevenia/master-ui.git && cd master-ui
$ yarn install
$ yarn start
```

## How to Build

```sh
$ cd {master-ui_folder}

# only first clone
$ git clone https://github.com/elevenia/master-ui.git#build

$ yarn build
$ cd build
$ git add .
$ git commit -m '{commit_message_build}'
$ git push origin build
```
## How to Publish to npm registry

1. Login into npm using elevenia account
```sh
$ npm login
# username: eleveniafe
# password: 3l3v3ni4123
# email: frontend.developer@xlplanet.co.id
```

2. Update master-ui version manually on package.json
3. Run `release` script
```sh
$ npm run release
```