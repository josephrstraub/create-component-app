'use strict';

var _style = require('../style.template');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Class Template', () => {
  it('should a string', () => {
    expect(typeof (0, _style2.default)()).toBe('string');
  });

  it('should have class with component name', () => {
    expect((0, _style2.default)('Foo')).toContain('.Foo{}');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZhdWx0VGVtcGxhdGVzL2Nzcy9fX3Rlc3RzX18vc3R5bGUudGVtcGxhdGUudGVzdC5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiZXhwZWN0IiwidG9CZSIsInRvQ29udGFpbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLFNBQVMsZ0JBQVQsRUFBMkIsTUFBTTtBQUMvQkMsS0FBRyxpQkFBSCxFQUFzQixNQUFNO0FBQzFCQyxXQUFPLE9BQU8sc0JBQWQsRUFBMEJDLElBQTFCLENBQStCLFFBQS9CO0FBQ0QsR0FGRDs7QUFJQUYsS0FBRyx1Q0FBSCxFQUE0QyxNQUFNO0FBQ2hEQyxXQUFPLHFCQUFTLEtBQVQsQ0FBUCxFQUF3QkUsU0FBeEIsQ0FBa0MsUUFBbEM7QUFDRCxHQUZEO0FBR0QsQ0FSRCIsImZpbGUiOiJzdHlsZS50ZW1wbGF0ZS50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4uL3N0eWxlLnRlbXBsYXRlJ1xuXG5kZXNjcmliZSgnQ2xhc3MgVGVtcGxhdGUnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgYSBzdHJpbmcnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHR5cGVvZiB0ZW1wbGF0ZSgpKS50b0JlKCdzdHJpbmcnKVxuICB9KVxuXG4gIGl0KCdzaG91bGQgaGF2ZSBjbGFzcyB3aXRoIGNvbXBvbmVudCBuYW1lJywgKCkgPT4ge1xuICAgIGV4cGVjdCh0ZW1wbGF0ZSgnRm9vJykpLnRvQ29udGFpbignLkZvb3t9JylcbiAgfSlcbn0pXG4iXX0=