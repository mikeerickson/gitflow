# gitflow

### Overview
Does stuff with code

The following assumptions:

- node has already been installed
- git has already been installed

### Getting Started


#### Create git project

1. From website, create new project

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

#### Convert to ES6 (v0.1.0)

1. Install babel modules
   $ npm i -S babel-cli babel-core babel-loader babel-preset-es2015 babel-preset-stage-2

2. Add ./index which imports `babel-core/register` and `./src` files

3. Add `./src/index.js` which in turn loads rest of `./src` files

4. Modify `npm start` script to call `nodemon` instead of `node`

   ````
   "start": "nodemon index.js --debug --exec babel-node --presets es2015,stage-2"
   ````

#### Add ESLint (v0.1.0)

1. Add node modules
   ````
   $ npm i -D eslint babel-eslint eslint-loader eslint-plugin-nodeca
   ````

2. Add `./eslintrc` 

3. Update `package.json` adding `lint` script 
   ````
   ....
   "lint": "eslint . --ext .js --ext .es6 || true"
	 ....
   ````

4. Test linting
   ````
   $ npm run lint
   ````

5. We have been a bit "sloppy" so we need to clean our code and adjust `./eslintrc` to disable checks we are not concerned with

#### Add Gulp Workflow (v0.2.0)

We have chosen to use gulp as opposed to something like Webpack as I feel Webpack is overkill for a small node project and we just need some simple tasks. The rest of this project will be adding some other typical tasks (next we will be adding testing via Mocha and a new task for ESlint so we can apply both via watch)

1. Create `gulpfile.babel.js` (Babel supported gulpfile, allows use of ES6 in tasks)

		````
		// GULPFILE.BABEL TASK
		// =============================================================================
		
		import console from 'gulp-messenger';
		import requireDir from 'require-dir'
		
		// PRELOAD ALL TASKS
		// =============================================================================
		// you can execute individual tasks as `gulp <taskName>`
		// WARNING: don't load recursively (omit `_disabled` tasks)
		
		requireDir('./tasks', { recurse: false });
		
		console.init({timestamp: false});
		````
2. Create `tasks` folder (at root level)

   $ md tasks

3. Create simple gulp ES6 tasks to make sure all is working

   ````
   import gulp from 'gulp'

   gulp.task('sample', () => {
		 console.log('Test Gulp Task')
	 })
   ````

4. Fire gulp to test our `sample` tasks

   $ gulp sample

   ````
   [15:45:10] Requiring external module babel-core/register
	 [15:45:11] Using gulpfile ~/Documents/Projects/gitflow/gulpfile.babel.js
	 [15:45:11] Starting 'sample'...
   Test Gulp Task
	 [15:45:11] Finished 'sample' after 124 μs
  ````

#### Add Mocha Tests (v0.3.0)

1. Install node modules
   ````
   $ npm i -D chai mocha mocha-unfunk-reporter

2. Create `spec` folder

   $ md specs && cd specs

3. Create Sample Spec

   ````
		import chai from 'chai'
		
		let expect = chai.expect
		let should = chai.should
		
		
		describe('HelloWorld Spec', () => {
			it('should pass simple test, just want to see some green!', (done) => {
				expect(true).to.be.true
				done()
			})
		})
   ````

4. Execute `mocha` gulp task

   ````
   $ gulp mocha

		-> running 1 suite
		
		HelloWorld Spec
		should pass simple test, just want to see some green!.. ok
		
		-> passed 1 of 1 test (9ms)
   ````

#### Add ESLint Task (v0.4.0)

1. Add node modules

  ````
  $ npm i -D gulp-eslint gulp-plumber
  ````

2. Create `eslint` gulp task

   * See `./tasks/eslint.js` *
	
3. Run `eslint` tasks and see how we are doing (we will be adding a simple watcher next)	

   `````
   $ gulp eslint
   ````

#### Add Watch Tasks so we can have a nice development workflow

1. Create `watch` gulp task

   * See `./tasks/watch.js` *

#### Add Build Task (v0.5.0)

We are coming to the end of this series! The last thing we need to add to our workflow is a simple `Build` tasks which will perform the following

- Make sure all of our code is clean [ESLint Task]

- Make sure all of our code passes tests [Mocha Task]	

- Babelify our code so it will be in ES5 format (even though we can use ES6 with Node, this is fun exercise) [Babel Task]

- Bundle all of our code up into a single file and create distribution directory [Build Task]
  ./dist/app.js

- Mangle (Uglify) source and place in distribution directory [Build Task]
  ./dist/app.min.js

- Create Source Maps [Build Task]
  ./dist/app.map

1. Install node modules
   ````
   $ npm i -D babelify uglify run-sequence

#### Add Webpack (v0.6.0)

For those of you who wish to use webpack instead of gulp, this section will outline the steps required for add `weback` to our !project

1. Install webpack 
   ````
   $ npm i -D webpack babel-loader eslint-loader

2. Create webpack configuration file 
   
   * See ./webpack.config.js *
	
3. There are a few configuration points you may need to adjust (based on naming conventions, etc)

   I am using babel-loader and eslint-loader to execute during build process

		 ````
		module: {
			loaders: [
				{ test: /\.js$/, loader: 'babel-loader' },
				{ test: /\.js$/, loader: 'eslint-loader' }
			]
		}
		````
  In addition, the `entry` and `output` keys in main section can be customized to suit your needs
		````
		  entry: path.join(__dirname, 'index.js'),
			output: {
			filename: path.join(__dirname, 'dist/app.bundle.js')
		},
		````

  - The `entry` key is our base index file (located at `./index.js`)
  - The `output` key defines where the bundled file will be created (this can be anything you wish)

4. Now you just need to execute `webpack` and all should be good to go!  It really is that simple (just need to have a solid webpack.config.js)
   ````
   $ webpack

5. If you wish to have webpack running while you are creating your project, just add the `-w` flag
   ````
   $ webpack -w 
   ````
   * Note: There are two npm scripts you can use instead of calling webpack directly (these are merely convenience scripts) *
	   ````
     - npm run build
     - npm run dev
     ````

