# stylelint-config-versett

[![Build Status](https://travis-ci.com/versett/stylelint-config-versett.svg?token=V1x7Y8ZXchNswxYZP5ko&branch=master)](https://travis-ci.com/versett/style-lint-versett)

This config will help us maintain our codestyling code to be cleaner and consistent among different projects.
Please read the guidlines below for both usage and development.
You can find more info on eslint [here](https://github.com/stylelint/stylelint).


### Installation

For using this configurations you have to add this repository to your `package.json` file which you can do by running the following command:
```
yarn add --dev @versett/stylelint-config-versett
or
npm install --save-dev @versett/stylelint-config-versett
```
In order for this command to work you have to login to Versett organization on npm.


### Configuration
stylelint works with a config file which you can obtain more info from [here](https://github.com/stylelint/stylelint).
In order to setup your project you should create a `.stylelint.json` file or any other acceptable config file for stylelint. but here we use the json format. Here is a confing file:

```
{
  "extends": "stylelint-plugin-versett"
  "rules": {}
}
```

by using this syntax in `extends` you can import the configuration you need.

In `rules` section you can override rules and turn them on or off or add new rules from new plugins to activate them. If you want to use additional plugins you have to add them in `extends`.

## Development

To get started on development run these commands:
```
$ nvm use
$ yarn
```
For testing purposes you can use `yarn link` or `npm link`:
```
$ cd stylelint-config-versett
$ yarn link
```
then
```
$ cd project
$ yarn link @versett/stylelint-config-versett
```

After that, a symbolic link is added to `node_modules` of the plugin directory.

### References

There are multiple styline plugins we have used which are listed below.

* [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
* [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
* [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)

please refer to their repos for rules and configurations.

## Contributing

Please read this [Quipt Documentation](https://versett.quip.com/zyEcAZ0ZosJn/How-to-Contribute-Code) for details on our code of conduct, and the process for submitting pull requests.

## Versioning

Versioning is done automatically by `versett-devtools` when a branch is merged with master and our CI/CD runs.

## Authors

* **Soroush Karimi**
* **Mehran Dabestani**
* **Hanie Gharedaghi**

See also the list of [contributors](https://github.com/versett/stylelint-config-versett/contributors) who participated in this project.

## License

UNLICENSED

## Acknowledgments

* Thanks to all Versett superheroes!
