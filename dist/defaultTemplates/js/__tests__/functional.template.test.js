'use strict';

var _functional = require('../functional.template');

var _functional2 = _interopRequireDefault(_functional);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Functional Template', () => {
  it('should a string', () => {
    expect(typeof (0, _functional2.default)()).toBe('string');
  });

  it('should create const with component name', () => {
    expect((0, _functional2.default)('Foo')).toContain('const Foo = ({}) =>');
  });

  it('should extend component with propTypes', () => {
    expect((0, _functional2.default)('Foo')).toContain('Foo.propTypes');
  });

  it('should extend component with defaultProps', () => {
    expect((0, _functional2.default)('Foo')).toContain('Foo.defaultProps');
  });

  it('should export component', () => {
    expect((0, _functional2.default)('Foo')).toContain('export default Foo');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZhdWx0VGVtcGxhdGVzL2pzL19fdGVzdHNfXy9mdW5jdGlvbmFsLnRlbXBsYXRlLnRlc3QuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImV4cGVjdCIsInRvQmUiLCJ0b0NvbnRhaW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBQSxTQUFTLHFCQUFULEVBQWdDLE1BQU07QUFDcENDLEtBQUcsaUJBQUgsRUFBc0IsTUFBTTtBQUMxQkMsV0FBTyxPQUFPLDJCQUFkLEVBQTBCQyxJQUExQixDQUErQixRQUEvQjtBQUNELEdBRkQ7O0FBSUFGLEtBQUcseUNBQUgsRUFBOEMsTUFBTTtBQUNsREMsV0FBTywwQkFBUyxLQUFULENBQVAsRUFBd0JFLFNBQXhCLENBQWtDLHFCQUFsQztBQUNELEdBRkQ7O0FBSUFILEtBQUcsd0NBQUgsRUFBNkMsTUFBTTtBQUNqREMsV0FBTywwQkFBUyxLQUFULENBQVAsRUFBd0JFLFNBQXhCLENBQWtDLGVBQWxDO0FBQ0QsR0FGRDs7QUFJQUgsS0FBRywyQ0FBSCxFQUFnRCxNQUFNO0FBQ3BEQyxXQUFPLDBCQUFTLEtBQVQsQ0FBUCxFQUF3QkUsU0FBeEIsQ0FBa0Msa0JBQWxDO0FBQ0QsR0FGRDs7QUFJQUgsS0FBRyx5QkFBSCxFQUE4QixNQUFNO0FBQ2xDQyxXQUFPLDBCQUFTLEtBQVQsQ0FBUCxFQUF3QkUsU0FBeEIsQ0FBa0Msb0JBQWxDO0FBQ0QsR0FGRDtBQUdELENBcEJEIiwiZmlsZSI6ImZ1bmN0aW9uYWwudGVtcGxhdGUudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuLi9mdW5jdGlvbmFsLnRlbXBsYXRlJ1xuXG5kZXNjcmliZSgnRnVuY3Rpb25hbCBUZW1wbGF0ZScsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBhIHN0cmluZycsICgpID0+IHtcbiAgICBleHBlY3QodHlwZW9mIHRlbXBsYXRlKCkpLnRvQmUoJ3N0cmluZycpXG4gIH0pXG5cbiAgaXQoJ3Nob3VsZCBjcmVhdGUgY29uc3Qgd2l0aCBjb21wb25lbnQgbmFtZScsICgpID0+IHtcbiAgICBleHBlY3QodGVtcGxhdGUoJ0ZvbycpKS50b0NvbnRhaW4oJ2NvbnN0IEZvbyA9ICh7fSkgPT4nKVxuICB9KVxuXG4gIGl0KCdzaG91bGQgZXh0ZW5kIGNvbXBvbmVudCB3aXRoIHByb3BUeXBlcycsICgpID0+IHtcbiAgICBleHBlY3QodGVtcGxhdGUoJ0ZvbycpKS50b0NvbnRhaW4oJ0Zvby5wcm9wVHlwZXMnKVxuICB9KVxuXG4gIGl0KCdzaG91bGQgZXh0ZW5kIGNvbXBvbmVudCB3aXRoIGRlZmF1bHRQcm9wcycsICgpID0+IHtcbiAgICBleHBlY3QodGVtcGxhdGUoJ0ZvbycpKS50b0NvbnRhaW4oJ0Zvby5kZWZhdWx0UHJvcHMnKVxuICB9KVxuXG4gIGl0KCdzaG91bGQgZXhwb3J0IGNvbXBvbmVudCcsICgpID0+IHtcbiAgICBleHBlY3QodGVtcGxhdGUoJ0ZvbycpKS50b0NvbnRhaW4oJ2V4cG9ydCBkZWZhdWx0IEZvbycpXG4gIH0pXG59KVxuIl19