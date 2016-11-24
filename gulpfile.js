'use-strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var navegador = require('browser-sync');

guld.task('mover', function(){
  gulp.src('./src/bower_components/bootstrap/dist/css/booststrap.min.css').pipe(gulp.dest('./dist/css'));
  gulp.src('./src/bower_components/bootstrap/dist/js/booststrap.min.js').pipe(gulp.dest('./dist/js'));
  gulp.src('./src/bower_components/jquery/dist/jquery/.min.js').pipe(gulp.dest('./dist/js'));
  gulp.src('./src/bower_components/bootstrap/dist/fonts/*.*').pipe(gulp.dest('./dist/fonts'));
  gulp.src('./src/img/*.*').pipe(gulp.dest('./dist/img'));
  
});

gulp.task('sass', function(){
  gulp.src('.src/sass/*.sass').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./dist/css'));
  
});

gulp.task('server', function(){
  var file = [
    '.dist/*.html',
    '.dist/css/*.css',
    '.dist/js/*.js'
  ];


navegador.init(files, {
  server: {
    baseDir: './dist/'
    }
  });
});

gulp.task('defaul', ['server'], function(){
  
  gulp.watch('./src/sass/*.sass',['sass']);
  gulp.watch('./src/img/*.*',['mover']);
});