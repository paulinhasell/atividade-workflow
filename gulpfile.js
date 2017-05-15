var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

// task para o scss
gulp.task('scss', function() {
    return gulp.src('source/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

//tarefa para o html
gulp.task('html', function() {
  return gulp.src('source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

// tarefa para watch 
gulp.task('watch', function(){
	gulp.watch('source/scss/*.scss', ['scss']);
	gulp.watch('source/*.html', ['html']);
});


// chamar todas as tarefas
gulp.task('default', ['scss', 'html','watch']);