install: # Install dependencies
	npm ci

link: # Create symlinks to bins in the global bin folder
	npm link

brain-games: # Test start
	node bin/brain-games.js

brain-even: # Start Even game
	node bin/brain-even.js

lint: # Check files with eslint
	npx eslint .

publish: # Try to publish package (this actually DONT'T publish package)
	npm publish --dry-run
