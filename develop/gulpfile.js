const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass
gulp.task('sass', function() {
    return gulp.src(['develop/sass/*.scss'])
           .pipe(sass())
           .pipe(gulp.dest('zmp/include/style'))
           .pipe(browserSync.stream());
});

// Watch & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: 'zmp'
    });

    gulp.watch(['develop/sass/*.scss'], ['sass']);
    gulp.watch(['zmp/*.html']).on('change', browserSync.reload);
});

// Default
gulp.task('default', ['serve']);