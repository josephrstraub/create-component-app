"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function generateReduxConnect(COMPONENT_NAME) {
    return `import ${COMPONENT_NAME} from './${COMPONENT_NAME}'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(${COMPONENT_NAME})
`;
}

function generateIndexFile(COMPONENT_NAME, connected) {
    if (connected) {
        return generateReduxConnect(COMPONENT_NAME);
    }

    return `import ${COMPONENT_NAME} from './${COMPONENT_NAME}'

export default ${COMPONENT_NAME}
`;
}

exports.default = generateIndexFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZhdWx0VGVtcGxhdGVzL2pzL2luZGV4LnRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlUmVkdXhDb25uZWN0IiwiQ09NUE9ORU5UX05BTUUiLCJnZW5lcmF0ZUluZGV4RmlsZSIsImNvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxvQkFBVCxDQUE4QkMsY0FBOUIsRUFBOEM7QUFDNUMsV0FBUSxVQUFTQSxjQUFlLFlBQVdBLGNBQWU7Ozs7Ozs7Ozs7Ozs7O0lBY3hEQSxjQUFlO0NBZGpCO0FBZ0JEOztBQUVELFNBQVNDLGlCQUFULENBQTJCRCxjQUEzQixFQUEyQ0UsU0FBM0MsRUFBc0Q7QUFDcEQsUUFBSUEsU0FBSixFQUFlO0FBQ2IsZUFBT0gscUJBQXFCQyxjQUFyQixDQUFQO0FBQ0Q7O0FBRUQsV0FBUSxVQUFTQSxjQUFlLFlBQVdBLGNBQWU7O2lCQUUzQ0EsY0FBZTtDQUY5QjtBQUlEOztrQkFFY0MsaUIiLCJmaWxlIjoiaW5kZXgudGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZW5lcmF0ZVJlZHV4Q29ubmVjdChDT01QT05FTlRfTkFNRSkge1xuICByZXR1cm4gYGltcG9ydCAke0NPTVBPTkVOVF9OQU1FfSBmcm9tICcuLyR7Q09NUE9ORU5UX05BTUV9J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHt9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoJHtDT01QT05FTlRfTkFNRX0pXG5gXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW5kZXhGaWxlKENPTVBPTkVOVF9OQU1FLCBjb25uZWN0ZWQpIHtcbiAgaWYgKGNvbm5lY3RlZCkge1xuICAgIHJldHVybiBnZW5lcmF0ZVJlZHV4Q29ubmVjdChDT01QT05FTlRfTkFNRSlcbiAgfVxuXG4gIHJldHVybiBgaW1wb3J0ICR7Q09NUE9ORU5UX05BTUV9IGZyb20gJy4vJHtDT01QT05FTlRfTkFNRX0nXG5cbmV4cG9ydCBkZWZhdWx0ICR7Q09NUE9ORU5UX05BTUV9XG5gXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSW5kZXhGaWxlXG4iXX0=