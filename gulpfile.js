var browserify = require( 'browserify' ),
	buffer = require( 'vinyl-buffer' ),
	gulp = require( 'gulp' ),
	gutil = require( 'gulp-util' ),
	reactify = require( 'reactify' ),
	source = require( 'vinyl-source-stream' ),
	sourcemaps = require( 'gulp-sourcemaps' ),
	uglify = require( 'gulp-uglify' ),
	watchify = require( 'watchify' );

gulp.task( 'react', function() {
	return gulp.src( 'js/picard.jsx' )
		.pipe( react() )
		.pipe( gulp.dest( 'js' ) );
});

var bundler = browserify( './js/picard.jsx' );
bundler.transform( reactify );

gulp.task( 'js', bundle );
// bundler.on( 'update', bundle );

function bundle() {
	return bundler.bundle()
		// .on( 'error', gutil.log.bind( gutil, 'Browserify Error' ) )
		.pipe( source( 'picard.js' ) )
			// .pipe( buffer() )
			// .pipe( sourcemaps.init( { loadMaps: true } ) )
			// .pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( './js' ) );
}

// var getBundleName = function() {
// 	var version = require( './package.json' ).version;
// 	var name = require( './package.json' ).name;
// 	return version + '.' + name + '.' + 'min';
// };

// gulp.task( 'javascript', function() {
// 	var bundler = browserify({
// 		entries: ['./js/picard.js'],
// 		debug: true
// 	});

// 	var bundle = function() {
// 		return bundler
// 			.bundle()
// 			.pipe( source( getBundleName() + '.js' ) )
// 			.pipe( buffer() )
// 			.pipe( sourcemaps.init( { loadmaps: true } ) )
// 			.pipe( uglify() )
// 			.pipe( sourcemaps.write( './' ) )
// 			.pipe( gulp.dest( './js/build/' ) );
// 	};

// 	return bundle();
// });