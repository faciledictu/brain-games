### Hexlet tests and linter status:
[![Actions Status](https://github.com/faciledictu/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/faciledictu/frontend-project-lvl1/actions)

### Code Climate
[![Maintainability](https://api.codeclimate.com/v1/badges/4d9a59dba2e77295783e/maintainability)](https://codeclimate.com/github/faciledictu/frontend-project-lvl1/maintainability)

Brain Games is a set of console games to train for practising your math skills. To win, you have to give the right answer three times.

# Installation
Cloning storage and installing dependencies
```
git clone git@github.com:faciledictu/frontend-project-lvl1.git

cd frontend-project-lvl1.git

make install
```

You can also run Brain Games from the shell like other programs. This command will create symlinks to bins in the global bin folder.
```
make link
```

[![asciicast](https://asciinema.org/a/500856.svg)](https://asciinema.org/a/500856)

# Usage

To start playing use
```
make <game-name>
```
If you have created link via `make link`, just run a game by its name.
```
<game-name>
```

### brain-even
Answer 'yes' if you get an even number.
[![asciicast](https://asciinema.org/a/500864.svg)](https://asciinema.org/a/500864)

### brain-calc
Calculate in your mind the value of the expression shown.
[![asciicast](https://asciinema.org/a/501039.svg)](https://asciinema.org/a/501039)

### brain-gcd
Type the maximum number by which the two suggested numbers can be divided.
[![asciicast](https://asciinema.org/a/501121.svg)](https://asciinema.org/a/501121)

### brain-progression
Find a pattern in the row of numbers and write the missing one.
[![asciicast](https://asciinema.org/a/501139.svg)](https://asciinema.org/a/501139)

### brain-prime
If a number has only two divisors, it is prime. Answer 'yes' if the number you get is prime.
[![asciicast](https://asciinema.org/a/501151.svg)](https://asciinema.org/a/501151)
