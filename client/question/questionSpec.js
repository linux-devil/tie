// Copyright 2017 The TIE Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Unit tests for question.js file
 */
describe('question.js', function() {
  var WRONG_LANGUAGE_ERRORS;
  var PARAGRAPH_TYPE_TEXT;
  var PARAGRAPH_TYPE_CODE;
  var PARAGRAPH_TYPE_SYNTAX_ERROR;
  var RUNTIME_ERROR_FEEDBACK_MESSAGES;
  var FEEDBACK_CATEGORIES;

  beforeEach(module('tie'));
  beforeEach(inject(function($injector) {
    WRONG_LANGUAGE_ERRORS = $injector.get('WRONG_LANGUAGE_ERRORS');
    PARAGRAPH_TYPE_TEXT = $injector.get('PARAGRAPH_TYPE_TEXT');
    PARAGRAPH_TYPE_CODE = $injector.get('PARAGRAPH_TYPE_CODE');
    PARAGRAPH_TYPE_SYNTAX_ERROR = $injector.get('PARAGRAPH_TYPE_SYNTAX_ERROR');
    RUNTIME_ERROR_FEEDBACK_MESSAGES = $injector.get(
      'RUNTIME_ERROR_FEEDBACK_MESSAGES');
    FEEDBACK_CATEGORIES = $injector.get('FEEDBACK_CATEGORIES');
  }));

  describe('WRONG_LANGUAGE_ERRORS', function() {
    it('should have a valid and consistent internal structure', function() {
      WRONG_LANGUAGE_ERRORS.python.forEach(function(error) {
        expect(typeof error.errorName).toBe('string');
        expect(typeof error.regExString).toBe('string');
        expect(typeof error.allowMultiline).toBe('boolean');
        expect(Array.isArray(error.feedbackParagraphs)).toBe(true);
        error.feedbackParagraphs.forEach(function(paragraph) {
          expect(typeof paragraph.type).toEqual('string');
          var equalsTypeText = paragraph.type === PARAGRAPH_TYPE_TEXT;
          var equalsTypeCode = paragraph.type === PARAGRAPH_TYPE_CODE;
          var equalsTypeSyntaxError =
              paragraph.type === PARAGRAPH_TYPE_SYNTAX_ERROR;
          expect(equalsTypeCode || equalsTypeText || equalsTypeSyntaxError)
              .toBe(true);

          expect(typeof paragraph.content).toEqual('string');
        });
      });
    });
  });

  describe('RUNTIME_ERROR_FEEDBACK_MESSAGES', function() {
    it('should have a valid and consistent internal structure', function() {
      RUNTIME_ERROR_FEEDBACK_MESSAGES.python.forEach(function(error) {
        expect(error.checker('test')).toBe(false);
        expect(typeof error.generateMessage(['NameError: name \'key\' is not ',
          'defined KeyError: key AttributeError: \'key\' object has no ',
          'attribute \'length\''].join(''))).toEqual('string');
      });
    });
  });

  describe('FEEDBACK_CATEGORIES', function() {
    it('should have identical keys and values', function() {
      for (var key in FEEDBACK_CATEGORIES) {
        expect(key).toEqual(FEEDBACK_CATEGORIES[key]);
      }
    });
  });
});
