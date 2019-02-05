# stylelint-config-versett

[![Build Status](https://travis-ci.com/versett/stylelint-config-versett.svg?token=V1x7Y8ZXchNswxYZP5ko&branch=master)](https://travis-ci.com/versett/stylelint-config-versett)

This config will help us maintain our codestyling code to be cleaner and consistent among different projects.
Please read the guidlines below for both usage and development.
You can find more info on stylelint [here](https://github.com/stylelint/stylelint).


## Installation

```
yarn add --dev @versett/stylelint-config-versett
```
or
```
npm install --save-dev @versett/stylelint-config-versett
```

You must be logged in to you Versett npm account first using `npm login`.


## Configuration
stylelint works with a [config file](https://github.com/stylelint/stylelint).
Here is a sample config file (`.stylelintrc.json`)

```
{
  "extends": "@versett/stylelint-plugin-versett"
  "rules": {}
}
```

We strongly recommend against overriding the `rules` configured by this plugin. If you believe you have a good reason for overriding a rule, please create an issue on this repository and post it on the #developers channel on Slack. If the team agrees, we will change the rule in the plugin so all projects can benefit from it.

## Development

To get started on development run these commands:
```
nvm use
yarn
```
For testing purposes you can use `yarn link` (or `npm link`):
```
cd stylelint-config-versett
yarn link
```
then
```
cd project
yarn link @versett/stylelint-config-versett
```

After that, a symbolic link is added to `node_modules` of the plugin directory.

### References

There are multiple styline plugins we have used as reference which are listed below.

* [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
* [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
* [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)

please refer to their repos for rules and configurations.

### Contributing

Please read this [Quip Documentation](https://versett.quip.com/zyEcAZ0ZosJn/How-to-Contribute-Code) for details on our code of conduct, and the process for submitting pull requests.

## Versioning

Versioning is done automatically by `versett-devtools` when a branch is merged with master and our CI/CD runs.

## Need help?

Post on the #developers channel on Slack or create an issue.

## Authors

* **Soroush Karimi**
* **Mehran Dabestani**
* **Hanie Gharedaghi**

## Acknowledgments

* Thanks to all Versett superheroes!
