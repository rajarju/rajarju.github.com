'use strict';
/**
 * gulp
 * Basic tasks for local dev
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var debug       = require('gulp-debug');


// Static server
gulp.task('serve', function() {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('styles/sass/*.scss', ['sass']);
    gulp.watch(['*.html', '**/*.html']).on('change', browserSync.reload);
});


gulp.task('sass', function(){
  return gulp.src([
      'styles/sass/*.scss'
    ])
    .pipe(debug())
    .pipe(sass())
    .pipe(debug())
    .pipe(gulp.dest('styles/css'))
    .pipe(browserSync.stream());
});


gulp.task('default', function(){

});
