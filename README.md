Welcome to the NoNamePokemonGame github. This is a game that is based off of PokeIdle Extended (which in turn is based off of PokeIdle). This game is in extreme alpha stage so please do not expect much. Since the game is very early in development we are always looking for contributors in any capacity. Please be civil with each other and enjoy your time here. If you would like to join our discord to stay up to date with things https://discord.gg/6VmndrjPmK

## Developer Setup
You will need node installed, so that the `npm` command is available to use

Run `npm ci` to install the project dependencies

Run `npm start` to compile the sources in watch mode - any code changes will trigger a recompile and update the browser.

The local server will run on port 3000 by default, but should be configurable be setting the environment variable `NNPG_PORT` on your system (You won't need to do this unless you have something else running on port 3000)


## Releasing
This step should only need doing by the project maintainer.

The command `npm run build:gh-pages` can be run to compile all code in production mode,and output to the `docs` folder. Then commit the changes with git and push up to the master branch (or whatever branch gh-pages is set up to track).

## Source Folder Structure
The following diagram is ordered by topic rather than alphabetically, to make finding what you want easier.
```c
src/
│
├── index.html        // Main html file
├── app.js            // js to attach Vue components to the html file
├── components/       // All Vue components
│   ├── App.vue       // Main component, attached to the html file
│   ├── *.vue         // Other components used in App.vue
│   ├── common/       // Generic components for use in many other components
│   └── modals/       // All modals, collected into /src/components/Modals.vue
│
├── index.scss                  // Main scss file, imports all other scss
├── styles/
│   ├── style.scss              // Styles for the main display
│   ├── bulma.custom.scss       // Imports for the specific Bulma features we want
│   └── bulma.overrides.scss    // Overrides for Bulma sass variables
│
├── resources/        // Files to be copied into the build output (mostly images)
│
├── index.js          // Main js file, where the game starts
├── modules/          // Javscript modules
│   └── *.js          // Various parts of the game, hopefully descriptively named
└── store/            // Vuex stores for the game state
    ├── index.js      // Imports all stores into a single store for use in App.vue
    ├── actions.js    // Root store actions
    ├── muttions.js   // Root store mutations
    └── modules/      // Individual store modules
```

## Frameworks and Development Tools
- [Webpack](https://webpack.js.org/) (Build process)
- [Vue 3](https://v3.vuejs.org/) (HTML templating and update management)
- [Vuex 4](https://next.vuex.vuejs.org/) (Vue state management)
- [Eslint](https://eslint.org/) (Enforces consistent code style, catches some errors)
- [Sass](https://sass-lang.com/documentation) (Styling, compiles to css)
- [Bulma](https://bulma.io/) (CSS framework, similar to bootstrap)
- [FontAwesome](https://fontawesome.com/) (Icons)

Planned:
- [Typescript](https://www.typescriptlang.org/) (Compile-time type-checking for javascript)
- [Babel](https://babeljs.io/) (Transpiles modern js for older browser support)
- [Postcss](https://postcss.org/) + [Autoprefix](https://github.com/postcss/autoprefixer) (Adds vendor prefixes to css, for older browser support)
- [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/) + [Sinon](https://sinonjs.org/) (Javscript testing framework)
