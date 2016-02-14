// WATCH TASK
// =============================================================================

import gulp   from 'gulp'
import config from './gulp.config'

const watchFiles = [].concat(config.scripts.src, config.lint.src, config.tasks.src)
const testFiles  = [].concat(watchFiles, config.specs.src)

// watch all tasks (currently eslint and mocha)
gulp.task('watch', ['eslint', 'mocha'], () => {
	gulp.watch(watchFiles, ['eslint'])
	gulp.watch(testFiles, ['mocha'])
});

// only watch tests (during test development)
gulp.task('watch:tests', () =>{
	gulp.watch(testFiles, ['mocha'])
})

// we will add some babelify later, but for now we just want to keep our code clean
gulp.task('watch:scripts', () => {
	gulp.watch(watchFiles, ['eslint'])
})
