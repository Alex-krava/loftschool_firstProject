var gulp = require('gulp'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    concatCss = require('gulp-concat-css');
    minifyCss = require('gulp-minify-css');




gulp.task('css', function () {
  return gulp.src('app/style/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(autoprefixer({browsers: ['last 10 versions']}))
    .pipe(concatCss("style.css"))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('app/css'))
});

// Сервер
gulp.task('server', function () {  
  browserSync({
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });
});


gulp.task('watch', function(){
    gulp.watch('app/style/*.css', ['css']);
    gulp.watch([
    'app/*.html',
    'app/js/*.js',
    'app/style/*.css'
  ]).on('change', browserSync.reload);
}
);

gulp.task('default', ['css', 'server', 'watch']);