const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

// * pipeline
gulp.src('index.css')
    .pipe(autoprefixer({
        browsers: ['since 2010'], 
        cascade: false
    }))
    .pipe(gulp.dest('dist'))