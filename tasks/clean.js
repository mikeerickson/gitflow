// CLEAN TASK
// =============================================================================

import gulp   from 'gulp'
import config from './gulp.config'
import del    from 'del'
import fs     from 'fs'

gulp.task('clean:dist', () => {
	fs.exists(config.build.dist, (exists) => {
		if(exists) { del(config.build.dist) }
	})
})

gulp.task('clean:logs', () => {
	del(config.clean.logs)
})

gulp.task('clean:all', ['clean:dist','clean:logs'])
