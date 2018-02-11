"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function generateTestTemplate(COMPONENT_NAME) {
  return `import React from 'react'
import { shallow } from 'enzyme'

import ${COMPONENT_NAME} from './${COMPONENT_NAME}'

describe('${COMPONENT_NAME}', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<${COMPONENT_NAME} {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})`;
}

exports.default = generateTestTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZhdWx0VGVtcGxhdGVzL2pzL3Rlc3QudGVtcGxhdGUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVUZXN0VGVtcGxhdGUiLCJDT01QT05FTlRfTkFNRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxvQkFBVCxDQUE4QkMsY0FBOUIsRUFBOEM7QUFDNUMsU0FBUTs7O1NBR0RBLGNBQWUsWUFBV0EsY0FBZTs7WUFFdENBLGNBQWU7Ozs7OzJCQUtBQSxjQUFlOzs7Ozs7R0FWeEM7QUFpQkQ7O2tCQUVjRCxvQiIsImZpbGUiOiJ0ZXN0LnRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVUZXN0VGVtcGxhdGUoQ09NUE9ORU5UX05BTUUpIHtcbiAgcmV0dXJuIGBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzaGFsbG93IH0gZnJvbSAnZW56eW1lJ1xuXG5pbXBvcnQgJHtDT01QT05FTlRfTkFNRX0gZnJvbSAnLi8ke0NPTVBPTkVOVF9OQU1FfSdcblxuZGVzY3JpYmUoJyR7Q09NUE9ORU5UX05BTUV9JywgKCkgPT4ge1xuICBsZXQgY29tcG9uZW50LCBwcm9wc1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIHByb3BzID0ge31cbiAgICBjb21wb25lbnQgPSBzaGFsbG93KDwke0NPTVBPTkVOVF9OQU1FfSB7Li4ucHJvcHN9IC8+KVxuICB9KVxuXG4gIGl0KCdzaG91bGQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcbn0pYFxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVRlc3RUZW1wbGF0ZVxuIl19