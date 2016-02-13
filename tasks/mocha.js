// MOCHA TASK
// =============================================================================

import gulp    from 'gulp'
import msg     from 'gulp-messenger'
import mocha   from 'gulp-mocha'
import babel   from 'babel-core/register'
import config  from './gulp.config'

import pkgInfo from '../package.json'

msg.init({showPipeFile: false, timestamp: true})

gulp.task('mocha', function() {
	return gulp.src(config.specs.src, {read: false})
		.pipe(mocha({
			reporter:  'mocha-unfunk-reporter',
			compilers: { js: babel }
		}));
})

gulp.task('test', ['mocha'])
