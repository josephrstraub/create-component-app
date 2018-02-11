'use strict';

var _test = require('../test.template');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Test Template', () => {
  it('should a string', () => {
    expect(typeof (0, _test2.default)()).toBe('string');
  });

  it('should import component for story book', () => {
    expect((0, _test2.default)('Foo')).toContain("import Foo from './Foo'");
  });

  it('should crate describe block with component name', () => {
    expect((0, _test2.default)('Foo')).toContain("describe('Foo', () =>");
  });

  it('should render component for test in beforeEach block', () => {
    expect((0, _test2.default)('Foo')).toContain('shallow(<Foo {...props} />)');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZhdWx0VGVtcGxhdGVzL2pzL19fdGVzdHNfXy90ZXN0LnRlbXBsYXRlLnRlc3QuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImV4cGVjdCIsInRvQmUiLCJ0b0NvbnRhaW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBQSxTQUFTLGVBQVQsRUFBMEIsTUFBTTtBQUM5QkMsS0FBRyxpQkFBSCxFQUFzQixNQUFNO0FBQzFCQyxXQUFPLE9BQU8scUJBQWQsRUFBMEJDLElBQTFCLENBQStCLFFBQS9CO0FBQ0QsR0FGRDs7QUFJQUYsS0FBRyx3Q0FBSCxFQUE2QyxNQUFNO0FBQ2pEQyxXQUFPLG9CQUFTLEtBQVQsQ0FBUCxFQUF3QkUsU0FBeEIsQ0FBa0MseUJBQWxDO0FBQ0QsR0FGRDs7QUFJQUgsS0FBRyxpREFBSCxFQUFzRCxNQUFNO0FBQzFEQyxXQUFPLG9CQUFTLEtBQVQsQ0FBUCxFQUF3QkUsU0FBeEIsQ0FBa0MsdUJBQWxDO0FBQ0QsR0FGRDs7QUFJQUgsS0FBRyxzREFBSCxFQUEyRCxNQUFNO0FBQy9EQyxXQUFPLG9CQUFTLEtBQVQsQ0FBUCxFQUF3QkUsU0FBeEIsQ0FBa0MsNkJBQWxDO0FBQ0QsR0FGRDtBQUdELENBaEJEIiwiZmlsZSI6InRlc3QudGVtcGxhdGUudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuLi90ZXN0LnRlbXBsYXRlJ1xuXG5kZXNjcmliZSgnVGVzdCBUZW1wbGF0ZScsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBhIHN0cmluZycsICgpID0+IHtcbiAgICBleHBlY3QodHlwZW9mIHRlbXBsYXRlKCkpLnRvQmUoJ3N0cmluZycpXG4gIH0pXG5cbiAgaXQoJ3Nob3VsZCBpbXBvcnQgY29tcG9uZW50IGZvciBzdG9yeSBib29rJywgKCkgPT4ge1xuICAgIGV4cGVjdCh0ZW1wbGF0ZSgnRm9vJykpLnRvQ29udGFpbihcImltcG9ydCBGb28gZnJvbSAnLi9Gb28nXCIpXG4gIH0pXG5cbiAgaXQoJ3Nob3VsZCBjcmF0ZSBkZXNjcmliZSBibG9jayB3aXRoIGNvbXBvbmVudCBuYW1lJywgKCkgPT4ge1xuICAgIGV4cGVjdCh0ZW1wbGF0ZSgnRm9vJykpLnRvQ29udGFpbihcImRlc2NyaWJlKCdGb28nLCAoKSA9PlwiKVxuICB9KVxuXG4gIGl0KCdzaG91bGQgcmVuZGVyIGNvbXBvbmVudCBmb3IgdGVzdCBpbiBiZWZvcmVFYWNoIGJsb2NrJywgKCkgPT4ge1xuICAgIGV4cGVjdCh0ZW1wbGF0ZSgnRm9vJykpLnRvQ29udGFpbignc2hhbGxvdyg8Rm9vIHsuLi5wcm9wc30gLz4pJylcbiAgfSlcbn0pXG4iXX0=