'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const questions = {
  type: {
    type: 'list',
    name: 'type',
    message: 'What kind of components do you want to create ?',
    choices: ['stateless', 'class', 'pure']
  },
  name: {
    type: 'input',
    name: 'name',
    message: 'What is the name of the component ?',
    default: 'ComponentName'
  },
  connected: {
    type: 'confirm',
    name: 'connected',
    message: 'Do you want to connect the component to redux ?',
    default: false
  },
  indexFile: {
    type: 'confirm',
    name: 'indexFile',
    message: 'Do you want an index file on your folder ?',
    default: false
  },
  jsExtension: {
    type: 'list',
    name: 'jsExtension',
    message: 'What kind of extension do you use for js files ?',
    choices: ['js', 'jsx']
  },
  cssExtension: {
    type: 'list',
    name: 'cssExtension',
    message: 'What kind of extension do you use for style file ?',
    choices: ['css', 'scss', 'sass', 'less', "I don't want a style file"],
    filter: input => {
      if (input === "I don't want a style file") {
        return false;
      }
      return input;
    }
  },
  includeStories: {
    type: 'confirm',
    name: 'includeStories',
    message: 'Do you want a storybook file?',
    default: true
  },
  includeTests: {
    type: 'confirm',
    name: 'includeTests',
    message: 'Do you want a test file?',
    default: true
  },
  path: {
    type: 'input',
    name: 'path',
    message: 'Where do you want create your component ?',
    default: './src/components'
  }
};

const templateQuestions = {
  template: templates => ({
    type: 'list',
    name: 'template',
    message: 'Choose a template',
    choices: templates
  })
};

exports.questions = questions;
exports.templateQuestions = templateQuestions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVzdGlvbnMuanMiXSwibmFtZXMiOlsicXVlc3Rpb25zIiwidHlwZSIsIm5hbWUiLCJtZXNzYWdlIiwiY2hvaWNlcyIsImRlZmF1bHQiLCJjb25uZWN0ZWQiLCJpbmRleEZpbGUiLCJqc0V4dGVuc2lvbiIsImNzc0V4dGVuc2lvbiIsImZpbHRlciIsImlucHV0IiwiaW5jbHVkZVN0b3JpZXMiLCJpbmNsdWRlVGVzdHMiLCJwYXRoIiwidGVtcGxhdGVRdWVzdGlvbnMiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxZQUFZO0FBQ2hCQyxRQUFNO0FBQ0pBLFVBQU0sTUFERjtBQUVKQyxVQUFNLE1BRkY7QUFHSkMsYUFBUyxpREFITDtBQUlKQyxhQUFTLENBQUMsV0FBRCxFQUFjLE9BQWQsRUFBdUIsTUFBdkI7QUFKTCxHQURVO0FBT2hCRixRQUFNO0FBQ0pELFVBQU0sT0FERjtBQUVKQyxVQUFNLE1BRkY7QUFHSkMsYUFBUyxxQ0FITDtBQUlKRSxhQUFTO0FBSkwsR0FQVTtBQWFoQkMsYUFBVztBQUNUTCxVQUFNLFNBREc7QUFFVEMsVUFBTSxXQUZHO0FBR1RDLGFBQVMsaURBSEE7QUFJVEUsYUFBUztBQUpBLEdBYks7QUFtQmhCRSxhQUFXO0FBQ1ROLFVBQU0sU0FERztBQUVUQyxVQUFNLFdBRkc7QUFHVEMsYUFBUyw0Q0FIQTtBQUlURSxhQUFTO0FBSkEsR0FuQks7QUF5QmhCRyxlQUFhO0FBQ1hQLFVBQU0sTUFESztBQUVYQyxVQUFNLGFBRks7QUFHWEMsYUFBUyxrREFIRTtBQUlYQyxhQUFTLENBQUMsSUFBRCxFQUFPLEtBQVA7QUFKRSxHQXpCRztBQStCaEJLLGdCQUFjO0FBQ1pSLFVBQU0sTUFETTtBQUVaQyxVQUFNLGNBRk07QUFHWkMsYUFBUyxvREFIRztBQUlaQyxhQUFTLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsTUFBaEIsRUFBd0IsTUFBeEIsRUFBZ0MsMkJBQWhDLENBSkc7QUFLWk0sWUFBU0MsS0FBRCxJQUFXO0FBQ2pCLFVBQUlBLFVBQVUsMkJBQWQsRUFBMkM7QUFDekMsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxhQUFPQSxLQUFQO0FBQ0Q7QUFWVyxHQS9CRTtBQTJDaEJDLGtCQUFnQjtBQUNkWCxVQUFNLFNBRFE7QUFFZEMsVUFBTSxnQkFGUTtBQUdkQyxhQUFTLCtCQUhLO0FBSWRFLGFBQVM7QUFKSyxHQTNDQTtBQWlEaEJRLGdCQUFjO0FBQ1paLFVBQU0sU0FETTtBQUVaQyxVQUFNLGNBRk07QUFHWkMsYUFBUywwQkFIRztBQUlaRSxhQUFTO0FBSkcsR0FqREU7QUF1RGhCUyxRQUFNO0FBQ0piLFVBQU0sT0FERjtBQUVKQyxVQUFNLE1BRkY7QUFHSkMsYUFBUywyQ0FITDtBQUlKRSxhQUFTO0FBSkw7QUF2RFUsQ0FBbEI7O0FBK0RBLE1BQU1VLG9CQUFvQjtBQUN4QkMsWUFBVUMsY0FBYztBQUN0QmhCLFVBQU0sTUFEZ0I7QUFFdEJDLFVBQU0sVUFGZ0I7QUFHdEJDLGFBQVMsbUJBSGE7QUFJdEJDLGFBQVNhO0FBSmEsR0FBZDtBQURjLENBQTFCOztRQVNTakIsUyxHQUFBQSxTO1FBQVdlLGlCLEdBQUFBLGlCIiwiZmlsZSI6InF1ZXN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHF1ZXN0aW9ucyA9IHtcbiAgdHlwZToge1xuICAgIHR5cGU6ICdsaXN0JyxcbiAgICBuYW1lOiAndHlwZScsXG4gICAgbWVzc2FnZTogJ1doYXQga2luZCBvZiBjb21wb25lbnRzIGRvIHlvdSB3YW50IHRvIGNyZWF0ZSA/JyxcbiAgICBjaG9pY2VzOiBbJ3N0YXRlbGVzcycsICdjbGFzcycsICdwdXJlJ10sXG4gIH0sXG4gIG5hbWU6IHtcbiAgICB0eXBlOiAnaW5wdXQnLFxuICAgIG5hbWU6ICduYW1lJyxcbiAgICBtZXNzYWdlOiAnV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50ID8nLFxuICAgIGRlZmF1bHQ6ICdDb21wb25lbnROYW1lJyxcbiAgfSxcbiAgY29ubmVjdGVkOiB7XG4gICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgIG5hbWU6ICdjb25uZWN0ZWQnLFxuICAgIG1lc3NhZ2U6ICdEbyB5b3Ugd2FudCB0byBjb25uZWN0IHRoZSBjb21wb25lbnQgdG8gcmVkdXggPycsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGluZGV4RmlsZToge1xuICAgIHR5cGU6ICdjb25maXJtJyxcbiAgICBuYW1lOiAnaW5kZXhGaWxlJyxcbiAgICBtZXNzYWdlOiAnRG8geW91IHdhbnQgYW4gaW5kZXggZmlsZSBvbiB5b3VyIGZvbGRlciA/JyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAganNFeHRlbnNpb246IHtcbiAgICB0eXBlOiAnbGlzdCcsXG4gICAgbmFtZTogJ2pzRXh0ZW5zaW9uJyxcbiAgICBtZXNzYWdlOiAnV2hhdCBraW5kIG9mIGV4dGVuc2lvbiBkbyB5b3UgdXNlIGZvciBqcyBmaWxlcyA/JyxcbiAgICBjaG9pY2VzOiBbJ2pzJywgJ2pzeCddLFxuICB9LFxuICBjc3NFeHRlbnNpb246IHtcbiAgICB0eXBlOiAnbGlzdCcsXG4gICAgbmFtZTogJ2Nzc0V4dGVuc2lvbicsXG4gICAgbWVzc2FnZTogJ1doYXQga2luZCBvZiBleHRlbnNpb24gZG8geW91IHVzZSBmb3Igc3R5bGUgZmlsZSA/JyxcbiAgICBjaG9pY2VzOiBbJ2NzcycsICdzY3NzJywgJ3Nhc3MnLCAnbGVzcycsIFwiSSBkb24ndCB3YW50IGEgc3R5bGUgZmlsZVwiXSxcbiAgICBmaWx0ZXI6IChpbnB1dCkgPT4ge1xuICAgICAgaWYgKGlucHV0ID09PSBcIkkgZG9uJ3Qgd2FudCBhIHN0eWxlIGZpbGVcIikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH0sXG4gIH0sXG4gIGluY2x1ZGVTdG9yaWVzOiB7XG4gICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgIG5hbWU6ICdpbmNsdWRlU3RvcmllcycsXG4gICAgbWVzc2FnZTogJ0RvIHlvdSB3YW50IGEgc3Rvcnlib29rIGZpbGU/JyxcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBpbmNsdWRlVGVzdHM6IHtcbiAgICB0eXBlOiAnY29uZmlybScsXG4gICAgbmFtZTogJ2luY2x1ZGVUZXN0cycsXG4gICAgbWVzc2FnZTogJ0RvIHlvdSB3YW50IGEgdGVzdCBmaWxlPycsXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgcGF0aDoge1xuICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgbmFtZTogJ3BhdGgnLFxuICAgIG1lc3NhZ2U6ICdXaGVyZSBkbyB5b3Ugd2FudCBjcmVhdGUgeW91ciBjb21wb25lbnQgPycsXG4gICAgZGVmYXVsdDogJy4vc3JjL2NvbXBvbmVudHMnLFxuICB9LFxufVxuXG5jb25zdCB0ZW1wbGF0ZVF1ZXN0aW9ucyA9IHtcbiAgdGVtcGxhdGU6IHRlbXBsYXRlcyA9PiAoe1xuICAgIHR5cGU6ICdsaXN0JyxcbiAgICBuYW1lOiAndGVtcGxhdGUnLFxuICAgIG1lc3NhZ2U6ICdDaG9vc2UgYSB0ZW1wbGF0ZScsXG4gICAgY2hvaWNlczogdGVtcGxhdGVzLFxuICB9KSxcbn1cblxuZXhwb3J0IHsgcXVlc3Rpb25zLCB0ZW1wbGF0ZVF1ZXN0aW9ucyB9XG4iXX0=