var gulp = require ('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function(){

//browser-sync is initialising here , we use
// baseDir to specify our main folder
		browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}		
	});
	//this is a watch function with two parameters 
	//first one is the file location 
	// second one is the task to start if there's any changes
	watch('./app/index.html', function(){
		browserSync.reload();
	});

	// watch for css file

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('injectCss');
	});
});

// [] any argument in between is a dependency 
//gulp will run the dependency first 
gulp.task('injectCss',['styles'], function() {
	return gulp.src('./app/temp/styles/style.css')
			   .pipe(browserSync.stream());

});
