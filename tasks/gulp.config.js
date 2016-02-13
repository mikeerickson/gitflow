// TASK CONFIGURATION
// task configuration only, use ./config for application configuration

"use strict";

module.exports = {

	scripts: {
		src: ['./index.js','src/**/*.js']
	},

	lint: {
		src:  ['./index.js','src/**/*.js','tasks/**/*.js']
	},

	specs: {
		src: ['specs/**/*Spec.js'],
		openReport: true
	},

	clean: {
		src: ['logs', 'spec/logs','todo.*']
	}

};
