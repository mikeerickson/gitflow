import gulp from 'gulp';
import babel from 'gulp-babel'
import plumber from 'gulp-plumber';
import console from 'gulp-messenger';
import requireDir from 'require-dir'

// PRELOAD ALL TASKS
// =============================================================================
// you can execute individual tasks as `gulp <taskName>`
// WARNING: don't load recursively (omit `_disabled` tasks)

requireDir('./tasks', { recurse: false });

console.init({timestamp: false});

//console.log('\n');
//console.chalkline.green();
//console.log('\n');

