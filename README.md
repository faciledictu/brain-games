[![Actions Status](https://github.com/faciledictu/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/faciledictu/frontend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/4d9a59dba2e77295783e/maintainability)](https://codeclimate.com/github/faciledictu/frontend-project-lvl1/maintainability)

Brain Games is a set of console games to train for practising your math skills. To win, you have to give the right answer three times.

This is my very first studying project at Hexlet School.

# Installation

Cloning storage and installing dependencies

```bash
git clone git@github.com:faciledictu/frontend-project-lvl1.git

cd frontend-project-lvl1.git

make install
```

You can also run Brain Games from the shell like other programs. This command will create symlinks to bins in the global bin folder.

```bash
make link
```

# Usage

To start playing use

```bash
make <game-name>
```

If you have created link via `make link`, just run a game by its name.

```bash
<game-name>
```

### brain-even

Answer 'yes' if you get an even number.

### brain-calc

Calculate in your mind the value of the expression shown.

### brain-gcd

Type the maximum number by which the two suggested numbers can be divided.

### brain-progression

Find a pattern in the row of numbers and write the missing one.

### brain-prime

If a number has only two divisors, it is prime. Answer 'yes' if the number you get is prime.
