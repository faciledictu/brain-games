install: # Install dependencies
	npm ci

link: # Create symlinks to bins in the global bin folder
	npm link

brain-games: # Test start
	node bin/brain-games.js

brain-even: # Start Even game
	node bin/brain-even.js

brain-even: # Start Calc game
	node bin/brain-calc.js

brain-even: # Start GCD game
	node bin/brain-gcd.js

brain-even: # Start Progression game
	node bin/brain-even.js

brain-even: # Start Prime game
	node bin/brain-primr.js

lint: # Check files with eslint
	npx eslint .

publish: # Try to publish package (this actually DONT'T publish package)
	npm publish --dry-run
