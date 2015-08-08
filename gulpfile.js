var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean');

    gulp.task('clean-css',function() {
    	return gulp.src('public/cssmin',{read:false})
    				.pipe(clean());    	
    });

    gulp.task('clean-js',function() {
    	return gulp.src('public/jsmin',{read:false})
    				.pipe(clean());    	
    });


    gulp.task('compress-mainjs', function() {
      return gulp.src(['public/js/constants.js','public/js/jquery.plugin.form2json.js','public/js/jquery.plugin.progressbarIs.js','public/js/main.js'])
      	.pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/jsmin'));
    });

    gulp.task('compress-slotjs', function() {
      return gulp.src(['public/js/constants.js','public/js/jquery.plugin.form2json.js','public/js/jquery.plugin.progressbarIs.js','public/js/slots.js'])
      	.pipe(concat('slots.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/jsmin'));
    });    

	gulp.task('minifycss',function() {
		return gulp.src('public/css/*.css')
					.pipe(minifycss())
					.pipe(gulp.dest('public/cssmin'));
	});

    gulp.task('default',['clean-css','clean-js'],function() {
			gulp.start('minifycss','compress-mainjs','compress-slotjs');
	});	

	