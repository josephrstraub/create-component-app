#!/usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let getTemplatesPath = (() => {
  var _ref = _asyncToGenerator(function* (templateName = null) {
    const templatesDirPath = config.templatesDirPath;

    const templates = (0, _utils.getTemplatesList)(templatesDirPath);

    return (0, _utils.getTemplate)(templates, templateName);
  });

  return function getTemplatesPath() {
    return _ref.apply(this, arguments);
  };
})();

let getTemplateOption = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    const templateArg = args.t || args.template;
    if (templateArg) {
      return getTemplatesPath(templateArg);
    }

    var _ref3 = yield _inquirer2.default.prompt([{
      type: 'confirm',
      name: 'template',
      message: 'Do you wanna choose a template',
      default: false
    }]);

    const template = _ref3.template;

    if (template) {
      return getTemplatesPath();
    }
    return null;
  });

  return function getTemplateOption() {
    return _ref2.apply(this, arguments);
  };
})();

let startTemplateGenerator = (() => {
  var _ref4 = _asyncToGenerator(function* (templatesPath) {
    try {
      const path = config.path;

      const requiredAnswers = yield _inquirer2.default.prompt([_questions.questions.name, path ? undefined : _questions.questions.path].filter(function (question) {
        return question;
      }));

      const results = _extends({}, config, requiredAnswers, {
        templatesPath
      });

      (0, _files.generateFilesFromTemplate)(results);
      _logger2.default.log('Your component is created!');
    } catch (error) {
      _logger2.default.error(error.message);
    }
  });

  return function startTemplateGenerator(_x) {
    return _ref4.apply(this, arguments);
  };
})();

/**
 * Start the process to generate component folder and files:
 * Filter question by config file
 * Get from the user the requirements to create the component folder and files
 * Generate files
 */


require('babel-polyfill');

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _files = require('./files');

var _utils = require('./utils');

var _questions = require('./questions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const args = _yargs2.default.argv;
const config = _extends({}, (0, _utils.getConfig)(args.config), args);

(() => {
  var _ref5 = _asyncToGenerator(function* () {
    try {
      const template = yield getTemplateOption();
      if (template) {
        return yield startTemplateGenerator(template);
      }

      const filteredQuestions = (0, _utils.generateQuestions)(config, _questions.questions);
      const requirements = yield _inquirer2.default.prompt(filteredQuestions);
      const results = _extends({}, config, requirements);

      if (results.type === 'custom') {
        const templateName = config.templateName;

        if (!templateName) {
          throw new Error('Please add a templateName to the config if using the custom type');
        }
        const templatesPath = yield getTemplatesPath(templateName);
        yield (0, _files.generateFilesFromCustom)(_extends({}, results, { templatesPath }));
      } else {
        yield (0, _files.generateFiles)(results);
      }
      _logger2.default.log('Your component is created!');
    } catch (e) {
      _logger2.default.error(e.message);
    }
    return null;
  });

  function start() {
    return _ref5.apply(this, arguments);
  }

  return start;
})()();

exports.default = { generateFiles: _files.generateFiles, generateFilesFromCustom: _files.generateFilesFromCustom };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZU5hbWUiLCJ0ZW1wbGF0ZXNEaXJQYXRoIiwiY29uZmlnIiwidGVtcGxhdGVzIiwiZ2V0VGVtcGxhdGVzUGF0aCIsInRlbXBsYXRlQXJnIiwiYXJncyIsInQiLCJ0ZW1wbGF0ZSIsInByb21wdCIsInR5cGUiLCJuYW1lIiwibWVzc2FnZSIsImRlZmF1bHQiLCJnZXRUZW1wbGF0ZU9wdGlvbiIsInRlbXBsYXRlc1BhdGgiLCJwYXRoIiwicmVxdWlyZWRBbnN3ZXJzIiwidW5kZWZpbmVkIiwiZmlsdGVyIiwicXVlc3Rpb24iLCJyZXN1bHRzIiwibG9nIiwiZXJyb3IiLCJzdGFydFRlbXBsYXRlR2VuZXJhdG9yIiwiYXJndiIsImZpbHRlcmVkUXVlc3Rpb25zIiwicmVxdWlyZW1lbnRzIiwiRXJyb3IiLCJlIiwic3RhcnQiLCJnZW5lcmF0ZUZpbGVzIiwiZ2VuZXJhdGVGaWxlc0Zyb21DdXN0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzsrQkEwQkEsV0FBZ0NBLGVBQWUsSUFBL0MsRUFBcUQ7QUFBQSxVQUMzQ0MsZ0JBRDJDLEdBQ3RCQyxNQURzQixDQUMzQ0QsZ0JBRDJDOztBQUVuRCxVQUFNRSxZQUFZLDZCQUFpQkYsZ0JBQWpCLENBQWxCOztBQUVBLFdBQU8sd0JBQVlFLFNBQVosRUFBdUJILFlBQXZCLENBQVA7QUFDRCxHOztrQkFMY0ksZ0I7Ozs7OztnQ0FPZixhQUFtQztBQUNqQyxVQUFNQyxjQUFjQyxLQUFLQyxDQUFMLElBQVVELEtBQUtFLFFBQW5DO0FBQ0EsUUFBSUgsV0FBSixFQUFpQjtBQUNmLGFBQU9ELGlCQUFpQkMsV0FBakIsQ0FBUDtBQUNEOztBQUpnQyxnQkFNWixNQUFNLG1CQUFTSSxNQUFULENBQWdCLENBQ3pDO0FBQ0VDLFlBQU0sU0FEUjtBQUVFQyxZQUFNLFVBRlI7QUFHRUMsZUFBUyxnQ0FIWDtBQUlFQyxlQUFTO0FBSlgsS0FEeUMsQ0FBaEIsQ0FOTTs7QUFBQSxVQU16QkwsUUFOeUIsU0FNekJBLFFBTnlCOztBQWNqQyxRQUFJQSxRQUFKLEVBQWM7QUFDWixhQUFPSixrQkFBUDtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7a0JBbEJjVSxpQjs7Ozs7O2dDQW9CZixXQUFzQ0MsYUFBdEMsRUFBcUQ7QUFDbkQsUUFBSTtBQUFBLFlBQ01DLElBRE4sR0FDZWQsTUFEZixDQUNNYyxJQUROOztBQUVGLFlBQU1DLGtCQUFrQixNQUFNLG1CQUFTUixNQUFULENBQzVCLENBQUMscUJBQVVFLElBQVgsRUFBaUJLLE9BQU9FLFNBQVAsR0FBbUIscUJBQVVGLElBQTlDLEVBQW9ERyxNQUFwRCxDQUNFO0FBQUEsZUFBWUMsUUFBWjtBQUFBLE9BREYsQ0FENEIsQ0FBOUI7O0FBTUEsWUFBTUMsdUJBQ0RuQixNQURDLEVBRURlLGVBRkM7QUFHSkY7QUFISSxRQUFOOztBQU1BLDRDQUEwQk0sT0FBMUI7QUFDQSx1QkFBT0MsR0FBUCxDQUFXLDRCQUFYO0FBQ0QsS0FoQkQsQ0FnQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsdUJBQU9BLEtBQVAsQ0FBYUEsTUFBTVgsT0FBbkI7QUFDRDtBQUNGLEc7O2tCQXBCY1ksc0I7Ozs7O0FBc0JmOzs7Ozs7OztBQTFFQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFLQTs7QUFPQTs7Ozs7O0FBRUEsTUFBTWxCLE9BQU8sZ0JBQU1tQixJQUFuQjtBQUNBLE1BQU12QixzQkFDRCxzQkFBVUksS0FBS0osTUFBZixDQURDLEVBRURJLElBRkMsQ0FBTjs7QUE0REM7QUFBQSw2Q0FBdUI7QUFDdEIsUUFBSTtBQUNGLFlBQU1FLFdBQVcsTUFBTU0sbUJBQXZCO0FBQ0EsVUFBSU4sUUFBSixFQUFjO0FBQ1osZUFBTyxNQUFNZ0IsdUJBQXVCaEIsUUFBdkIsQ0FBYjtBQUNEOztBQUVELFlBQU1rQixvQkFBb0IsOEJBQWtCeEIsTUFBbEIsdUJBQTFCO0FBQ0EsWUFBTXlCLGVBQWUsTUFBTSxtQkFBU2xCLE1BQVQsQ0FBZ0JpQixpQkFBaEIsQ0FBM0I7QUFDQSxZQUFNTCx1QkFDRG5CLE1BREMsRUFFRHlCLFlBRkMsQ0FBTjs7QUFLQSxVQUFJTixRQUFRWCxJQUFSLEtBQWlCLFFBQXJCLEVBQStCO0FBQUEsY0FDckJWLFlBRHFCLEdBQ0pFLE1BREksQ0FDckJGLFlBRHFCOztBQUU3QixZQUFJLENBQUNBLFlBQUwsRUFBbUI7QUFDakIsZ0JBQU0sSUFBSTRCLEtBQUosQ0FDSixrRUFESSxDQUFOO0FBR0Q7QUFDRCxjQUFNYixnQkFBZ0IsTUFBTVgsaUJBQWlCSixZQUFqQixDQUE1QjtBQUNBLGNBQU0saURBQTZCcUIsT0FBN0IsSUFBc0NOLGFBQXRDLElBQU47QUFDRCxPQVRELE1BU087QUFDTCxjQUFNLDBCQUFjTSxPQUFkLENBQU47QUFDRDtBQUNELHVCQUFPQyxHQUFQLENBQVcsNEJBQVg7QUFDRCxLQTFCRCxDQTBCRSxPQUFPTyxDQUFQLEVBQVU7QUFDVix1QkFBT04sS0FBUCxDQUFhTSxFQUFFakIsT0FBZjtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsR0EvQkE7O0FBQUEsV0FBZWtCLEtBQWY7QUFBQTtBQUFBOztBQUFBLFNBQWVBLEtBQWY7QUFBQSxNQUFEOztrQkFpQ2UsRUFBRUMsbUNBQUYsRUFBaUJDLHVEQUFqQixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuaW1wb3J0IGlucXVpcmVyIGZyb20gJ2lucXVpcmVyJ1xuaW1wb3J0IHlhcmdzIGZyb20gJ3lhcmdzJ1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJ1xuaW1wb3J0IHtcbiAgZ2VuZXJhdGVGaWxlcyxcbiAgZ2VuZXJhdGVGaWxlc0Zyb21UZW1wbGF0ZSxcbiAgZ2VuZXJhdGVGaWxlc0Zyb21DdXN0b20sXG59IGZyb20gJy4vZmlsZXMnXG5pbXBvcnQge1xuICBnZW5lcmF0ZVF1ZXN0aW9ucyxcbiAgZ2V0VGVtcGxhdGVzTGlzdCxcbiAgZ2V0Q29uZmlnLFxuICBnZXRUZW1wbGF0ZSxcbn0gZnJvbSAnLi91dGlscydcblxuaW1wb3J0IHsgcXVlc3Rpb25zIH0gZnJvbSAnLi9xdWVzdGlvbnMnXG5cbmNvbnN0IGFyZ3MgPSB5YXJncy5hcmd2XG5jb25zdCBjb25maWcgPSB7XG4gIC4uLmdldENvbmZpZyhhcmdzLmNvbmZpZyksXG4gIC4uLmFyZ3MsXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRlbXBsYXRlc1BhdGgodGVtcGxhdGVOYW1lID0gbnVsbCkge1xuICBjb25zdCB7IHRlbXBsYXRlc0RpclBhdGggfSA9IGNvbmZpZ1xuICBjb25zdCB0ZW1wbGF0ZXMgPSBnZXRUZW1wbGF0ZXNMaXN0KHRlbXBsYXRlc0RpclBhdGgpXG5cbiAgcmV0dXJuIGdldFRlbXBsYXRlKHRlbXBsYXRlcywgdGVtcGxhdGVOYW1lKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUZW1wbGF0ZU9wdGlvbigpIHtcbiAgY29uc3QgdGVtcGxhdGVBcmcgPSBhcmdzLnQgfHwgYXJncy50ZW1wbGF0ZVxuICBpZiAodGVtcGxhdGVBcmcpIHtcbiAgICByZXR1cm4gZ2V0VGVtcGxhdGVzUGF0aCh0ZW1wbGF0ZUFyZylcbiAgfVxuXG4gIGNvbnN0IHsgdGVtcGxhdGUgfSA9IGF3YWl0IGlucXVpcmVyLnByb21wdChbXG4gICAge1xuICAgICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgICAgbmFtZTogJ3RlbXBsYXRlJyxcbiAgICAgIG1lc3NhZ2U6ICdEbyB5b3Ugd2FubmEgY2hvb3NlIGEgdGVtcGxhdGUnLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgXSlcbiAgaWYgKHRlbXBsYXRlKSB7XG4gICAgcmV0dXJuIGdldFRlbXBsYXRlc1BhdGgoKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0VGVtcGxhdGVHZW5lcmF0b3IodGVtcGxhdGVzUGF0aCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gY29uZmlnXG4gICAgY29uc3QgcmVxdWlyZWRBbnN3ZXJzID0gYXdhaXQgaW5xdWlyZXIucHJvbXB0KFxuICAgICAgW3F1ZXN0aW9ucy5uYW1lLCBwYXRoID8gdW5kZWZpbmVkIDogcXVlc3Rpb25zLnBhdGhdLmZpbHRlcihcbiAgICAgICAgcXVlc3Rpb24gPT4gcXVlc3Rpb25cbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCByZXN1bHRzID0ge1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgLi4ucmVxdWlyZWRBbnN3ZXJzLFxuICAgICAgdGVtcGxhdGVzUGF0aCxcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUZpbGVzRnJvbVRlbXBsYXRlKHJlc3VsdHMpXG4gICAgTG9nZ2VyLmxvZygnWW91ciBjb21wb25lbnQgaXMgY3JlYXRlZCEnKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIExvZ2dlci5lcnJvcihlcnJvci5tZXNzYWdlKVxuICB9XG59XG5cbi8qKlxuICogU3RhcnQgdGhlIHByb2Nlc3MgdG8gZ2VuZXJhdGUgY29tcG9uZW50IGZvbGRlciBhbmQgZmlsZXM6XG4gKiBGaWx0ZXIgcXVlc3Rpb24gYnkgY29uZmlnIGZpbGVcbiAqIEdldCBmcm9tIHRoZSB1c2VyIHRoZSByZXF1aXJlbWVudHMgdG8gY3JlYXRlIHRoZSBjb21wb25lbnQgZm9sZGVyIGFuZCBmaWxlc1xuICogR2VuZXJhdGUgZmlsZXNcbiAqL1xuKGFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICB0cnkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgZ2V0VGVtcGxhdGVPcHRpb24oKVxuICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHN0YXJ0VGVtcGxhdGVHZW5lcmF0b3IodGVtcGxhdGUpXG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyZWRRdWVzdGlvbnMgPSBnZW5lcmF0ZVF1ZXN0aW9ucyhjb25maWcsIHF1ZXN0aW9ucylcbiAgICBjb25zdCByZXF1aXJlbWVudHMgPSBhd2FpdCBpbnF1aXJlci5wcm9tcHQoZmlsdGVyZWRRdWVzdGlvbnMpXG4gICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIC4uLnJlcXVpcmVtZW50cyxcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0cy50eXBlID09PSAnY3VzdG9tJykge1xuICAgICAgY29uc3QgeyB0ZW1wbGF0ZU5hbWUgfSA9IGNvbmZpZ1xuICAgICAgaWYgKCF0ZW1wbGF0ZU5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdQbGVhc2UgYWRkIGEgdGVtcGxhdGVOYW1lIHRvIHRoZSBjb25maWcgaWYgdXNpbmcgdGhlIGN1c3RvbSB0eXBlJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgICBjb25zdCB0ZW1wbGF0ZXNQYXRoID0gYXdhaXQgZ2V0VGVtcGxhdGVzUGF0aCh0ZW1wbGF0ZU5hbWUpXG4gICAgICBhd2FpdCBnZW5lcmF0ZUZpbGVzRnJvbUN1c3RvbSh7IC4uLnJlc3VsdHMsIHRlbXBsYXRlc1BhdGggfSlcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgZ2VuZXJhdGVGaWxlcyhyZXN1bHRzKVxuICAgIH1cbiAgICBMb2dnZXIubG9nKCdZb3VyIGNvbXBvbmVudCBpcyBjcmVhdGVkIScpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBMb2dnZXIuZXJyb3IoZS5tZXNzYWdlKVxuICB9XG4gIHJldHVybiBudWxsXG59KCkpXG5cbmV4cG9ydCBkZWZhdWx0IHsgZ2VuZXJhdGVGaWxlcywgZ2VuZXJhdGVGaWxlc0Zyb21DdXN0b20gfVxuIl19