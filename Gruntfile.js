/*jslint node:true*/

'use strict';

module.exports = function (grunt) {
	
	require('time-grunt')(grunt);
	
	grunt.initConfig({
		
		uglify: {
			my_target: {
				files: {
					'js/chessboard.min.js': 'js/chessboard.js'
				}
			}
		},
		
		cssmin: {
			my_target: {
				src: 'css/chessboard.css',
				dest: 'css/chessboard.min.css'
			}
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('minify', ['uglify', 'cssmin']);
	
};