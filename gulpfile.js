var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserify = require('gulp-browserify'),
 	concat = require('gulp-concat'),
 	less = require('gulp-less'),
 	connect = require('gulp-connect'),
 	watch = require('gulp-watch'),
 	path = require('path');

var outputDir;

env = 'development';

if (env==='development') {
  outputDir = 'builds/development/';
}

gulp.task('less', function() {
	return gulp.src('./styles/*.less')
		.pipe(concat('style.css'))
		.pipe(less())
		.pipe(gulp.dest('./styles'))
		.on('error', gutil.log)
		.pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch('./js/*.js');
  gulp.watch('./styles/*.less');
  gulp.watch('*.html');
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  })
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(connect.reload())
});

gulp.task('default', ['watch', 'html', 'less', 'connect']);