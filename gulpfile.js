const gulp = require('gulp');
const browserSync = require('browser-sync').create();
//const concat = require("gulp-concat");

gulp.task('browserSync', function() {
	browserSync.init({
	  server: {
		baseDir: "webgame", // 서버에 띄울 폴더 위치 지정 
		directory: true
	  }
	});
	gulp.watch("webgame/*").on("change", browserSync.reload);
		// src 안의 파일들을 감시하고 있다가, 내용이 변동되면 재실행 
});
  
gulp.task(
	"default",
	gulp.parallel("browserSync") 
);
  