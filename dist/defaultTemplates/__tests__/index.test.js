'use strict';

const mockClassTemplate = jest.fn();
const mockFunctionalTemplate = jest.fn();
const mockTestTemplate = jest.fn();
const mockStorybookTemplate = jest.fn();
const mockIndexTemplate = jest.fn();
const mockStyleTemplate = jest.fn();

jest.mock('../js/class.template', () => mockClassTemplate).mock('../js/functional.template', () => mockFunctionalTemplate).mock('../js/test.template', () => mockTestTemplate).mock('../js/storybook.template', () => mockStorybookTemplate).mock('../js/index.template', () => mockIndexTemplate).mock('../css/style.template', () => mockStyleTemplate);

var _require = require('../index');

const generateComponentTemplate = _require.generateComponentTemplate,
      generateStyleFile = _require.generateStyleFile,
      generateIndexFile = _require.generateIndexFile,
      generateTestTemplate = _require.generateTestTemplate,
      generateStorybookTemplate = _require.generateStorybookTemplate;


describe('Template index', () => {
  afterEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  it('should call class.template when class is passed into generateComponentTemplate', () => {
    generateComponentTemplate('class', 'test');
    expect(mockClassTemplate).toHaveBeenCalledWith('test', 'class', {});
  });

  it('should call pure.template when pure is passed into generateComponentTemplate', () => {
    generateComponentTemplate('pure', 'test');
    expect(mockClassTemplate).toHaveBeenCalledWith('test', 'pure', {});
  });

  it('should call functional.template when stateless is passed into generateComponentTemplate', () => {
    generateComponentTemplate('stateless', 'test');
    expect(mockFunctionalTemplate).toHaveBeenCalledWith('test', 'stateless', {});
  });

  it('should export generateIndexFile with correct module', () => {
    generateIndexFile();
    expect(mockIndexTemplate).toHaveBeenCalled();
  });

  it('should export generateTestTemplate with correct module', () => {
    generateTestTemplate();
    expect(mockTestTemplate).toHaveBeenCalled();
  });

  it('should export generateStorybookTemplate with correct module', () => {
    generateStorybookTemplate();
    expect(mockStorybookTemplate).toHaveBeenCalled();
  });

  it('should export generateStyleFile with correct module', () => {
    generateStyleFile();
    expect(mockStyleTemplate).toHaveBeenCalled();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZhdWx0VGVtcGxhdGVzL19fdGVzdHNfXy9pbmRleC50ZXN0LmpzIl0sIm5hbWVzIjpbIm1vY2tDbGFzc1RlbXBsYXRlIiwiamVzdCIsImZuIiwibW9ja0Z1bmN0aW9uYWxUZW1wbGF0ZSIsIm1vY2tUZXN0VGVtcGxhdGUiLCJtb2NrU3Rvcnlib29rVGVtcGxhdGUiLCJtb2NrSW5kZXhUZW1wbGF0ZSIsIm1vY2tTdHlsZVRlbXBsYXRlIiwibW9jayIsInJlcXVpcmUiLCJnZW5lcmF0ZUNvbXBvbmVudFRlbXBsYXRlIiwiZ2VuZXJhdGVTdHlsZUZpbGUiLCJnZW5lcmF0ZUluZGV4RmlsZSIsImdlbmVyYXRlVGVzdFRlbXBsYXRlIiwiZ2VuZXJhdGVTdG9yeWJvb2tUZW1wbGF0ZSIsImRlc2NyaWJlIiwiYWZ0ZXJFYWNoIiwicmVzZXRNb2R1bGVzIiwicmVzZXRBbGxNb2NrcyIsIml0IiwiZXhwZWN0IiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJ0b0hhdmVCZWVuQ2FsbGVkIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLG9CQUFvQkMsS0FBS0MsRUFBTCxFQUExQjtBQUNBLE1BQU1DLHlCQUF5QkYsS0FBS0MsRUFBTCxFQUEvQjtBQUNBLE1BQU1FLG1CQUFtQkgsS0FBS0MsRUFBTCxFQUF6QjtBQUNBLE1BQU1HLHdCQUF3QkosS0FBS0MsRUFBTCxFQUE5QjtBQUNBLE1BQU1JLG9CQUFvQkwsS0FBS0MsRUFBTCxFQUExQjtBQUNBLE1BQU1LLG9CQUFvQk4sS0FBS0MsRUFBTCxFQUExQjs7QUFFQUQsS0FDS08sSUFETCxDQUNVLHNCQURWLEVBQ2tDLE1BQU1SLGlCQUR4QyxFQUVLUSxJQUZMLENBRVUsMkJBRlYsRUFFdUMsTUFBTUwsc0JBRjdDLEVBR0tLLElBSEwsQ0FHVSxxQkFIVixFQUdpQyxNQUFNSixnQkFIdkMsRUFJS0ksSUFKTCxDQUlVLDBCQUpWLEVBSXNDLE1BQU1ILHFCQUo1QyxFQUtLRyxJQUxMLENBS1Usc0JBTFYsRUFLa0MsTUFBTUYsaUJBTHhDLEVBTUtFLElBTkwsQ0FNVSx1QkFOVixFQU1tQyxNQUFNRCxpQkFOekM7O2VBY0lFLFFBQVEsVUFBUixDOztNQUxBQyx5QixZQUFBQSx5QjtNQUNBQyxpQixZQUFBQSxpQjtNQUNBQyxpQixZQUFBQSxpQjtNQUNBQyxvQixZQUFBQSxvQjtNQUNBQyx5QixZQUFBQSx5Qjs7O0FBR0pDLFNBQVMsZ0JBQVQsRUFBMkIsTUFBTTtBQUMvQkMsWUFBVSxNQUFNO0FBQ2RmLFNBQUtnQixZQUFMO0FBQ0FoQixTQUFLaUIsYUFBTDtBQUNELEdBSEQ7O0FBS0FDLEtBQUcsZ0ZBQUgsRUFBcUYsTUFBTTtBQUN6RlQsOEJBQTBCLE9BQTFCLEVBQW1DLE1BQW5DO0FBQ0FVLFdBQU9wQixpQkFBUCxFQUEwQnFCLG9CQUExQixDQUErQyxNQUEvQyxFQUF1RCxPQUF2RCxFQUFnRSxFQUFoRTtBQUNELEdBSEQ7O0FBS0FGLEtBQUcsOEVBQUgsRUFBbUYsTUFBTTtBQUN2RlQsOEJBQTBCLE1BQTFCLEVBQWtDLE1BQWxDO0FBQ0FVLFdBQU9wQixpQkFBUCxFQUEwQnFCLG9CQUExQixDQUErQyxNQUEvQyxFQUF1RCxNQUF2RCxFQUErRCxFQUEvRDtBQUNELEdBSEQ7O0FBS0FGLEtBQUcseUZBQUgsRUFBOEYsTUFBTTtBQUNsR1QsOEJBQTBCLFdBQTFCLEVBQXVDLE1BQXZDO0FBQ0FVLFdBQU9qQixzQkFBUCxFQUErQmtCLG9CQUEvQixDQUFvRCxNQUFwRCxFQUE0RCxXQUE1RCxFQUF5RSxFQUF6RTtBQUNELEdBSEQ7O0FBS0FGLEtBQUcscURBQUgsRUFBMEQsTUFBTTtBQUM5RFA7QUFDQVEsV0FBT2QsaUJBQVAsRUFBMEJnQixnQkFBMUI7QUFDRCxHQUhEOztBQUtBSCxLQUFHLHdEQUFILEVBQTZELE1BQU07QUFDakVOO0FBQ0FPLFdBQU9oQixnQkFBUCxFQUF5QmtCLGdCQUF6QjtBQUNELEdBSEQ7O0FBS0FILEtBQUcsNkRBQUgsRUFBa0UsTUFBTTtBQUN0RUw7QUFDQU0sV0FBT2YscUJBQVAsRUFBOEJpQixnQkFBOUI7QUFDRCxHQUhEOztBQUtBSCxLQUFHLHFEQUFILEVBQTBELE1BQU07QUFDOURSO0FBQ0FTLFdBQU9iLGlCQUFQLEVBQTBCZSxnQkFBMUI7QUFDRCxHQUhEO0FBSUQsQ0F4Q0QiLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vY2tDbGFzc1RlbXBsYXRlID0gamVzdC5mbigpXG5jb25zdCBtb2NrRnVuY3Rpb25hbFRlbXBsYXRlID0gamVzdC5mbigpXG5jb25zdCBtb2NrVGVzdFRlbXBsYXRlID0gamVzdC5mbigpXG5jb25zdCBtb2NrU3Rvcnlib29rVGVtcGxhdGUgPSBqZXN0LmZuKClcbmNvbnN0IG1vY2tJbmRleFRlbXBsYXRlID0gamVzdC5mbigpXG5jb25zdCBtb2NrU3R5bGVUZW1wbGF0ZSA9IGplc3QuZm4oKVxuXG5qZXN0XG4gICAgLm1vY2soJy4uL2pzL2NsYXNzLnRlbXBsYXRlJywgKCkgPT4gbW9ja0NsYXNzVGVtcGxhdGUpXG4gICAgLm1vY2soJy4uL2pzL2Z1bmN0aW9uYWwudGVtcGxhdGUnLCAoKSA9PiBtb2NrRnVuY3Rpb25hbFRlbXBsYXRlKVxuICAgIC5tb2NrKCcuLi9qcy90ZXN0LnRlbXBsYXRlJywgKCkgPT4gbW9ja1Rlc3RUZW1wbGF0ZSlcbiAgICAubW9jaygnLi4vanMvc3Rvcnlib29rLnRlbXBsYXRlJywgKCkgPT4gbW9ja1N0b3J5Ym9va1RlbXBsYXRlKVxuICAgIC5tb2NrKCcuLi9qcy9pbmRleC50ZW1wbGF0ZScsICgpID0+IG1vY2tJbmRleFRlbXBsYXRlKVxuICAgIC5tb2NrKCcuLi9jc3Mvc3R5bGUudGVtcGxhdGUnLCAoKSA9PiBtb2NrU3R5bGVUZW1wbGF0ZSlcblxuY29uc3Qge1xuICAgIGdlbmVyYXRlQ29tcG9uZW50VGVtcGxhdGUsXG4gICAgZ2VuZXJhdGVTdHlsZUZpbGUsXG4gICAgZ2VuZXJhdGVJbmRleEZpbGUsXG4gICAgZ2VuZXJhdGVUZXN0VGVtcGxhdGUsXG4gICAgZ2VuZXJhdGVTdG9yeWJvb2tUZW1wbGF0ZSxcbn0gPSByZXF1aXJlKCcuLi9pbmRleCcpXG5cbmRlc2NyaWJlKCdUZW1wbGF0ZSBpbmRleCcsICgpID0+IHtcbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBqZXN0LnJlc2V0TW9kdWxlcygpXG4gICAgamVzdC5yZXNldEFsbE1vY2tzKClcbiAgfSlcblxuICBpdCgnc2hvdWxkIGNhbGwgY2xhc3MudGVtcGxhdGUgd2hlbiBjbGFzcyBpcyBwYXNzZWQgaW50byBnZW5lcmF0ZUNvbXBvbmVudFRlbXBsYXRlJywgKCkgPT4ge1xuICAgIGdlbmVyYXRlQ29tcG9uZW50VGVtcGxhdGUoJ2NsYXNzJywgJ3Rlc3QnKVxuICAgIGV4cGVjdChtb2NrQ2xhc3NUZW1wbGF0ZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ3Rlc3QnLCAnY2xhc3MnLCB7fSlcbiAgfSlcblxuICBpdCgnc2hvdWxkIGNhbGwgcHVyZS50ZW1wbGF0ZSB3aGVuIHB1cmUgaXMgcGFzc2VkIGludG8gZ2VuZXJhdGVDb21wb25lbnRUZW1wbGF0ZScsICgpID0+IHtcbiAgICBnZW5lcmF0ZUNvbXBvbmVudFRlbXBsYXRlKCdwdXJlJywgJ3Rlc3QnKVxuICAgIGV4cGVjdChtb2NrQ2xhc3NUZW1wbGF0ZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ3Rlc3QnLCAncHVyZScsIHt9KVxuICB9KVxuXG4gIGl0KCdzaG91bGQgY2FsbCBmdW5jdGlvbmFsLnRlbXBsYXRlIHdoZW4gc3RhdGVsZXNzIGlzIHBhc3NlZCBpbnRvIGdlbmVyYXRlQ29tcG9uZW50VGVtcGxhdGUnLCAoKSA9PiB7XG4gICAgZ2VuZXJhdGVDb21wb25lbnRUZW1wbGF0ZSgnc3RhdGVsZXNzJywgJ3Rlc3QnKVxuICAgIGV4cGVjdChtb2NrRnVuY3Rpb25hbFRlbXBsYXRlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCgndGVzdCcsICdzdGF0ZWxlc3MnLCB7fSlcbiAgfSlcblxuICBpdCgnc2hvdWxkIGV4cG9ydCBnZW5lcmF0ZUluZGV4RmlsZSB3aXRoIGNvcnJlY3QgbW9kdWxlJywgKCkgPT4ge1xuICAgIGdlbmVyYXRlSW5kZXhGaWxlKClcbiAgICBleHBlY3QobW9ja0luZGV4VGVtcGxhdGUpLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICB9KVxuXG4gIGl0KCdzaG91bGQgZXhwb3J0IGdlbmVyYXRlVGVzdFRlbXBsYXRlIHdpdGggY29ycmVjdCBtb2R1bGUnLCAoKSA9PiB7XG4gICAgZ2VuZXJhdGVUZXN0VGVtcGxhdGUoKVxuICAgIGV4cGVjdChtb2NrVGVzdFRlbXBsYXRlKS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcblxuICBpdCgnc2hvdWxkIGV4cG9ydCBnZW5lcmF0ZVN0b3J5Ym9va1RlbXBsYXRlIHdpdGggY29ycmVjdCBtb2R1bGUnLCAoKSA9PiB7XG4gICAgZ2VuZXJhdGVTdG9yeWJvb2tUZW1wbGF0ZSgpXG4gICAgZXhwZWN0KG1vY2tTdG9yeWJvb2tUZW1wbGF0ZSkudG9IYXZlQmVlbkNhbGxlZCgpXG4gIH0pXG5cbiAgaXQoJ3Nob3VsZCBleHBvcnQgZ2VuZXJhdGVTdHlsZUZpbGUgd2l0aCBjb3JyZWN0IG1vZHVsZScsICgpID0+IHtcbiAgICBnZW5lcmF0ZVN0eWxlRmlsZSgpXG4gICAgZXhwZWN0KG1vY2tTdHlsZVRlbXBsYXRlKS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcbn0pXG4iXX0=