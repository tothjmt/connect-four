// Gulp!
var gulp = require('gulp');

// Plugins
var sass    = require('gulp-sass');
var clean  = require('gulp-clean-css');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
//var rename  = require('gulp-rename');
var include = require('gulp-include');


// SCSS
gulp.task('scss', function()
{

	return gulp.src([
		'resources/scss/connect.scss'
	])
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(concat('connect.css'))
		.pipe(clean())
		.pipe(gulp.dest('assets/'));

});

// Concat & Minify JS
gulp.task('js', function()
{
	return gulp.src([
		'resources/js/jquery-2.2.4.min.js',
		'resources/js/main.js'
	])
		.pipe(include())
		.pipe(concat('connect.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/'));
});



// Watch
gulp.task('watch', function()
{
	gulp.watch('resources/js/*.js', [ 'js' ]);
	gulp.watch('resources/scss/**/*.scss', [ 'scss' ]);
});

gulp.task('default', [ 'scss', 'js', 'watch' ]);