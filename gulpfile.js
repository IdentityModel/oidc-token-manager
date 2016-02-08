
var gulp = require('gulp')
	, del = require('del')
	, concat = require('gulp-concat')
	, uglify = require('gulp-uglify')
	, rename = require('gulp-rename')
;

gulp.task('clean', function(cb){
	del('dist', cb);
});

gulp.task('default', ['clean'], function () {
  return gulp.src([
		'bower_components/oidc-client/dist/oidc-client.js'
	  	,'lib/iife-start.js'
	    ,'oidc-token-manager.js'
	  	,'lib/iife-end.js'
	])
  	.pipe(concat('oidc-token-manager.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist'))
  ;
});