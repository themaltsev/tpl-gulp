// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


import gulp from 'gulp';
import browserSync from 'browser-sync';
import cleancss from 'gulp-clean-css';
import concat from 'gulp-concat';
import rename from 'gulp-rename';


import webpack from 'webpack-stream';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

import webpackDev from './webpack.dev.js';
import webpackProd from './webpack.prod.js';


gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: true,
        open: false,
        // online: false, // Work Offline Without Internet Connection
        // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
    })
});


gulp.task('styles', function () {

    return gulp.src('src/css/**/*.css')

        .pipe(concat('main.css'))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('src/assets'))
        .pipe(browserSync.stream())


});


gulp.task('code', () => {
    return gulp.src('src/*.html')
        .pipe(browserSync.reload({ stream: true }))
});


gulp.task('js', () => {
    return gulp
        .src(`src/js/app.js`)
        .pipe(webpack(webpackDev))
        .pipe(gulp.dest('./src/assets/'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('jsProd', () => {
    return gulp
        .src(`src/js/app.js`)
        .pipe(webpack(webpackProd))
        .pipe(gulp.dest('./src/assets/'))
        .pipe(browserSync.reload({ stream: true }));
});


gulp.task('watch', () => {
    gulp.watch('src/css/*.css', gulp.parallel('styles'));
    gulp.watch('src/sass/*.sass', gulp.parallel('styles'));
    gulp.watch(['src/js/*'], gulp.parallel('js'));
    gulp.watch('src/*.html', gulp.parallel('code'))
});


gulp.task('default', gulp.parallel('browser-sync', 'styles', 'watch', 'js',));
gulp.task('prod', gulp.parallel('browser-sync', 'styles', 'watch', 'jsProd',));
