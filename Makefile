.PHONY: brain-games brain-even lint test

install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint

