// BABELIFY TASK
// =============================================================================

import gulp    from 'gulp'
import plumber from 'gulp-plumber'
import msg     from 'gulp-messenger'
import babel   from 'gulp-babel'
import config  from './gulp.config'
import uglify  from 'gulp-uglify'

msg.init({showPipeFile: false})

gulp.task('babelify', () => {
	return gulp.src(config.scripts.src)
		.pipe(plumber({
			errorHandler: function(err) {
				if (!err.errno === -17) {
					msg.error(err)
				}
				this.emit('end')
			}
		}))
		.pipe(babel({ presets: ['es2015'] }))
		.pipe(uglify())
		.pipe(gulp.dest(config.build.dist))
		.pipe(msg.flush.note('*** Transpiling Scripts [babel6]: ' + config.scripts.src));
});

gulp.task('transpile', ['babelify']);
