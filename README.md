# Cypress Starter Kit

ErgoServ's Starter Kit for [Cypress](https://www.cypress.io/) End-to-End testing.

1. Download and extract Starter Kit https://github.com/ergoserv/cypress-starter-kit
2. Copy Starter Kit files to the needed folder (including hidden files like `.gitignore`!)
3. Update `README.md` file (remove `Cypress Starter Kit` block, rename project)
4. Setup and run

---

# ProjectName Tests

Cypress testing suite for ProjectName project.


## Setup

1. Install Node

2. Install https://dotenvx.com/

3. Run setup script
```shell
bin/setup
```

4. Customize `cypress.env.json` and `/config/targets/.env.*` as needed.


## Config

- `cypress.config.js` - main config. Section `env` contains all env vars with default values.
- `cypress.env.json` - env config for local development and run on local target.
- `config/targets/.env.*` - testing target configs.


## Run & Open Cypress

```shell
bin/run
npx cypress run

bin/open
npx cypress open
```

```
bin/run-staging
bin/run-production

bin/open-staging
bin/open-production
```

## Development

- Add new env vars to `cypress.config.js` with default values for the reference.
- Always run code style check: `bin/eslint`

------

[ErgoServ](https://www.ergoserv.com)
