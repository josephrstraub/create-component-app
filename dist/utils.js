'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTemplate = exports.getConfig = exports.getTemplatesList = exports.generateQuestions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * List templates on terminal or get the template (templateName config) from the folder of templates
 * @param {array} templatesList to filter
 * @param {string} templateName
 */
let getTemplate = (() => {
  var _ref = _asyncToGenerator(function* (templatesList, templateName = null) {
    if (!templateName) {
      const templatesArray = Object.entries(templatesList).map(function ([name, value]) {
        return { name, value };
      });

      var _ref2 = yield _inquirer2.default.prompt(_questions.templateQuestions.template(templatesArray));

      const template = _ref2.template;

      return template;
    }
    if (templateName in templatesList) {
      return templatesList[templateName];
    }
    throw Error(`The template '${templateName}' does't exists`);
  });

  return function getTemplate(_x) {
    return _ref.apply(this, arguments);
  };
})();

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cosmiconfig = require('cosmiconfig');

var _cosmiconfig2 = _interopRequireDefault(_cosmiconfig);

var _os = require('os');

var _questions = require('./questions');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _files = require('./files');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function isIISNode(main) {
  return (/\\iisnode\\/.test(main.filename)
  );
}

function handleIISNode(main) {
  if (!main.children.length) {
    return main.filename;
  }
  return main.children[0].filename;
}

function getModulePath(_require = require) {
  const main = _require.main;
  if (main && isIISNode(main)) {
    return handleIISNode(main);
  }
  return main ? main.filename : process.cwd();
}

function getDefaultPathTemplates() {
  return `${_path2.default.dirname(getModulePath())}/templates`;
}

const DEFAULT_PATH_TEMPLATES = getDefaultPathTemplates();

/**
 * If the user want to use custom templates, return filtered questions
 * for only custom configuration
 * @param {object} config
 * @param {object} questions
 */
function generateQuestionsCustom(config, questions) {
  const mandatoryQuestions = [questions.name, questions.path];

  return mandatoryQuestions.filter(question => {
    if (config[question.name]) {
      return false;
    }
    return true;
  });
}

/**
 * Generate questions filtered by the config file if exist
 *
 * @param {object} config
 * @param {object} questions
 * @returns {array}
 */
function generateQuestions(config = {}, questions = {}) {
  const questionKeys = Object.keys(questions);

  if (!config) {
    return questionKeys.map(question => questions[question]);
  }

  // If type is custom, filter question mandatory to work
  if (config.type === 'custom') {
    return generateQuestionsCustom(config, questions);
  }

  // filter questions from config object
  const filteredQuestions = [];
  questionKeys.forEach(question => {
    if (!(question in config)) {
      filteredQuestions.push(questions[question]);
    }
  });

  return filteredQuestions;
}

/**
 * Reduce callback to reduce the list of directories
 * @param {object} prev
 * @param {array} dir
 */
function createListOfDirectories(prev, dir) {
  return _extends({}, prev, {
    [dir.split(_path2.default.sep).pop()]: dir
  });
}

/**
 * Returns the list of templates available
 * @param {any} customPath
 */
function getTemplatesList(customPath = null) {
  const predefined = (0, _files.getDirectories)(DEFAULT_PATH_TEMPLATES).reduce(createListOfDirectories, {});
  try {
    const custom = customPath ? (0, _files.getDirectories)(customPath).reduce(createListOfDirectories, {}) : [];

    return custom;
  } catch (error) {
    _logger2.default.warn('The custom templates path that you supply is unreachable');
    _logger2.default.warn('falling back to defaults templates');
    return predefined;
  }
}

/**
 * Dynamically import a config file if exist
 *
 * @param {any} configPath
 * @param {any} [searchPath=process.cwd()]
 * @param {any} [stopDir=homedir()]
 * @returns {Object} config
 */
function getConfig(configPath, searchPath = process.cwd(), stopDir = (0, _os.homedir)()) {
  const useCustomPath = !!configPath;
  const explorer = (0, _cosmiconfig2.default)('cca', { sync: true, stopDir });

  try {
    const searchPathAbsolute = !useCustomPath && searchPath;
    const configPathAbsolute = useCustomPath && _path2.default.join(process.cwd(), configPath);
    // search from the root of the process if the user didnt specify a config file,
    // or use the custom path if a file is passed.
    const result = explorer.load(searchPathAbsolute, configPathAbsolute);

    // dont throw if the explorer didnt find a configfile,
    // instead use default config
    const config = result ? result.config : {};
    const filepath = result ? result.filepath : {};
    if (!result) _logger2.default.log('No config file detected, using defaults.');

    return _extends({}, config, { filepath });
  } catch (error) {
    _logger2.default.error('An error occured while parsing your config file. Using defaults...\n\n', error.message);
  }
  return {};
}exports.generateQuestions = generateQuestions;
exports.getTemplatesList = getTemplatesList;
exports.getConfig = getConfig;
exports.getTemplate = getTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZXNMaXN0IiwidGVtcGxhdGVOYW1lIiwidGVtcGxhdGVzQXJyYXkiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwibmFtZSIsInZhbHVlIiwicHJvbXB0IiwidGVtcGxhdGUiLCJFcnJvciIsImdldFRlbXBsYXRlIiwiaXNJSVNOb2RlIiwibWFpbiIsInRlc3QiLCJmaWxlbmFtZSIsImhhbmRsZUlJU05vZGUiLCJjaGlsZHJlbiIsImxlbmd0aCIsImdldE1vZHVsZVBhdGgiLCJfcmVxdWlyZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiY3dkIiwiZ2V0RGVmYXVsdFBhdGhUZW1wbGF0ZXMiLCJkaXJuYW1lIiwiREVGQVVMVF9QQVRIX1RFTVBMQVRFUyIsImdlbmVyYXRlUXVlc3Rpb25zQ3VzdG9tIiwiY29uZmlnIiwicXVlc3Rpb25zIiwibWFuZGF0b3J5UXVlc3Rpb25zIiwicGF0aCIsImZpbHRlciIsInF1ZXN0aW9uIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJxdWVzdGlvbktleXMiLCJrZXlzIiwidHlwZSIsImZpbHRlcmVkUXVlc3Rpb25zIiwiZm9yRWFjaCIsInB1c2giLCJjcmVhdGVMaXN0T2ZEaXJlY3RvcmllcyIsInByZXYiLCJkaXIiLCJzcGxpdCIsInNlcCIsInBvcCIsImdldFRlbXBsYXRlc0xpc3QiLCJjdXN0b21QYXRoIiwicHJlZGVmaW5lZCIsInJlZHVjZSIsImN1c3RvbSIsImVycm9yIiwid2FybiIsImdldENvbmZpZyIsImNvbmZpZ1BhdGgiLCJzZWFyY2hQYXRoIiwic3RvcERpciIsInVzZUN1c3RvbVBhdGgiLCJleHBsb3JlciIsInN5bmMiLCJzZWFyY2hQYXRoQWJzb2x1dGUiLCJjb25maWdQYXRoQWJzb2x1dGUiLCJqb2luIiwicmVzdWx0IiwibG9hZCIsImZpbGVwYXRoIiwibG9nIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBNklBOzs7Ozs7K0JBS0Es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QVNMLFNBQVNNLElBQVQsQ0FBY0osa0JBQWQsRUFBa0NDLGtCQUFsQyxDQUFmOztBQUVBO0FBQ0E7QUFDQSxVQUFNbEMsU0FBU29DLFNBQVNBLE9BQU9wQyxNQUFoQixHQUF5QixFQUF4QztBQUNBLFVBQU1zQyxXQUFXRixTQUFTQSxPQUFPRSxRQUFoQixHQUEyQixFQUE1QztBQUNBLFFBQUksQ0FBQ0YsTUFBTCxFQUFhLGlCQUFPRyxHQUFQLENBQVcsMENBQVg7O0FBRWIsd0JBQVl2QyxNQUFaLElBQW9Cc0MsUUFBcEI7QUFDRCxHQWRELENBY0UsT0FBT2QsS0FBUCxFQUFjO0FBQ2QscUJBQU9BLEtBQVAsQ0FBYSx3RUFBYixFQUF1RkEsTUFBTWdCLE9BQTdGO0FBQ0Q7QUFDRCxTQUFPLEVBQVA7QUFDRCxDLFFBbUJRbEMsaUIsR0FBQUEsaUI7UUFBbUJhLGdCLEdBQUFBLGdCO1FBQWtCTyxTLEdBQUFBLFM7UUFBVzNDLFcsR0FBQUEsVyIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnF1aXJlciBmcm9tICdpbnF1aXJlcidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgY29zbWljb25maWcgZnJvbSAnY29zbWljb25maWcnXG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyB0ZW1wbGF0ZVF1ZXN0aW9ucyB9IGZyb20gJy4vcXVlc3Rpb25zJ1xuaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlcidcbmltcG9ydCB7IGdldERpcmVjdG9yaWVzIH0gZnJvbSAnLi9maWxlcydcblxuZnVuY3Rpb24gaXNJSVNOb2RlKG1haW4pIHtcbiAgcmV0dXJuIC9cXFxcaWlzbm9kZVxcXFwvLnRlc3QobWFpbi5maWxlbmFtZSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlSUlTTm9kZShtYWluKSB7XG4gIGlmICghbWFpbi5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXR1cm4gbWFpbi5maWxlbmFtZVxuICB9XG4gIHJldHVybiBtYWluLmNoaWxkcmVuWzBdLmZpbGVuYW1lXG59XG5cbmZ1bmN0aW9uIGdldE1vZHVsZVBhdGgoX3JlcXVpcmUgPSByZXF1aXJlKSB7XG4gIGNvbnN0IG1haW4gPSBfcmVxdWlyZS5tYWluXG4gIGlmIChtYWluICYmIGlzSUlTTm9kZShtYWluKSkge1xuICAgIHJldHVybiBoYW5kbGVJSVNOb2RlKG1haW4pXG4gIH1cbiAgcmV0dXJuIG1haW4gPyBtYWluLmZpbGVuYW1lIDogcHJvY2Vzcy5jd2QoKVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0UGF0aFRlbXBsYXRlcygpIHtcbiAgcmV0dXJuIGAke3BhdGguZGlybmFtZShnZXRNb2R1bGVQYXRoKCkpfS90ZW1wbGF0ZXNgXG59XG5cbmNvbnN0IERFRkFVTFRfUEFUSF9URU1QTEFURVMgPSBnZXREZWZhdWx0UGF0aFRlbXBsYXRlcygpXG5cbi8qKlxuICogSWYgdGhlIHVzZXIgd2FudCB0byB1c2UgY3VzdG9tIHRlbXBsYXRlcywgcmV0dXJuIGZpbHRlcmVkIHF1ZXN0aW9uc1xuICogZm9yIG9ubHkgY3VzdG9tIGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAqIEBwYXJhbSB7b2JqZWN0fSBxdWVzdGlvbnNcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbnNDdXN0b20oY29uZmlnLCBxdWVzdGlvbnMpIHtcbiAgY29uc3QgbWFuZGF0b3J5UXVlc3Rpb25zID0gW3F1ZXN0aW9ucy5uYW1lLCBxdWVzdGlvbnMucGF0aF1cblxuICByZXR1cm4gbWFuZGF0b3J5UXVlc3Rpb25zLmZpbHRlcigocXVlc3Rpb24pID0+IHtcbiAgICBpZiAoY29uZmlnW3F1ZXN0aW9uLm5hbWVdKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfSlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBxdWVzdGlvbnMgZmlsdGVyZWQgYnkgdGhlIGNvbmZpZyBmaWxlIGlmIGV4aXN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICogQHBhcmFtIHtvYmplY3R9IHF1ZXN0aW9uc1xuICogQHJldHVybnMge2FycmF5fVxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZVF1ZXN0aW9ucyhjb25maWcgPSB7fSwgcXVlc3Rpb25zID0ge30pIHtcbiAgY29uc3QgcXVlc3Rpb25LZXlzID0gT2JqZWN0LmtleXMocXVlc3Rpb25zKVxuXG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuIHF1ZXN0aW9uS2V5cy5tYXAocXVlc3Rpb24gPT4gcXVlc3Rpb25zW3F1ZXN0aW9uXSlcbiAgfVxuXG4gIC8vIElmIHR5cGUgaXMgY3VzdG9tLCBmaWx0ZXIgcXVlc3Rpb24gbWFuZGF0b3J5IHRvIHdvcmtcbiAgaWYgKGNvbmZpZy50eXBlID09PSAnY3VzdG9tJykge1xuICAgIHJldHVybiBnZW5lcmF0ZVF1ZXN0aW9uc0N1c3RvbShjb25maWcsIHF1ZXN0aW9ucylcbiAgfVxuXG4gIC8vIGZpbHRlciBxdWVzdGlvbnMgZnJvbSBjb25maWcgb2JqZWN0XG4gIGNvbnN0IGZpbHRlcmVkUXVlc3Rpb25zID0gW11cbiAgcXVlc3Rpb25LZXlzLmZvckVhY2goKHF1ZXN0aW9uKSA9PiB7XG4gICAgaWYgKCEocXVlc3Rpb24gaW4gY29uZmlnKSkge1xuICAgICAgZmlsdGVyZWRRdWVzdGlvbnMucHVzaChxdWVzdGlvbnNbcXVlc3Rpb25dKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gZmlsdGVyZWRRdWVzdGlvbnNcbn1cblxuLyoqXG4gKiBSZWR1Y2UgY2FsbGJhY2sgdG8gcmVkdWNlIHRoZSBsaXN0IG9mIGRpcmVjdG9yaWVzXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldlxuICogQHBhcmFtIHthcnJheX0gZGlyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RPZkRpcmVjdG9yaWVzKHByZXYsIGRpcikge1xuICByZXR1cm4ge1xuICAgIC4uLnByZXYsXG4gICAgW2Rpci5zcGxpdChwYXRoLnNlcCkucG9wKCldOiBkaXIsXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHRlbXBsYXRlcyBhdmFpbGFibGVcbiAqIEBwYXJhbSB7YW55fSBjdXN0b21QYXRoXG4gKi9cbmZ1bmN0aW9uIGdldFRlbXBsYXRlc0xpc3QoY3VzdG9tUGF0aCA9IG51bGwpIHtcbiAgY29uc3QgcHJlZGVmaW5lZCA9IGdldERpcmVjdG9yaWVzKERFRkFVTFRfUEFUSF9URU1QTEFURVMpLnJlZHVjZShjcmVhdGVMaXN0T2ZEaXJlY3Rvcmllcywge30pXG4gIHRyeSB7XG4gICAgY29uc3QgY3VzdG9tID0gY3VzdG9tUGF0aCA/IGdldERpcmVjdG9yaWVzKGN1c3RvbVBhdGgpLnJlZHVjZShjcmVhdGVMaXN0T2ZEaXJlY3Rvcmllcywge30pIDogW11cblxuICAgIHJldHVybiBjdXN0b21cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBMb2dnZXIud2FybignVGhlIGN1c3RvbSB0ZW1wbGF0ZXMgcGF0aCB0aGF0IHlvdSBzdXBwbHkgaXMgdW5yZWFjaGFibGUnKVxuICAgIExvZ2dlci53YXJuKCdmYWxsaW5nIGJhY2sgdG8gZGVmYXVsdHMgdGVtcGxhdGVzJylcbiAgICByZXR1cm4gcHJlZGVmaW5lZFxuICB9XG59XG5cbi8qKlxuICogRHluYW1pY2FsbHkgaW1wb3J0IGEgY29uZmlnIGZpbGUgaWYgZXhpc3RcbiAqXG4gKiBAcGFyYW0ge2FueX0gY29uZmlnUGF0aFxuICogQHBhcmFtIHthbnl9IFtzZWFyY2hQYXRoPXByb2Nlc3MuY3dkKCldXG4gKiBAcGFyYW0ge2FueX0gW3N0b3BEaXI9aG9tZWRpcigpXVxuICogQHJldHVybnMge09iamVjdH0gY29uZmlnXG4gKi9cbmZ1bmN0aW9uIGdldENvbmZpZyhjb25maWdQYXRoLCBzZWFyY2hQYXRoID0gcHJvY2Vzcy5jd2QoKSwgc3RvcERpciA9IGhvbWVkaXIoKSkge1xuICBjb25zdCB1c2VDdXN0b21QYXRoID0gISFjb25maWdQYXRoXG4gIGNvbnN0IGV4cGxvcmVyID0gY29zbWljb25maWcoJ2NjYScsIHsgc3luYzogdHJ1ZSwgc3RvcERpciB9KVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2VhcmNoUGF0aEFic29sdXRlID0gIXVzZUN1c3RvbVBhdGggJiYgc2VhcmNoUGF0aFxuICAgIGNvbnN0IGNvbmZpZ1BhdGhBYnNvbHV0ZSA9IHVzZUN1c3RvbVBhdGggJiYgcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIGNvbmZpZ1BhdGgpXG4gICAgLy8gc2VhcmNoIGZyb20gdGhlIHJvb3Qgb2YgdGhlIHByb2Nlc3MgaWYgdGhlIHVzZXIgZGlkbnQgc3BlY2lmeSBhIGNvbmZpZyBmaWxlLFxuICAgIC8vIG9yIHVzZSB0aGUgY3VzdG9tIHBhdGggaWYgYSBmaWxlIGlzIHBhc3NlZC5cbiAgICBjb25zdCByZXN1bHQgPSBleHBsb3Jlci5sb2FkKHNlYXJjaFBhdGhBYnNvbHV0ZSwgY29uZmlnUGF0aEFic29sdXRlKVxuXG4gICAgLy8gZG9udCB0aHJvdyBpZiB0aGUgZXhwbG9yZXIgZGlkbnQgZmluZCBhIGNvbmZpZ2ZpbGUsXG4gICAgLy8gaW5zdGVhZCB1c2UgZGVmYXVsdCBjb25maWdcbiAgICBjb25zdCBjb25maWcgPSByZXN1bHQgPyByZXN1bHQuY29uZmlnIDoge31cbiAgICBjb25zdCBmaWxlcGF0aCA9IHJlc3VsdCA/IHJlc3VsdC5maWxlcGF0aCA6IHt9XG4gICAgaWYgKCFyZXN1bHQpIExvZ2dlci5sb2coJ05vIGNvbmZpZyBmaWxlIGRldGVjdGVkLCB1c2luZyBkZWZhdWx0cy4nKVxuXG4gICAgcmV0dXJuIHsgLi4uY29uZmlnLCBmaWxlcGF0aCB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgTG9nZ2VyLmVycm9yKCdBbiBlcnJvciBvY2N1cmVkIHdoaWxlIHBhcnNpbmcgeW91ciBjb25maWcgZmlsZS4gVXNpbmcgZGVmYXVsdHMuLi5cXG5cXG4nLCBlcnJvci5tZXNzYWdlKVxuICB9XG4gIHJldHVybiB7fVxufVxuXG4vKipcbiAqIExpc3QgdGVtcGxhdGVzIG9uIHRlcm1pbmFsIG9yIGdldCB0aGUgdGVtcGxhdGUgKHRlbXBsYXRlTmFtZSBjb25maWcpIGZyb20gdGhlIGZvbGRlciBvZiB0ZW1wbGF0ZXNcbiAqIEBwYXJhbSB7YXJyYXl9IHRlbXBsYXRlc0xpc3QgdG8gZmlsdGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVOYW1lXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFRlbXBsYXRlKHRlbXBsYXRlc0xpc3QsIHRlbXBsYXRlTmFtZSA9IG51bGwpIHtcbiAgaWYgKCF0ZW1wbGF0ZU5hbWUpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZXNBcnJheSA9IE9iamVjdC5lbnRyaWVzKHRlbXBsYXRlc0xpc3QpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gKHsgbmFtZSwgdmFsdWUgfSkpXG4gICAgY29uc3QgeyB0ZW1wbGF0ZSB9ID0gYXdhaXQgaW5xdWlyZXIucHJvbXB0KHRlbXBsYXRlUXVlc3Rpb25zLnRlbXBsYXRlKHRlbXBsYXRlc0FycmF5KSlcbiAgICByZXR1cm4gdGVtcGxhdGVcbiAgfVxuICBpZiAodGVtcGxhdGVOYW1lIGluIHRlbXBsYXRlc0xpc3QpIHtcbiAgICByZXR1cm4gdGVtcGxhdGVzTGlzdFt0ZW1wbGF0ZU5hbWVdXG4gIH1cbiAgdGhyb3cgRXJyb3IoYFRoZSB0ZW1wbGF0ZSAnJHt0ZW1wbGF0ZU5hbWV9JyBkb2VzJ3QgZXhpc3RzYClcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVRdWVzdGlvbnMsIGdldFRlbXBsYXRlc0xpc3QsIGdldENvbmZpZywgZ2V0VGVtcGxhdGUgfVxuIl19