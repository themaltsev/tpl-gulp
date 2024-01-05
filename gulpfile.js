const syntax = 'sass'; // Syntax: sass or scss;

const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    browserSync = require('browser-sync'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    rsync = require('gulp-rsync'),
    webpackStream = require('webpack-stream');
    webpack = require('webpack');
    webpackDev = require('./webpack.dev.js'),
    webpackProd = require('./webpack.prod.js'),
    postcss = require('gulp-postcss'),

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        // notify: true,
        open: false,
        // online: false, // Work Offline Without Internet Connection
        // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
    })
});


gulp.task('styles', function() {
    return gulp.src('app/' + syntax + '/**/*.' + syntax + '')
        .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
        .pipe(autoprefixer())
        .pipe(gulp.dest('app/assets'))
        .pipe(browserSync.stream())
});



gulp.task('code', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});



gulp.task('js', function () {
    return gulp
        .src('./app/assets/scripts.min.js')
        .pipe(webpackStream(webpackDev,webpack))
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({ stream: true }));
    });


gulp.task('jsPr', function () {
    return gulp
        .src('./app/assets/scripts.min.js')
        .pipe(webpackStream(webpackProd,webpack))
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({ stream: true }));
    });



gulp.task('watch', function() {
    gulp.watch('app/css/*.css', gulp.parallel('styles'));
    gulp.watch('app/sass/*.sass', gulp.parallel('styles'));
    gulp.watch(['app/js/*/*/*.js'], gulp.parallel('js'));
    gulp.watch(['app/js/*/*.js'], gulp.parallel('js'));
    gulp.watch(['app/js/*.js'], gulp.parallel('js'));
    gulp.watch('app/*.html', gulp.parallel('code'))
});


gulp.task('watchProd', function() {
    gulp.watch('app/css/*.css', gulp.parallel('styles'));
    gulp.watch('app/sass/*.sass', gulp.parallel('styles'));
    gulp.watch(['app/js/*/*/*.js'], gulp.parallel('jsPr'));
    gulp.watch(['app/js/*/*.js'], gulp.parallel('jsPr'));
    gulp.watch(['app/js/*.js'], gulp.parallel('jsPr'));
    gulp.watch('app/*.html', gulp.parallel('code'))
});


gulp.task('default', gulp.parallel('browser-sync', 'styles', 'watch', 'js', ));
gulp.task('prod', gulp.parallel('browser-sync', 'styles', 'watchProd', 'jsPr'));



