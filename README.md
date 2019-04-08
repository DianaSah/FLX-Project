# Cookbook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Branching

Development on "develop" branch!
Each new feature should reside in its own branch, which can be pushed to the central repository. But, instead of branching off of `master`, feature branches use `develop` as their parent branch. When a feature is complete, it gets merged back into develop. 
Features should never interact directly with master!
The name of features branches should be: `feature/...`

1) Check on which branch you are rigth now:
`git branch`
2) Change your branch to `develop`:
`git checkout develop`
3) Creating a feature branch:
`git checkout -b feature_branch`
4) Continue your work and use Git like you normally would.
5) When you’re done with the development work on the feature, the next step is to merge the feature_branch into `develop`.
`git checkout develop
git merge feature_branch`

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
