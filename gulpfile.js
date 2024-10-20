// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


import gulp from 'gulp';
import browserSync from 'browser-sync';
import cleancss from 'gulp-clean-css';
//import concat from 'gulp-concat';
import rename from 'gulp-rename';
import notify from 'gulp-notify'

import gulpEsbuild from  "gulp-esbuild"


import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

// import * as sass from 'sass'

//import webpack from 'webpack-stream';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

import babel from 'esbuild-plugin-babel'

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
    return gulp.src('src/sass/main.sass')
        .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
        // .pipe(concat('main.css')) // Если не нужна точка входа sass, а строчку выше удалить
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


// gulp.task('js', () => {
//     return gulp
//         .src(`src/js/app.js`)
//         .pipe(webpack(webpackDev),webpack(webpackDev))
//         .pipe(gulp.dest('./src/assets/'))
//         .pipe(browserSync.reload({ stream: true }));
        
// });

gulp.task('js', () => {
    return gulp
        .src(`src/js/app.js`)
        //.pipe(webpack(webpackProd),webpack(webpackProd
        .pipe(gulpEsbuild({
            outfile: "scripts.min.js",
            bundle: true,
            minify: true,
            sourcemap: true,
            logLevel: "info", // Provides detailed output statistics
            plugins: [babel()],
            //target: browserslistToEsbuild(), // --> ["chrome79", "edge92", "firefox91", "safari13.1"
        }))
        .pipe(gulp.dest('./src/assets/'))
        .pipe(browserSync.reload({ stream: true }))

});


gulp.task('watch', () => {
    gulp.watch('src/css/*.css', gulp.parallel('styles'));
    gulp.watch('src/sass/*.sass', gulp.parallel('styles'));
    gulp.watch(['src/js/*.js'], gulp.parallel('js'));
    gulp.watch('src/*.html', gulp.parallel('code'))
});


gulp.task('default', gulp.parallel('browser-sync', 'styles', 'watch', 'js',));