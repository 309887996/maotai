const gulp = require('gulp');       //gulp包
const concat = require('gulp-concat');      //合并文件
const minifyHtml = require('gulp-minify-html');     //压缩html
const uglify = require('gulp-uglify');  //压缩js
const minifyCss = require('gulp-minify-css');  //压缩css
// const rename = require('gulp-rename')   //重命名
const connect = require('gulp-connect');    //浏览器自动刷新

gulp.task('concatCss',function(){        //合并css
    return gulp.src('./src/css/*.css')       //读取文件
    // .pipe(concat(''))   //通过流管道合并到一个css文件，main文件
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

gulp.task('concatJs',function(){     //合并js
    return gulp.src(['./src/js/**/*'])    //读取js文件
    // .pipe(concat('main.js'))     //合并文件取名为main.js
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());   
});

gulp.task('minifyHtml',function (){      //压缩html
    return gulp.src('./src/page/*.html')       //读取html文件
    .pipe(minifyHtml())      //压缩
    .pipe(gulp.dest('./dist/page'))
    .pipe(connect.reload());
});

gulp.task('uglifyJs',function(){        //压缩js
    return gulp.src('./dist/js/*.*')        
    .pipe(uglify())     //压缩
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('minifyCss',function (){     //压缩css
    return gulp.src('./dist/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('copyimg',function (){     //压缩css
    return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img'));
})

gulp.task('copyAll',function (){     //压缩css
    return gulp.src('./src/**/*')
    .pipe(gulp.dest('./dist'));
})

gulp.task('reload',function(done){
    connect.server({
        // root:'./dist',
        livereload:true,//自动更新
    });
    done();
});



gulp.task('watchs',function(){      //监视文件变化
    gulp.watch('./css/*.css',gulp.series('concatCss')); //监视css的变化
    gulp.watch('./js/*.js',gulp.series('concatJs'));  //监视js的变化
    gulp.watch('./*.html',gulp.series('minifyHtml'));   //监视html的变化
  

})


gulp.task('hh',gulp.parallel(        //执行bulid打包
    gulp.series('concatCss','minifyCss'),   //打包压缩的css
    gulp.series('concatJs'),     //打包压缩的js
       //打包压缩图片
    gulp.series('minifyHtml','copyimg')       //打包压缩html
    )
);


gulp.task('default',gulp.series('reload',"hh",'watchs'));        //自动刷新
