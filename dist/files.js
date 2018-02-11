'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDirectories = exports.generateFilesFromCustom = exports.generateFilesFromTemplate = exports.generateFiles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Generate component files from custom templates folder
 * Get every single file in the folder
 * @param {string} the name of the component used to create folder and file
 * @param {string} where the component folder is created
 * @param {string} where the custom templates are
 */
let generateFilesFromTemplate = (() => {
  var _ref = _asyncToGenerator(function* ({ name, path, templatesPath }) {
    try {
      const files = _glob2.default.sync('**/*', { cwd: templatesPath, nodir: true });
      const config = (0, _utils.getConfig)(null, templatesPath, templatesPath);
      const outputPath = config.noMkdir ? `${path}` : `${path}/${name}`;
      files.map((() => {
        var _ref2 = _asyncToGenerator(function* (templateFileName) {
          // Get the template content
          const content = yield readFile(templatesPath, templateFileName);
          const replaced = content.replace(/COMPONENT_NAME/g, name);
          // Exist ?
          const newFileName = generateFileName(name, templateFileName);
          // Write the new file with the new content
          _fsExtra2.default.outputFile(`${outputPath}/${newFileName}`, replaced);
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      })());
    } catch (e) {
      _logger2.default.error(e.message);
    }
  });

  return function generateFilesFromTemplate(_x) {
    return _ref.apply(this, arguments);
  };
})();

/**
 * Return the default names replace from user filenames
 * @param {object} fileNames object with the user selected filenames
 * @param {string} componentName
 * @return {object} with the correct filenames
 */


var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _defaultTemplates = require('./defaultTemplates');

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * fetch a list of dirs inside a dir
 *
 * @param {any} source path of a dir
 * @returns {array} list of the dirs inside
 */
function getDirectories(source) {
  const isDirectory = sourcePath => (0, _fsExtra.lstatSync)(sourcePath).isDirectory();
  return (0, _fsExtra.readdirSync)(source).map(name => (0, _path.join)(source, name)).filter(isDirectory);
}

/**
 * readFile fs promise wrapped
 * @param {string} path
 * @param {string} fileName
 */
function readFile(path, fileName) {
  return new Promise((resolve, reject) => {
    _fsExtra2.default.readFile(`${path}/${fileName}`, 'utf8', (err, content) => {
      if (err) {
        return reject(err);
      }

      return resolve(content);
    });
  });
}

/**
 * generate the file name
 * @param {string} newFileName
 * @param {string} templateFileName
 */
function generateFileName(newFileName, templateFileName) {
  if (templateFileName.includes('COMPONENT_NAME')) {
    return templateFileName.replace(/COMPONENT_NAME/g, newFileName);
  }
  return templateFileName;
}function getFileNames(fileNames = [], componentName) {
  const defaultFileNames = {
    testFileName: `${_config2.default.testFileName}.${componentName}`,
    componentFileName: componentName,
    styleFileName: componentName
  };

  const formattedFileNames = Object.keys(fileNames).reduce((acc, curr) => {
    acc[curr] = fileNames[curr].replace(/COMPONENT_NAME/g, componentName);

    return acc;
  }, _extends({}, defaultFileNames));

  return formattedFileNames;
}

/**
 * Generate component files
 *
 * @param {object} params object with:
 * @param {string} type: the type of component template
 * @param {object} fileNames: object that contains the filenames to replace
 * @param {string} name: the name of the component used to create folder and file
 * @param {string} path: where the component folder is created
 * @param {string} cssExtension: the extension of the css file
 * @param {string} jsExtension: the extension of the component file
 * @param {array} componentMethods: Array of strings of methods to include in a class component
 * @param {boolean} indexFile: include or not an index file
 * @param {boolean} connected: include or not the connect function of redux
 * @param {boolean} includeStories: include or not the storybook file
 * @param {boolean} includeTests: include or not the test file
 */
function generateFiles(params) {
  const type = params.type,
        name = params.name,
        fileNames = params.fileNames,
        path = params.path,
        indexFile = params.indexFile,
        cssExtension = params.cssExtension,
        componentMethods = params.componentMethods,
        jsExtension = params.jsExtension,
        connected = params.connected,
        includeStories = params.includeStories,
        includeTests = params.includeTests;

  const destination = `${path}/${name}`;

  var _getFileNames = getFileNames(fileNames, name);

  const testFileName = _getFileNames.testFileName,
        componentFileName = _getFileNames.componentFileName,
        styleFileName = _getFileNames.styleFileName;


  if (indexFile || connected) {
    _fsExtra2.default.outputFile(`${destination}/index.js`, (0, _defaultTemplates.generateIndexFile)(componentFileName, connected));
  }

  if (includeStories) {
    _fsExtra2.default.outputFile(`${destination}/${name}.stories.${jsExtension}`, (0, _defaultTemplates.generateStorybookTemplate)(name));
  }

  if (includeTests) {
    _fsExtra2.default.outputFile(`${destination}/${testFileName}.${jsExtension}`, (0, _defaultTemplates.generateTestTemplate)(name));
  }

  // Create js file
  _fsExtra2.default.outputFile(`${destination}/${componentFileName}.${jsExtension}`, (0, _defaultTemplates.generateComponentTemplate)(type, componentFileName, {
    cssExtension,
    componentMethods,
    styleFileName
  }));

  // Create css file
  if (cssExtension) {
    _fsExtra2.default.outputFile(`${destination}/${styleFileName}.${cssExtension}`, (0, _defaultTemplates.generateStyleFile)(styleFileName));
  }
}

const generateFilesFromCustom = generateFilesFromTemplate;

exports.generateFiles = generateFiles;
exports.generateFilesFromTemplate = generateFilesFromTemplate;
exports.generateFilesFromCustom = generateFilesFromCustom;
exports.getDirectories = getDirectories;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyJdLCJuYW1lcyI6WyJuYW1lIiwicGF0aCIsInRlbXBsYXRlc1BhdGgiLCJmaWxlcyIsInN5bmMiLCJjd2QiLCJub2RpciIsImNvbmZpZyIsIm91dHB1dFBhdGgiLCJub01rZGlyIiwibWFwIiwidGVtcGxhdGVGaWxlTmFtZSIsImNvbnRlbnQiLCJyZWFkRmlsZSIsInJlcGxhY2VkIiwicmVwbGFjZSIsIm5ld0ZpbGVOYW1lIiwiZ2VuZXJhdGVGaWxlTmFtZSIsIm91dHB1dEZpbGUiLCJlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2VuZXJhdGVGaWxlc0Zyb21UZW1wbGF0ZSIsImdldERpcmVjdG9yaWVzIiwic291cmNlIiwiaXNEaXJlY3RvcnkiLCJzb3VyY2VQYXRoIiwiZmlsdGVyIiwiZmlsZU5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImluY2x1ZGVzIiwiZ2V0RmlsZU5hbWVzIiwiZmlsZU5hbWVzIiwiY29tcG9uZW50TmFtZSIsImRlZmF1bHRGaWxlTmFtZXMiLCJ0ZXN0RmlsZU5hbWUiLCJjb21wb25lbnRGaWxlTmFtZSIsInN0eWxlRmlsZU5hbWUiLCJmb3JtYXR0ZWRGaWxlTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImdlbmVyYXRlRmlsZXMiLCJwYXJhbXMiLCJ0eXBlIiwiaW5kZXhGaWxlIiwiY3NzRXh0ZW5zaW9uIiwiY29tcG9uZW50TWV0aG9kcyIsImpzRXh0ZW5zaW9uIiwiY29ubmVjdGVkIiwiaW5jbHVkZVN0b3JpZXMiLCJpbmNsdWRlVGVzdHMiLCJkZXN0aW5hdGlvbiIsImdlbmVyYXRlRmlsZXNGcm9tQ3VzdG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUF1REE7Ozs7Ozs7OytCQU9BLFdBQXlDLEVBQUVBLElBQUYsRUFBUUMsSUFBUixFQUFjQyxhQUFkLEVBQXpDLEVBQXdFO0FBQ3RFLFFBQUk7QUFDRixZQUFNQyxRQUFRLGVBQUtDLElB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OztBQUVELE1BQUlDLGNBQUosRUFBb0I7QUFDbEIsc0JBQUdyQyxVQUFILENBQWUsR0FBRXVDLFdBQVksSUFBR3pELElBQUssWUFBV3FELFdBQVksRUFBNUQsRUFBK0QsaURBQTBCckQsSUFBMUIsQ0FBL0Q7QUFDRDs7QUFFRCxNQUFJd0QsWUFBSixFQUFrQjtBQUNoQixzQkFBR3RDLFVBQUgsQ0FBZSxHQUFFdUMsV0FBWSxJQUFHbkIsWUFBYSxJQUFHZSxXQUFZLEVBQTVELEVBQStELDRDQUFxQnJELElBQXJCLENBQS9EO0FBQ0Q7O0FBRUQ7QUFDQSxvQkFBR2tCLFVBQUgsQ0FDRyxHQUFFdUMsV0FBWSxJQUFHbEIsaUJBQWtCLElBQUdjLFdBQVksRUFEckQsRUFFRSxpREFBMEJKLElBQTFCLEVBQWdDVixpQkFBaEMsRUFBbUQ7QUFDakRZLGdCQURpRDtBQUVqREMsb0JBRmlEO0FBR2pEWjtBQUhpRCxHQUFuRCxDQUZGOztBQVNBO0FBQ0EsTUFBSVcsWUFBSixFQUFrQjtBQUNoQixzQkFBR2pDLFVBQUgsQ0FDRyxHQUFFdUMsV0FBWSxJQUFHakIsYUFBYyxJQUFHVyxZQUFhLEVBRGxELEVBRUUseUNBQWtCWCxhQUFsQixDQUZGO0FBSUQ7QUFDRjs7QUFFRCxNQUFNa0IsMEJBQTBCcEMseUJBQWhDOztRQUVTeUIsYSxHQUFBQSxhO1FBQWV6Qix5QixHQUFBQSx5QjtRQUEyQm9DLHVCLEdBQUFBLHVCO1FBQXlCbkMsYyxHQUFBQSxjIiwiZmlsZSI6ImZpbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzLCB7IGxzdGF0U3luYywgcmVhZGRpclN5bmMgfSBmcm9tICdmcy1leHRyYSdcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IGdsb2IgZnJvbSAnZ2xvYidcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi9sb2dnZXInXG5pbXBvcnQge1xuICBnZW5lcmF0ZUNvbXBvbmVudFRlbXBsYXRlLFxuICBnZW5lcmF0ZVN0eWxlRmlsZSxcbiAgZ2VuZXJhdGVJbmRleEZpbGUsXG4gIGdlbmVyYXRlVGVzdFRlbXBsYXRlLFxuICBnZW5lcmF0ZVN0b3J5Ym9va1RlbXBsYXRlLFxufSBmcm9tICcuL2RlZmF1bHRUZW1wbGF0ZXMnXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSAnLi9jb25maWcuanNvbidcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vdXRpbHMnXG4vKipcbiAqIGZldGNoIGEgbGlzdCBvZiBkaXJzIGluc2lkZSBhIGRpclxuICpcbiAqIEBwYXJhbSB7YW55fSBzb3VyY2UgcGF0aCBvZiBhIGRpclxuICogQHJldHVybnMge2FycmF5fSBsaXN0IG9mIHRoZSBkaXJzIGluc2lkZVxuICovXG5mdW5jdGlvbiBnZXREaXJlY3Rvcmllcyhzb3VyY2UpIHtcbiAgY29uc3QgaXNEaXJlY3RvcnkgPSBzb3VyY2VQYXRoID0+IGxzdGF0U3luYyhzb3VyY2VQYXRoKS5pc0RpcmVjdG9yeSgpXG4gIHJldHVybiByZWFkZGlyU3luYyhzb3VyY2UpXG4gICAgLm1hcChuYW1lID0+IGpvaW4oc291cmNlLCBuYW1lKSlcbiAgICAuZmlsdGVyKGlzRGlyZWN0b3J5KVxufVxuXG4vKipcbiAqIHJlYWRGaWxlIGZzIHByb21pc2Ugd3JhcHBlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZVxuICovXG5mdW5jdGlvbiByZWFkRmlsZShwYXRoLCBmaWxlTmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZzLnJlYWRGaWxlKGAke3BhdGh9LyR7ZmlsZU5hbWV9YCwgJ3V0ZjgnLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzb2x2ZShjb250ZW50KVxuICAgIH0pXG4gIH0pXG59XG5cbi8qKlxuICogZ2VuZXJhdGUgdGhlIGZpbGUgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IG5ld0ZpbGVOYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVGaWxlTmFtZVxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUZpbGVOYW1lKG5ld0ZpbGVOYW1lLCB0ZW1wbGF0ZUZpbGVOYW1lKSB7XG4gIGlmICh0ZW1wbGF0ZUZpbGVOYW1lLmluY2x1ZGVzKCdDT01QT05FTlRfTkFNRScpKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlRmlsZU5hbWUucmVwbGFjZSgvQ09NUE9ORU5UX05BTUUvZywgbmV3RmlsZU5hbWUpXG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlRmlsZU5hbWVcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBjb21wb25lbnQgZmlsZXMgZnJvbSBjdXN0b20gdGVtcGxhdGVzIGZvbGRlclxuICogR2V0IGV2ZXJ5IHNpbmdsZSBmaWxlIGluIHRoZSBmb2xkZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHVzZWQgdG8gY3JlYXRlIGZvbGRlciBhbmQgZmlsZVxuICogQHBhcmFtIHtzdHJpbmd9IHdoZXJlIHRoZSBjb21wb25lbnQgZm9sZGVyIGlzIGNyZWF0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB3aGVyZSB0aGUgY3VzdG9tIHRlbXBsYXRlcyBhcmVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVGaWxlc0Zyb21UZW1wbGF0ZSh7IG5hbWUsIHBhdGgsIHRlbXBsYXRlc1BhdGggfSkge1xuICB0cnkge1xuICAgIGNvbnN0IGZpbGVzID0gZ2xvYi5zeW5jKCcqKi8qJywgeyBjd2Q6IHRlbXBsYXRlc1BhdGgsIG5vZGlyOiB0cnVlIH0pXG4gICAgY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKG51bGwsIHRlbXBsYXRlc1BhdGgsIHRlbXBsYXRlc1BhdGgpXG4gICAgY29uc3Qgb3V0cHV0UGF0aCA9IGNvbmZpZy5ub01rZGlyID8gYCR7cGF0aH1gIDogYCR7cGF0aH0vJHtuYW1lfWBcbiAgICBmaWxlcy5tYXAoYXN5bmMgKHRlbXBsYXRlRmlsZU5hbWUpID0+IHtcbiAgICAgIC8vIEdldCB0aGUgdGVtcGxhdGUgY29udGVudFxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKHRlbXBsYXRlc1BhdGgsIHRlbXBsYXRlRmlsZU5hbWUpXG4gICAgICBjb25zdCByZXBsYWNlZCA9IGNvbnRlbnQucmVwbGFjZSgvQ09NUE9ORU5UX05BTUUvZywgbmFtZSlcbiAgICAgIC8vIEV4aXN0ID9cbiAgICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gZ2VuZXJhdGVGaWxlTmFtZShuYW1lLCB0ZW1wbGF0ZUZpbGVOYW1lKVxuICAgICAgLy8gV3JpdGUgdGhlIG5ldyBmaWxlIHdpdGggdGhlIG5ldyBjb250ZW50XG4gICAgICBmcy5vdXRwdXRGaWxlKGAke291dHB1dFBhdGh9LyR7bmV3RmlsZU5hbWV9YCwgcmVwbGFjZWQpXG4gICAgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIExvZ2dlci5lcnJvcihlLm1lc3NhZ2UpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGRlZmF1bHQgbmFtZXMgcmVwbGFjZSBmcm9tIHVzZXIgZmlsZW5hbWVzXG4gKiBAcGFyYW0ge29iamVjdH0gZmlsZU5hbWVzIG9iamVjdCB3aXRoIHRoZSB1c2VyIHNlbGVjdGVkIGZpbGVuYW1lc1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWVcbiAqIEByZXR1cm4ge29iamVjdH0gd2l0aCB0aGUgY29ycmVjdCBmaWxlbmFtZXNcbiAqL1xuZnVuY3Rpb24gZ2V0RmlsZU5hbWVzKGZpbGVOYW1lcyA9IFtdLCBjb21wb25lbnROYW1lKSB7XG4gIGNvbnN0IGRlZmF1bHRGaWxlTmFtZXMgPSB7XG4gICAgdGVzdEZpbGVOYW1lOiBgJHtkZWZhdWx0T3B0aW9ucy50ZXN0RmlsZU5hbWV9LiR7Y29tcG9uZW50TmFtZX1gLFxuICAgIGNvbXBvbmVudEZpbGVOYW1lOiBjb21wb25lbnROYW1lLFxuICAgIHN0eWxlRmlsZU5hbWU6IGNvbXBvbmVudE5hbWUsXG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZWRGaWxlTmFtZXMgPSBPYmplY3Qua2V5cyhmaWxlTmFtZXMpLnJlZHVjZShcbiAgICAoYWNjLCBjdXJyKSA9PiB7XG4gICAgICBhY2NbY3Vycl0gPSBmaWxlTmFtZXNbY3Vycl0ucmVwbGFjZSgvQ09NUE9ORU5UX05BTUUvZywgY29tcG9uZW50TmFtZSlcblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sXG4gICAgeyAuLi5kZWZhdWx0RmlsZU5hbWVzIH1cbiAgKVxuXG4gIHJldHVybiBmb3JtYXR0ZWRGaWxlTmFtZXNcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBjb21wb25lbnQgZmlsZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIG9iamVjdCB3aXRoOlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGU6IHRoZSB0eXBlIG9mIGNvbXBvbmVudCB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGZpbGVOYW1lczogb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGZpbGVuYW1lcyB0byByZXBsYWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZTogdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB1c2VkIHRvIGNyZWF0ZSBmb2xkZXIgYW5kIGZpbGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoOiB3aGVyZSB0aGUgY29tcG9uZW50IGZvbGRlciBpcyBjcmVhdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gY3NzRXh0ZW5zaW9uOiB0aGUgZXh0ZW5zaW9uIG9mIHRoZSBjc3MgZmlsZVxuICogQHBhcmFtIHtzdHJpbmd9IGpzRXh0ZW5zaW9uOiB0aGUgZXh0ZW5zaW9uIG9mIHRoZSBjb21wb25lbnQgZmlsZVxuICogQHBhcmFtIHthcnJheX0gY29tcG9uZW50TWV0aG9kczogQXJyYXkgb2Ygc3RyaW5ncyBvZiBtZXRob2RzIHRvIGluY2x1ZGUgaW4gYSBjbGFzcyBjb21wb25lbnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5kZXhGaWxlOiBpbmNsdWRlIG9yIG5vdCBhbiBpbmRleCBmaWxlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbm5lY3RlZDogaW5jbHVkZSBvciBub3QgdGhlIGNvbm5lY3QgZnVuY3Rpb24gb2YgcmVkdXhcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZVN0b3JpZXM6IGluY2x1ZGUgb3Igbm90IHRoZSBzdG9yeWJvb2sgZmlsZVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlVGVzdHM6IGluY2x1ZGUgb3Igbm90IHRoZSB0ZXN0IGZpbGVcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVGaWxlcyhwYXJhbXMpIHtcbiAgY29uc3Qge1xuICAgIHR5cGUsXG4gICAgbmFtZSxcbiAgICBmaWxlTmFtZXMsXG4gICAgcGF0aCxcbiAgICBpbmRleEZpbGUsXG4gICAgY3NzRXh0ZW5zaW9uLFxuICAgIGNvbXBvbmVudE1ldGhvZHMsXG4gICAganNFeHRlbnNpb24sXG4gICAgY29ubmVjdGVkLFxuICAgIGluY2x1ZGVTdG9yaWVzLFxuICAgIGluY2x1ZGVUZXN0cyxcbiAgfSA9IHBhcmFtc1xuICBjb25zdCBkZXN0aW5hdGlvbiA9IGAke3BhdGh9LyR7bmFtZX1gXG5cbiAgY29uc3QgeyB0ZXN0RmlsZU5hbWUsIGNvbXBvbmVudEZpbGVOYW1lLCBzdHlsZUZpbGVOYW1lIH0gPSBnZXRGaWxlTmFtZXMoZmlsZU5hbWVzLCBuYW1lKVxuXG4gIGlmIChpbmRleEZpbGUgfHwgY29ubmVjdGVkKSB7XG4gICAgZnMub3V0cHV0RmlsZShgJHtkZXN0aW5hdGlvbn0vaW5kZXguanNgLCBnZW5lcmF0ZUluZGV4RmlsZShjb21wb25lbnRGaWxlTmFtZSwgY29ubmVjdGVkKSlcbiAgfVxuXG4gIGlmIChpbmNsdWRlU3Rvcmllcykge1xuICAgIGZzLm91dHB1dEZpbGUoYCR7ZGVzdGluYXRpb259LyR7bmFtZX0uc3Rvcmllcy4ke2pzRXh0ZW5zaW9ufWAsIGdlbmVyYXRlU3Rvcnlib29rVGVtcGxhdGUobmFtZSkpXG4gIH1cblxuICBpZiAoaW5jbHVkZVRlc3RzKSB7XG4gICAgZnMub3V0cHV0RmlsZShgJHtkZXN0aW5hdGlvbn0vJHt0ZXN0RmlsZU5hbWV9LiR7anNFeHRlbnNpb259YCwgZ2VuZXJhdGVUZXN0VGVtcGxhdGUobmFtZSkpXG4gIH1cblxuICAvLyBDcmVhdGUganMgZmlsZVxuICBmcy5vdXRwdXRGaWxlKFxuICAgIGAke2Rlc3RpbmF0aW9ufS8ke2NvbXBvbmVudEZpbGVOYW1lfS4ke2pzRXh0ZW5zaW9ufWAsXG4gICAgZ2VuZXJhdGVDb21wb25lbnRUZW1wbGF0ZSh0eXBlLCBjb21wb25lbnRGaWxlTmFtZSwge1xuICAgICAgY3NzRXh0ZW5zaW9uLFxuICAgICAgY29tcG9uZW50TWV0aG9kcyxcbiAgICAgIHN0eWxlRmlsZU5hbWUsXG4gICAgfSlcbiAgKVxuXG4gIC8vIENyZWF0ZSBjc3MgZmlsZVxuICBpZiAoY3NzRXh0ZW5zaW9uKSB7XG4gICAgZnMub3V0cHV0RmlsZShcbiAgICAgIGAke2Rlc3RpbmF0aW9ufS8ke3N0eWxlRmlsZU5hbWV9LiR7Y3NzRXh0ZW5zaW9ufWAsXG4gICAgICBnZW5lcmF0ZVN0eWxlRmlsZShzdHlsZUZpbGVOYW1lKVxuICAgIClcbiAgfVxufVxuXG5jb25zdCBnZW5lcmF0ZUZpbGVzRnJvbUN1c3RvbSA9IGdlbmVyYXRlRmlsZXNGcm9tVGVtcGxhdGVcblxuZXhwb3J0IHsgZ2VuZXJhdGVGaWxlcywgZ2VuZXJhdGVGaWxlc0Zyb21UZW1wbGF0ZSwgZ2VuZXJhdGVGaWxlc0Zyb21DdXN0b20sIGdldERpcmVjdG9yaWVzIH1cbiJdfQ==