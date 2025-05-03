const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function watching() {
	watch('src/scss/base/**/*', stylesToBase);
	watch(['src/scss/**/*', '!src/scss/base/**/*'], styles);
	watch('src/js/*.*', scripts);
	watch('src/images/**/*', images);
}

function stylesToBase() {
	return src('src/scss/base/base.scss')
		.pipe(sass())
		.pipe(concat('base.css'))
		.pipe(dest('assets/'));
}

function styles() {
	return src([
		'src/scss/libs/**/*',
		'src/scss/components/**/*.scss',
		'src/scss/sections/**/*.scss',
	])
		.pipe(sass())
		.pipe(dest('assets/'));
}

function scripts() {
	return src(['src/js/libs/*', 'src/js/*.*']).pipe(dest('assets/'));
}

function images() {
	return src('src/images/**/*').pipe(dest('assets/'));
}

exports.stylesToBase = stylesToBase;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;

exports.build = series(stylesToBase, styles, scripts, images);
exports.default = parallel(stylesToBase, styles, scripts, images, watching);
