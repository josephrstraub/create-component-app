'use strict';

var _class = require('../class.template');

var _class2 = _interopRequireDefault(_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const options = {
  cssExtension: '',
  styleFileName: 'Foo'
};

describe('Class Template', () => {
  it('should a string', () => {
    expect(typeof (0, _class2.default)('Foo', 'stateless', options)).toBe('string');
  });

  it('should have class with component name', () => {
    expect((0, _class2.default)('Foo', 'class', options)).toContain('class Foo extends Component');
  });

  it('should extend component with propTypes', () => {
    expect((0, _class2.default)('Foo', 'class', options)).toContain('Foo.propTypes');
  });

  it('should extend component with defaultProps', () => {
    expect((0, _class2.default)('Foo', 'class', options)).toContain('Foo.defaultProps');
  });

  it('should export component', () => {
    expect((0, _class2.default)('Foo', 'class', options)).toContain('export default Foo');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZhdWx0VGVtcGxhdGVzL2pzL19fdGVzdHNfXy9jbGFzcy50ZW1wbGF0ZS50ZXN0LmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJjc3NFeHRlbnNpb24iLCJzdHlsZUZpbGVOYW1lIiwiZGVzY3JpYmUiLCJpdCIsImV4cGVjdCIsInRvQmUiLCJ0b0NvbnRhaW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBLE1BQU1BLFVBQVU7QUFDZEMsZ0JBQWMsRUFEQTtBQUVkQyxpQkFBZTtBQUZELENBQWhCOztBQUtBQyxTQUFTLGdCQUFULEVBQTJCLE1BQU07QUFDL0JDLEtBQUcsaUJBQUgsRUFBc0IsTUFBTTtBQUMxQkMsV0FBTyxPQUFPLHFCQUFTLEtBQVQsRUFBZ0IsV0FBaEIsRUFBNkJMLE9BQTdCLENBQWQsRUFBcURNLElBQXJELENBQTBELFFBQTFEO0FBQ0QsR0FGRDs7QUFJQUYsS0FBRyx1Q0FBSCxFQUE0QyxNQUFNO0FBQ2hEQyxXQUFPLHFCQUFTLEtBQVQsRUFBZ0IsT0FBaEIsRUFBeUJMLE9BQXpCLENBQVAsRUFBMENPLFNBQTFDLENBQ0UsNkJBREY7QUFHRCxHQUpEOztBQU1BSCxLQUFHLHdDQUFILEVBQTZDLE1BQU07QUFDakRDLFdBQU8scUJBQVMsS0FBVCxFQUFnQixPQUFoQixFQUF5QkwsT0FBekIsQ0FBUCxFQUEwQ08sU0FBMUMsQ0FBb0QsZUFBcEQ7QUFDRCxHQUZEOztBQUlBSCxLQUFHLDJDQUFILEVBQWdELE1BQU07QUFDcERDLFdBQU8scUJBQVMsS0FBVCxFQUFnQixPQUFoQixFQUF5QkwsT0FBekIsQ0FBUCxFQUEwQ08sU0FBMUMsQ0FBb0Qsa0JBQXBEO0FBQ0QsR0FGRDs7QUFJQUgsS0FBRyx5QkFBSCxFQUE4QixNQUFNO0FBQ2xDQyxXQUFPLHFCQUFTLEtBQVQsRUFBZ0IsT0FBaEIsRUFBeUJMLE9BQXpCLENBQVAsRUFBMENPLFNBQTFDLENBQW9ELG9CQUFwRDtBQUNELEdBRkQ7QUFHRCxDQXRCRCIsImZpbGUiOiJjbGFzcy50ZW1wbGF0ZS50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4uL2NsYXNzLnRlbXBsYXRlJ1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBjc3NFeHRlbnNpb246ICcnLFxuICBzdHlsZUZpbGVOYW1lOiAnRm9vJyxcbn1cblxuZGVzY3JpYmUoJ0NsYXNzIFRlbXBsYXRlJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIGEgc3RyaW5nJywgKCkgPT4ge1xuICAgIGV4cGVjdCh0eXBlb2YgdGVtcGxhdGUoJ0ZvbycsICdzdGF0ZWxlc3MnLCBvcHRpb25zKSkudG9CZSgnc3RyaW5nJylcbiAgfSlcblxuICBpdCgnc2hvdWxkIGhhdmUgY2xhc3Mgd2l0aCBjb21wb25lbnQgbmFtZScsICgpID0+IHtcbiAgICBleHBlY3QodGVtcGxhdGUoJ0ZvbycsICdjbGFzcycsIG9wdGlvbnMpKS50b0NvbnRhaW4oXG4gICAgICAnY2xhc3MgRm9vIGV4dGVuZHMgQ29tcG9uZW50J1xuICAgIClcbiAgfSlcblxuICBpdCgnc2hvdWxkIGV4dGVuZCBjb21wb25lbnQgd2l0aCBwcm9wVHlwZXMnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHRlbXBsYXRlKCdGb28nLCAnY2xhc3MnLCBvcHRpb25zKSkudG9Db250YWluKCdGb28ucHJvcFR5cGVzJylcbiAgfSlcblxuICBpdCgnc2hvdWxkIGV4dGVuZCBjb21wb25lbnQgd2l0aCBkZWZhdWx0UHJvcHMnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHRlbXBsYXRlKCdGb28nLCAnY2xhc3MnLCBvcHRpb25zKSkudG9Db250YWluKCdGb28uZGVmYXVsdFByb3BzJylcbiAgfSlcblxuICBpdCgnc2hvdWxkIGV4cG9ydCBjb21wb25lbnQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHRlbXBsYXRlKCdGb28nLCAnY2xhc3MnLCBvcHRpb25zKSkudG9Db250YWluKCdleHBvcnQgZGVmYXVsdCBGb28nKVxuICB9KVxufSlcbiJdfQ==