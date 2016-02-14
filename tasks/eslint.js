// ESLINT TASK
// =============================================================================

import gulp    from 'gulp'
import plumber from 'gulp-plumber'
import msg     from 'gulp-messenger'
import eslint  from 'gulp-eslint'
import config  from './gulp.config'

msg.init({showPipeFile: false, timestamp: true})

const scripts = [].concat(config.tasks.src, config.scripts.src)

gulp.task('eslint', () => {
	return gulp.src(scripts)
		.pipe(plumber({
			errorHandler: function(err) {
				msg.error(err)
				this.emit('end')
			}
		}))
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(msg.flush.note('*** Linting Scripts [babel-eslint]: ' + config.lint.src));
});

gulp.task('lint', ['eslint']);

