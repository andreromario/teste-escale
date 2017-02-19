var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var reload = browserSync.reload;
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
var cssComb = require('gulp-csscomb');
var cmq = require('gulp-merge-media-queries');
var cleanCss = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pug = require('gulp-pug');
var minifyHtml = require('gulp-minify-html');
var imageMin = require('gulp-imagemin');
var cache = require('gulp-cache');
var gutil = require('gulp-util');

//LINK DA DIST
var proxyLink = "http://localhost/~andreromario/teste-escale/dist/";

gulp.task('sass',function(){
    gulp.src(['src/sass/**/*.{scss,sass}'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(cssComb())
        .pipe(cmq({log:true}))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('js',function(){
    var sourceFolder = 'src/js/';

    var jquery = sourceFolder + 'jquery.js';
    var main = sourceFolder + 'main.js';

    gulp.src([jquery,main])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(jshint())
          .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('pug',function(){
    gulp.src(['src/*.pug'])
        .pipe(plumber())
        .pipe(pug())
        .pipe(minifyHtml())
        .pipe(gulp.dest('dist'))
});

gulp.task('image',function(){
    gulp.src(['src/images/**/*'])
        .pipe(plumber())
        .pipe(cache(imageMin()))
        .pipe(gulp.dest('dist/images/'))
});

gulp.task('reload', function(){
    reload();
});

gulp.task('watch', function(){
    browserSync.init({
        proxy: proxyLink
    });
    
    gulp.watch('src/**/*.pug',['pug']);
    gulp.watch('src/sass/**/*.{scss,sass}',['sass']);
    gulp.watch('src/js/**/*.js',['js']);
    gulp.watch('src/images/**/*',['image']);

    gulp.watch('dist/images/**/*',['reload']);
    gulp.watch('dist/css/**/*.css',['reload']);
    gulp.watch('dist/js/**/*.js',['reload']);
    gulp.watch('dist/**/*.html',['reload']);
});

gulp.task('default',['watch']);