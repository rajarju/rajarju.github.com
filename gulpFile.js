'use strict';
/**
 * gulp
 * Basic tasks for local dev
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


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
      'bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss',
      'styles/sass/*.scss'
    ])
    .pipe(sass())
    .pipe(gulp.dest('styles/css'))
    .pipe(browserSync.stream());
});


gulp.task('default', function(){

});
