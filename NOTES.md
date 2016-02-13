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

4. Test code using node




