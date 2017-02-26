const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const path = {
  maps: './maps/',
  css: './assets/css/',
  sass: './assets/scss/*'
}

gulp.task('sass', function () {
  return gulp.src(path.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write(path.maps))
    .pipe(gulp.dest(path.css))
});

gulp.task('watch', function () {
  gulp.watch(path.sass, ['sass']);
});