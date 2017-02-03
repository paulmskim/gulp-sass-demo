var gulp = require('gulp'),
    sass = require('gulp-sass'),
    importer = require('node-sass-globbing');

var sass_config = {
  style: 'expanded',
  importer: importer,
  includePaths: [
    'node_modules/breakpoint-sass/stylesheets/',
    'node_modules/compass-mixins/lib/'
  ]
};

gulp.task('default', function() {
  // do nothing
});

gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass(sass_config))
    .pipe(gulp.dest('css'));
});

gulp.task('watch:sass', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
});
