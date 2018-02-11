'use strict';

var _common = require('../common.template');

const options = {
  cssExtension: '',
  styleFileName: 'Foo'
};

describe('Common Template', () => {
  it('should a string', () => {
    expect(typeof (0, _common.generateImports)('Foo', 'stateless', options)).toBe('string');
  });

  it('should import proptypes', () => {
    expect((0, _common.generateImports)('Foo', 'stateless', options)).toContain("import PropTypes from 'prop-types'");
  });

  it('should import react when stateless', () => {
    expect((0, _common.generateImports)('Foo', 'stateless', options)).toContain("import React from 'react'");
  });

  it('should import react when class', () => {
    expect((0, _common.generateImports)('Foo', 'class', options)).toContain("import React, { Component } from 'react'");
  });

  it('should import react when pure', () => {
    expect((0, _common.generateImports)('Foo', 'pure', options)).toContain("import React, { PureComponent } from 'react'");
  });

  it('should import component methods', () => {
    const componentMethods = ['shouldComponentUpdate'];
    expect((0, _common.generateClassComponent)('Foo', 'pure', { componentMethods })).toContain('shouldComponentUpdate(){}');
  });

  it('should add styles import with styleFileName and cssExtension', () => {
    const cssExtension = 'css';
    const styleFileName = 'styles';
    expect((0, _common.generateImports)('Foo', 'stateless', { cssExtension, styleFileName })).toContain(`import styles from './${styleFileName}.${cssExtension}`);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZhdWx0VGVtcGxhdGVzL2pzL19fdGVzdHNfXy9jb21tb24udGVtcGxhdGUudGVzdC5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwiY3NzRXh0ZW5zaW9uIiwic3R5bGVGaWxlTmFtZSIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3QiLCJ0b0JlIiwidG9Db250YWluIiwiY29tcG9uZW50TWV0aG9kcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxNQUFNQSxVQUFVO0FBQ2RDLGdCQUFjLEVBREE7QUFFZEMsaUJBQWU7QUFGRCxDQUFoQjs7QUFLQUMsU0FBUyxpQkFBVCxFQUE0QixNQUFNO0FBQ2hDQyxLQUFHLGlCQUFILEVBQXNCLE1BQU07QUFDMUJDLFdBQU8sT0FBTyw2QkFBZ0IsS0FBaEIsRUFBdUIsV0FBdkIsRUFBb0NMLE9BQXBDLENBQWQsRUFBNERNLElBQTVELENBQWlFLFFBQWpFO0FBQ0QsR0FGRDs7QUFJQUYsS0FBRyx5QkFBSCxFQUE4QixNQUFNO0FBQ2xDQyxXQUFPLDZCQUFnQixLQUFoQixFQUF1QixXQUF2QixFQUFvQ0wsT0FBcEMsQ0FBUCxFQUFxRE8sU0FBckQsQ0FDRSxvQ0FERjtBQUdELEdBSkQ7O0FBTUFILEtBQUcsb0NBQUgsRUFBeUMsTUFBTTtBQUM3Q0MsV0FBTyw2QkFBZ0IsS0FBaEIsRUFBdUIsV0FBdkIsRUFBb0NMLE9BQXBDLENBQVAsRUFBcURPLFNBQXJELENBQ0UsMkJBREY7QUFHRCxHQUpEOztBQU1BSCxLQUFHLGdDQUFILEVBQXFDLE1BQU07QUFDekNDLFdBQU8sNkJBQWdCLEtBQWhCLEVBQXVCLE9BQXZCLEVBQWdDTCxPQUFoQyxDQUFQLEVBQWlETyxTQUFqRCxDQUNFLDBDQURGO0FBR0QsR0FKRDs7QUFNQUgsS0FBRywrQkFBSCxFQUFvQyxNQUFNO0FBQ3hDQyxXQUFPLDZCQUFnQixLQUFoQixFQUF1QixNQUF2QixFQUErQkwsT0FBL0IsQ0FBUCxFQUFnRE8sU0FBaEQsQ0FDRSw4Q0FERjtBQUdELEdBSkQ7O0FBTUFILEtBQUcsaUNBQUgsRUFBc0MsTUFBTTtBQUMxQyxVQUFNSSxtQkFBbUIsQ0FBQyx1QkFBRCxDQUF6QjtBQUNBSCxXQUNFLG9DQUF1QixLQUF2QixFQUE4QixNQUE5QixFQUFzQyxFQUFFRyxnQkFBRixFQUF0QyxDQURGLEVBRUVELFNBRkYsQ0FFWSwyQkFGWjtBQUdELEdBTEQ7O0FBT0FILEtBQUcsOERBQUgsRUFBbUUsTUFBTTtBQUN2RSxVQUFNSCxlQUFlLEtBQXJCO0FBQ0EsVUFBTUMsZ0JBQWdCLFFBQXRCO0FBQ0FHLFdBQ0UsNkJBQWdCLEtBQWhCLEVBQXVCLFdBQXZCLEVBQW9DLEVBQUVKLFlBQUYsRUFBZ0JDLGFBQWhCLEVBQXBDLENBREYsRUFFRUssU0FGRixDQUVhLHlCQUF3QkwsYUFBYyxJQUFHRCxZQUFhLEVBRm5FO0FBR0QsR0FORDtBQU9ELENBM0NEIiwiZmlsZSI6ImNvbW1vbi50ZW1wbGF0ZS50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuZXJhdGVJbXBvcnRzLCBnZW5lcmF0ZUNsYXNzQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLnRlbXBsYXRlJ1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBjc3NFeHRlbnNpb246ICcnLFxuICBzdHlsZUZpbGVOYW1lOiAnRm9vJyxcbn1cblxuZGVzY3JpYmUoJ0NvbW1vbiBUZW1wbGF0ZScsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBhIHN0cmluZycsICgpID0+IHtcbiAgICBleHBlY3QodHlwZW9mIGdlbmVyYXRlSW1wb3J0cygnRm9vJywgJ3N0YXRlbGVzcycsIG9wdGlvbnMpKS50b0JlKCdzdHJpbmcnKVxuICB9KVxuXG4gIGl0KCdzaG91bGQgaW1wb3J0IHByb3B0eXBlcycsICgpID0+IHtcbiAgICBleHBlY3QoZ2VuZXJhdGVJbXBvcnRzKCdGb28nLCAnc3RhdGVsZXNzJywgb3B0aW9ucykpLnRvQ29udGFpbihcbiAgICAgIFwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1wiXG4gICAgKVxuICB9KVxuXG4gIGl0KCdzaG91bGQgaW1wb3J0IHJlYWN0IHdoZW4gc3RhdGVsZXNzJywgKCkgPT4ge1xuICAgIGV4cGVjdChnZW5lcmF0ZUltcG9ydHMoJ0ZvbycsICdzdGF0ZWxlc3MnLCBvcHRpb25zKSkudG9Db250YWluKFxuICAgICAgXCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXCJcbiAgICApXG4gIH0pXG5cbiAgaXQoJ3Nob3VsZCBpbXBvcnQgcmVhY3Qgd2hlbiBjbGFzcycsICgpID0+IHtcbiAgICBleHBlY3QoZ2VuZXJhdGVJbXBvcnRzKCdGb28nLCAnY2xhc3MnLCBvcHRpb25zKSkudG9Db250YWluKFxuICAgICAgXCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXCJcbiAgICApXG4gIH0pXG5cbiAgaXQoJ3Nob3VsZCBpbXBvcnQgcmVhY3Qgd2hlbiBwdXJlJywgKCkgPT4ge1xuICAgIGV4cGVjdChnZW5lcmF0ZUltcG9ydHMoJ0ZvbycsICdwdXJlJywgb3B0aW9ucykpLnRvQ29udGFpbihcbiAgICAgIFwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcIlxuICAgIClcbiAgfSlcblxuICBpdCgnc2hvdWxkIGltcG9ydCBjb21wb25lbnQgbWV0aG9kcycsICgpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRNZXRob2RzID0gWydzaG91bGRDb21wb25lbnRVcGRhdGUnXVxuICAgIGV4cGVjdChcbiAgICAgIGdlbmVyYXRlQ2xhc3NDb21wb25lbnQoJ0ZvbycsICdwdXJlJywgeyBjb21wb25lbnRNZXRob2RzIH0pXG4gICAgKS50b0NvbnRhaW4oJ3Nob3VsZENvbXBvbmVudFVwZGF0ZSgpe30nKVxuICB9KVxuXG4gIGl0KCdzaG91bGQgYWRkIHN0eWxlcyBpbXBvcnQgd2l0aCBzdHlsZUZpbGVOYW1lIGFuZCBjc3NFeHRlbnNpb24nLCAoKSA9PiB7XG4gICAgY29uc3QgY3NzRXh0ZW5zaW9uID0gJ2NzcydcbiAgICBjb25zdCBzdHlsZUZpbGVOYW1lID0gJ3N0eWxlcydcbiAgICBleHBlY3QoXG4gICAgICBnZW5lcmF0ZUltcG9ydHMoJ0ZvbycsICdzdGF0ZWxlc3MnLCB7IGNzc0V4dGVuc2lvbiwgc3R5bGVGaWxlTmFtZSB9KVxuICAgICkudG9Db250YWluKGBpbXBvcnQgc3R5bGVzIGZyb20gJy4vJHtzdHlsZUZpbGVOYW1lfS4ke2Nzc0V4dGVuc2lvbn1gKVxuICB9KVxufSlcbiJdfQ==