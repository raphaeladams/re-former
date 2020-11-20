# Getting started

Gestalt web apps are different from vanilla Rails apps in a few exciting ways:

- Rails backend with GraphQL API and React frontend 🛤📈☕️
- Shiny new application structure ✨
- A bunch of useful commands 🤖
- CI is configured and ready to roll 🚢🚀

## Application structure 🧩

There are some small differences in application structure compared to a vanilla Rails app.

Inside `app/`, you'll notice a `graphql` folder. This is where you define your GraphQL schema. GraphQL should be used instead of RESTful routing for all API calls.

A top-level `web` folder contains the implementation of the React frontend.

## What you get out of the box 💎

The generated app comes with several things configured and ready to run, such as the latest version of Ruby, Ruby on Rails backend, and a React frontend, connected by the GraphQL API. You now have to do very minimal setup to start developing your code.

Your app also comes with other features set up by default:

- _dev_: dev is set up just like you use it everywhere, with `dev test`, `dev server`, and `dev console`.
- _Type checking and linters_: Type checkers and linters follow the Shopify style guides. To simplify your life, `dev style` and `dev typecheck` are included. Not only that, but the code you get upon creation is already linted and type-checked, starting your app from a clean slate.
- _Dependabot_: Your dependencies are automatically checked and Dependabot will remind you to upgrade them when an update is available.
- _CI_: Your app is set up and configured for CI via Shopify Build. You _do_ have to manually [register a new pipeline](https://shopify-build.docs.shopify.io/getting_started/registering_pipelines/#manually-registering-a-pipeline-on-buildkite).

All you need to do is write code and ship it!

## Useful commands 🗣

Show the machine who’s in charge!

- `dev console` to access your Rails console in development
- `dev server` to run your app in development
- `dev style` for code linting with Rubocop, TypeScript, eslint, Prettier, and stylelint
- `dev test` to run your test suites
- `dev typecheck` for static type checking with Sorbet and eslint
