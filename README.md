### Hexlet tests and linter status:
[![Actions Status](https://github.com/faciledictu/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/faciledictu/frontend-project-lvl1/actions)

### Code Climate
[![Maintainability](https://api.codeclimate.com/v1/badges/4d9a59dba2e77295783e/maintainability)](https://codeclimate.com/github/faciledictu/frontend-project-lvl1/maintainability)

# Installation
Cloning storage and installing dependencies
```
git clone git@github.com:faciledictu/frontend-project-lvl1.git

cd frontend-project-lvl1.git

make install
```

You can also run Brain Games from the shell like other programs. This command will create symlinks to bins in the global bin folder
```
make link
```

[![asciicast](https://asciinema.org/a/500856.svg)](https://asciinema.org/a/500856)

# Usage

To start playing use
```
make <game-name>
```
If you have created link via `make link`, just run a game by its name
```
<game-name>
```

### brain-even
[![asciicast](https://asciinema.org/a/500864.svg)](https://asciinema.org/a/500864)

### brain-calc
[![asciicast](https://asciinema.org/a/501039.svg)](https://asciinema.org/a/501039)

### brain-gcd
[![asciicast](https://asciinema.org/a/501121.svg)](https://asciinema.org/a/501121)

### brain-progression
[![asciicast](https://asciinema.org/a/501139.svg)](https://asciinema.org/a/501139)

### brain-prime
[![asciicast](https://asciinema.org/a/501151.svg)](https://asciinema.org/a/501151)

# Settings
You can adjust difficulty level and change number of rounds by editing `settings.js`.

Edit `messages.js` to change displayed messages.