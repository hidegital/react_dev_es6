var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var node = require('node-dev');
var source = require('vinyl-source-stream');

function errorHandler(err) {
    console.log('Error: ' + err.message);
}

// 自動ブラウザリロード
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Javascriptへのビルド
// ES6かつJSXなファイル群をbuild/bundle.jsへ変換する
gulp.task('build', function() {
    browserify({entries: ['./index.jsx']})
        .transform("babelify",{presets: ["react","es2015"]})
        .bundle()
        .on('error', errorHandler)
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({stream: true}));
});

// ローカルサーバーの起動
gulp.task('server', function() {
    //node(['./server.js']); //デフォルトのこれでは動かない
    node['./server.js'];
});

// ファイル監視
// ファイルに更新があったらビルドしてブラウザをリロードする
gulp.task('watch', function() {
    gulp.watch(['./index.jsx','./components/*.jsx'], ['build']);
    gulp.watch('./index.html', ['build']);
    gulp.watch('./components/*.js', ['build']);
});

// gulpコマンドで起動したときのデフォルトタスク
gulp.task('default', ['server','build', 'watch', 'browser-sync']);



