module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            dist: {
                files: {
                    'dist/jquery.hoverdir.min.js': [
                        'js/jquery.hoverdir.js'
                    ]
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            dist: {
                files: {
                    'dist/hoverdir.min.css': [
                        'css/style.css'
                    ],
                    'dist/hoverdir-nojs.min.css': [
                        'css/style.css',
                        'css/noJS.css'
                    ]
                }
            }
        },

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        src: 'js/*',
                        dest: 'dist/',
                        filter: 'isFile',
                        flatten: true
                    },
                    {
                        src: 'css/style.css',
                        dest: 'dist/hoverdir.css',
                    }
                ],
            }
        },

        concat: {
            options: {
                separator: ' ',
            },
            dist: {
                dest: 'dist/hoverdir-nojs.css',
                src: [
                    'css/style.css',
                    'css/noJS.css'
                ]
            },
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'copy', 'concat']);

};
