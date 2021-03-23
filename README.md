## Getting Started

Clone the Repo
Either run `yarn` or `npm install` to download all the dependencies

### `yarn test OR npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

run `yarn test --u` to update snapshots

### `yarn storybook OR npm run storybook`

Starts the Storybook server on localhost:6006

### `yarn build-storybook`

Builds the Storybook which can also be published

### `yarn build OR npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### Config vars

Put environment specific variables in the `.env` config files.

```
.env.qa
```

### Build Commands

```bash
# QA environment
# Update command in `build_qa` service from `docker-compose.ci.yml` when required
npm run build:qa

# Production environment
# Update command in `build_prod` service from `docker-compose.ci.yml` when required
npm run build:prod
```

#### CSS Styling (Emotions Styled Component / Design Units)

- For any CSS/Styling related work, please use styled components and If need to add more colors, please add it to the theme file
- Use Design Units, to use colors, fontSizes from the theme file itself.

#### Linting & Formatting

- Please consider using Prettier or TsLint in VsCode if possible
- Run `yarn lint` or `yarn lint --fix` to fix the linting issues in the folder to fix the issues

#### Testing Utils

- run `yarn test`: Once done working on the component, consider adding unit tests or snapshot tests for UI features
- run `yarn test-cov`: As you have added the tests, run this command to consider the test coverage for all the filenames
- run `yarn open-cov`: If the test-coverage is meeting 100% or the requirement, run this command, which will open a webpage highliting all the uncovered conditions in the feature

#### Use of Storybook UI

- run `yarn storybook`: this command will start the storybook server, and it will display the features if a story is added for a component, its mainly useful to showcase the standalone components which are not integrated

