'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Logger = {
  log(...msg) {
    return console.log(_chalk2.default.green('[Info]'), ...msg);
  },
  error(...msg) {
    return console.error(_chalk2.default.bold.red('[Error]'), ...msg);
  },
  warn(...msg) {
    return console.warn(_chalk2.default.keyword('orange')('[Warn]'), ...msg);
  },
  debug(...msg) {
    return console.warn(_chalk2.default.blue('[Debug]'), ...msg);
  }
}; /* eslint-disable no-console */
exports.default = Logger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIuanMiXSwibmFtZXMiOlsiTG9nZ2VyIiwibG9nIiwibXNnIiwiY29uc29sZSIsImdyZWVuIiwiZXJyb3IiLCJib2xkIiwicmVkIiwid2FybiIsImtleXdvcmQiLCJkZWJ1ZyIsImJsdWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxTQUFTO0FBQ2JDLE1BQUksR0FBR0MsR0FBUCxFQUFZO0FBQ1YsV0FBT0MsUUFBUUYsR0FBUixDQUFZLGdCQUFNRyxLQUFOLENBQVksUUFBWixDQUFaLEVBQW1DLEdBQUdGLEdBQXRDLENBQVA7QUFDRCxHQUhZO0FBSWJHLFFBQU0sR0FBR0gsR0FBVCxFQUFjO0FBQ1osV0FBT0MsUUFBUUUsS0FBUixDQUFjLGdCQUFNQyxJQUFOLENBQVdDLEdBQVgsQ0FBZSxTQUFmLENBQWQsRUFBeUMsR0FBR0wsR0FBNUMsQ0FBUDtBQUNELEdBTlk7QUFPYk0sT0FBSyxHQUFHTixHQUFSLEVBQWE7QUFDWCxXQUFPQyxRQUFRSyxJQUFSLENBQWEsZ0JBQU1DLE9BQU4sQ0FBYyxRQUFkLEVBQXdCLFFBQXhCLENBQWIsRUFBZ0QsR0FBR1AsR0FBbkQsQ0FBUDtBQUNELEdBVFk7QUFVYlEsUUFBTSxHQUFHUixHQUFULEVBQWM7QUFDWixXQUFPQyxRQUFRSyxJQUFSLENBQWEsZ0JBQU1HLElBQU4sQ0FBVyxTQUFYLENBQWIsRUFBb0MsR0FBR1QsR0FBdkMsQ0FBUDtBQUNEO0FBWlksQ0FBZixDLENBSEE7a0JBa0JlRixNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcblxuY29uc3QgTG9nZ2VyID0ge1xuICBsb2coLi4ubXNnKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuKCdbSW5mb10nKSwgLi4ubXNnKVxuICB9LFxuICBlcnJvciguLi5tc2cpIHtcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihjaGFsay5ib2xkLnJlZCgnW0Vycm9yXScpLCAuLi5tc2cpXG4gIH0sXG4gIHdhcm4oLi4ubXNnKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihjaGFsay5rZXl3b3JkKCdvcmFuZ2UnKSgnW1dhcm5dJyksIC4uLm1zZylcbiAgfSxcbiAgZGVidWcoLi4ubXNnKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihjaGFsay5ibHVlKCdbRGVidWddJyksIC4uLm1zZylcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyXG4iXX0=