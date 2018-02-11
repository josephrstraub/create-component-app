'use strict';

var _storybook = require('../storybook.template');

var _storybook2 = _interopRequireDefault(_storybook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Storybook Template', () => {
  it('should a string', () => {
    expect(typeof (0, _storybook2.default)()).toBe('string');
  });

  it('should import component for story book', () => {
    expect((0, _storybook2.default)('Foo')).toContain("import Foo from './Foo'");
  });

  it('should crate story with component name', () => {
    expect((0, _storybook2.default)('Foo')).toContain("storiesOf('Foo', module)");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZhdWx0VGVtcGxhdGVzL2pzL19fdGVzdHNfXy9zdG9yeWJvb2sudGVtcGxhdGUudGVzdC5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiZXhwZWN0IiwidG9CZSIsInRvQ29udGFpbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLFNBQVMsb0JBQVQsRUFBK0IsTUFBTTtBQUNuQ0MsS0FBRyxpQkFBSCxFQUFzQixNQUFNO0FBQzFCQyxXQUFPLE9BQU8sMEJBQWQsRUFBMEJDLElBQTFCLENBQStCLFFBQS9CO0FBQ0QsR0FGRDs7QUFJQUYsS0FBRyx3Q0FBSCxFQUE2QyxNQUFNO0FBQ2pEQyxXQUFPLHlCQUFTLEtBQVQsQ0FBUCxFQUF3QkUsU0FBeEIsQ0FBa0MseUJBQWxDO0FBQ0QsR0FGRDs7QUFJQUgsS0FBRyx3Q0FBSCxFQUE2QyxNQUFNO0FBQ2pEQyxXQUFPLHlCQUFTLEtBQVQsQ0FBUCxFQUF3QkUsU0FBeEIsQ0FBa0MsMEJBQWxDO0FBQ0QsR0FGRDtBQUdELENBWkQiLCJmaWxlIjoic3Rvcnlib29rLnRlbXBsYXRlLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi4vc3Rvcnlib29rLnRlbXBsYXRlJ1xuXG5kZXNjcmliZSgnU3Rvcnlib29rIFRlbXBsYXRlJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIGEgc3RyaW5nJywgKCkgPT4ge1xuICAgIGV4cGVjdCh0eXBlb2YgdGVtcGxhdGUoKSkudG9CZSgnc3RyaW5nJylcbiAgfSlcblxuICBpdCgnc2hvdWxkIGltcG9ydCBjb21wb25lbnQgZm9yIHN0b3J5IGJvb2snLCAoKSA9PiB7XG4gICAgZXhwZWN0KHRlbXBsYXRlKCdGb28nKSkudG9Db250YWluKFwiaW1wb3J0IEZvbyBmcm9tICcuL0ZvbydcIilcbiAgfSlcblxuICBpdCgnc2hvdWxkIGNyYXRlIHN0b3J5IHdpdGggY29tcG9uZW50IG5hbWUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHRlbXBsYXRlKCdGb28nKSkudG9Db250YWluKFwic3Rvcmllc09mKCdGb28nLCBtb2R1bGUpXCIpXG4gIH0pXG59KVxuIl19