var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('default', function() {
  // do nothing
});

gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('watch:sass', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
});
