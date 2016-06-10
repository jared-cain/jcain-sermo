module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
            files: ["*.js", "src/js/*.js"],
            options: {
                esnext: true,
                globals: {
                    jQuery: true
                }
            }
        },
        less: {
            production: {
                files: {
                    "dist/css/style.css": ["src/less/*.less"]
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    "dist/css/style.css": ["src/css/*.css"]
                }
            }
        },
        autoprefixer: {
            single_file: {
                src: "dist/css/style.css",
                dest: "dist/css/style.css"
            }
        },
        browserify: {
			client: {
				src: ["app-client.js"],
				dest: "dist/js/bundle.js"
			}
		},
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask("css", ["less", "cssmin", "autoprefixer"]);
    grunt.registerTask("js", ["browserify"]);

    grunt.registerTask("default", ["jshint", "css", "js"]);

};
