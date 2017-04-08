/**
 * Created by mlingolu on 9/25/16.
 */

const gulp =require('gulp');
const typescript =require('gulp-typescript');
const del =require('del');
var tscConfig = require('./tsconfig.json');

//Clean

gulp.task('clean',function () {
    return del('.build/**/*');
});

//Typescript compiler

gulp.task('compile',function () {
    return  gulp
        .src('public/app/**/*.ts')
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('.build/app'))

});

// copy dependencies
gulp.task('copy:libs', function() {
    return gulp
        .src([
            'public/node_modules/**/*',
            'public/typings/**/*'
        ])
        .pipe(gulp.dest('.build'))
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', function() {
    return gulp.src(['public/app/**/*', 'public/index.html', 'public/system.config.js', '!public/app/**/*.ts'], { base : './' })
        .pipe(gulp.dest('.build'))
});

gulp.task('build', ['compile']);
gulp.task('default', ['build']);