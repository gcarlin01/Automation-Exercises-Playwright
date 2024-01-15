# Automation Exercise Playwright

Playwright UI automation tests for https://www.automationexercise.com/

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm)

## Get Started

```bash
git clone git@github.com:gcarlin01/automation-exercises-playwright.git
cd automation-exercises-playwright

# use correct node version
nvm use

# install dependencies
npm install

# install playwright browsers
npx playwright install
```

## How to Run Tests

```bash
# run all tests in headless mode
npx playwright test

# run all tests in headed mode
npx playwright test --headed

```

## Other Commands

```bash
# display results
npx playwright show-report

# run formatter manually
npm run format
```
