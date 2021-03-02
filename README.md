Welcome to the NoNamePokemonGame github. This is a game that is based off of PokeIdle Extended (which in turn is based off of PokeIdle). This game is in extreme alpha stage so please do not expect much. Since the game is very early in development we are always looking for contributors in any capacity. Please be civil with each other and enjoy your time here. If you would like to join our discord to stay up to date with things https://discord.gg/6VmndrjPmK

## Developer Setup
You will need node installed, so that the `npm` command is available to use

Run `npm ci` to install the project dependencies

Run `npm start` to compile the sources in watch mode - any code changes will trigger a recompile and update the browser.

The local server will run on port 3000 by default, but should be configurable be setting the environment variable `NNPG_PORT` on your system (You won't need to do this unless you have something else running on port 3000)


## Releasing
This step should only need doing by the project maintainer.

The command `npm run build:gh-pages` can be run to compile all code in production mode,and output to the `docs` folder. Then commit the changes with git and push up to the master branch (or whatever branch gh-pages is set up to track).