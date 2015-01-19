'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var FrontendcoreGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the Frontendcore generator'));

        var prompts = [
            {
                name: 'projectName',
                message: 'What is the name of your project?',
                default: 'myProject'
            },
            {
                name: 'versionName',
                message: 'What is the version of your project?',
                default: '1.0.0'
            },
            {
                name: 'userName',
                message: 'What is your name?',
                default: 'anonymous'
            },
            {
                name: 'userMail',
                message: 'What is your mail?',
                default: 'anonymous@anonymous.com'
            },
            {
                name: 'webUrl',
                message: 'What is the url of your site?',
                default: 'http://www.anonymous.com'
            }

        ];

        this.prompt(prompts, function (props) {
            this.projectName = props.projectName;
            this.versionName = props.versionName;
            this.userName = props.userName;
            this.userMail = props.userMail;
            this.webUrl = props.webUrl;

            done();
        }.bind(this));
    },

    app: function () {
        this.directory('css','css');
        this.directory('fonts','fonts');
        this.directory('js','js');
        this.template('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');
        this.template('_gruntfile.js', 'gruntfile.js');
        this.template('_.bowerrc', '.bowerrc');
    },

    projectfiles: function () {
       // this.copy('editorconfig', '.editorconfig');
        //this.copy('jshintrc', '.jshintrc');
    }
});

module.exports = FrontendcoreGenerator;
