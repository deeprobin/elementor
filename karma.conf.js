module.exports = function( config ) {
	config.set( {
		basePath: './',
		frameworks: [ 'qunit', 'fixture' ],
		files: [
			{
				pattern: 'assets/js/**/*.js.map',
				included: false,
			},

			// Base Libraries.
			'../../../wp-includes/js/jquery/jquery.js',
			'../../../wp-includes/js/underscore.min.js',
			'../../../wp-includes/js/backbone.min.js',
			'assets/lib/backbone/backbone.marionette.min.js',
			'assets/lib/backbone/backbone.radio.min.js',

			// Elementor Common.
			'tests/qunit/setup-elementor-common.js',
			'assets/lib/dialog/dialog.js',
			'assets/js/common-modules.js',
			'assets/js/common.js',

			// Editor Fixtures.
			'tests/qunit/index.html',

			// Editor Tinymce.
			'tests/qunit/setup-tinymce.js',
			'../../../wp-includes/js/quicktags.min.js',

			// Editor Config.
			'tests/qunit/setup-editor.js',

			// Editor Dependencies.
			'../../../wp-includes/js/jquery/ui/core.min.js',
			'../../../wp-includes/js/jquery/ui/widget.min.js',
			'../../../wp-includes/js/jquery/ui/mouse.min.js',
			'../../../wp-includes/js/jquery/ui/resizable.min.js',
			'../../../wp-includes/js/jquery/ui/autocomplete.min.js',
			'../../../wp-includes/js/jquery/ui/sortable.min.js',
			'../../../wp-includes/js/jquery/ui/draggable.min.js',
			'assets/lib/tipsy/tipsy.min.js',
			'assets/lib/perfect-scrollbar/js/perfect-scrollbar.min.js',
			'assets/lib/nouislider/nouislider.min.js',
			'assets/lib/imagesloaded/imagesloaded.min.js',
			'assets/dev/js/editor/utils/jquery-serialize-object.js',
			'assets/dev/js/editor/utils/jquery-html5-dnd.js',
			'assets/lib/jquery-hover-intent/jquery-hover-intent.min.js',

			// Editor.
			'assets/js/editor-modules.js',
			'assets/js/editor-document.js',

			// Tests.
			'assets/js/qunit-tests.js',
		],
		preprocessors: {
			'tests/qunit/index.html': [ 'html2js' ],
			'assets/js/common-modules.js': [ 'coverage' ],
			'assets/js/common.js': [ 'coverage' ],
			'assets/js/editor-document.js': [ 'coverage' ],

		},
		reporters: [ 'progress' ],
		coverageIstanbulReporter: {
			reports: [ 'text' ],
			fixWebpackSourcePaths: true,
			// enforce percentage thresholds
			// anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
			thresholds: {
				emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
				// thresholds for all files
				global: {
					statements: 50, /* TEMP: initial value */
					lines: 55, /* TEMP: initial value */
					branches: 25, /* TEMP: initial value */
					functions: 55, /* TEMP: initial value */
				},
			},
		},
		// web server port
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		browsers: [ 'ChromeHeadless' ],
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// client configuration
		client: {
			clearContext: true,
			qunit: {
				showUI: false,
				testTimeout: 5000,
			},
		},
	} );
};
