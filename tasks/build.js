// BUILD TASK
// =============================================================================

/* eslint indent:0*/
/* eslint nodeca/indent:0*/

import gulp   from 'gulp'
import msg    from 'gulp-messenger'
import run    from 'run-sequence'

msg.init({showPipeFile: false})

gulp.task('build', () => {
  run('clean:dist', 'babelify')
})

