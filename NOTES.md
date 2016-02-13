# gitflow

### Overview
Does stuff with code

The following assumptions:

- node has already been installed
- git has already been installed

### Getting Started


#### Create git project

1. From website, create new projects

2. Add initial files to establlish working directory

	````
	git add README.md
	git commit -m "Initial Commit"
	git remote add origin https://github.com/mikeerickson/gitflow.git
		git push -u origin master
	````

#### Create First Branch

After establishing default project, we are ready to start writing code. We will do this in a new branch (a common git workflow) which will contain all the changes we make but wont affect the master branch (that will be merged later)

1. Create branch
   `$ git checkout -b <branchName>`
   We will be using branch name `first-code-branch`

2. Create src directory and first source file
   `$ md src && cd src`
   `$ touch hello-world.js`

3. Add a simple console log to `hello-world.js`

4. update package.json, adding start script

	....
  "scripts": {
	  "start": "node src/hello-world.js"
  }
  ....

5. Test code using node
   $ node src/hello-world
   -- or --
   $ npm start

6. Assuming all is good, time to merge working branch with master

   `$ git checkout master`
   `$ git merge first-code-branch`

   At this point, the new code has been merged with our master branch, but not pushed yet

7. After successful merge (we dont have any merge conflicts), we will now push all code
   `$ git push origin master`

#### Convert to ES6

1. Install babel modules
   $ npm i -S babel-cli babel-core babel-loader babel-preset-es2015 babel-preset-stage-2

2. Add ./index which imports `babel-core/register` and `./src` files

3. Add `./src/index.js` which in turn loads rest of `./src` files

4. Modify `npm start` script to call `nodemon` instead of `node`

   ````
   "start": "nodemon index.js --debug --exec babel-node --presets es2015,stage-2"
   ````

