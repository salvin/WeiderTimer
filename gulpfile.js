// Load plugins
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglifyjs'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');

// Styles
gulp.task('styles', function() {
  return gulp.src(['css/bootstrap.min.css','css/bootstrap-responsive.min.css','css/main.css'])
    .pipe(concat('allCss.css'))	
    .pipe(minifycss({keepBreaks:true}))
    .pipe(gulp.dest('./dist/css/'));

});

// Scripts
gulp.task('scripts', function() {
    return gulp.src(['js/vendor/bootstrap.min.js',
                 'js/vendor/buzz.js',
                 'js/core.js',
                 'js/extensions/**/*.js',
                 'js/Sandbox.js',
                 'js/appCore.js',
                 'js/weider/extensions/**/*.js',
                 'js/weider/modules/**/*.js',
                 'js/bootstrap.js',
                 'js/main.js'
       ])
    .pipe(concat('allJs.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify('app.min.js',{outSourceMap: true}))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['dist/css', 'dist/scripts'], {read: false})
    .pipe(clean());
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts');
});

// Watch
gulp.task('watch', function() {

  // Watch .js files
  gulp.watch('js/**/*.js', ['scripts']);

  // Create LiveReload server
  var server = livereload();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', function(file) {
    server.changed(file.path);
  });

});
