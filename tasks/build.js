// BUILD TASK
// =============================================================================

import gulp   from 'gulp'
import msg    from 'gulp-messenger'
import config from './gulp.config'
import run    from 'run-sequence'

msg.init({showPipeFile: false})

gulp.task('build', () => {
  run('clean:dist', 'babelify')
})
