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
 * @fileoverview Basic configuration for the TIE application.
 */

window.tie = angular.module('tie',
  ['ui.codemirror', 'tieConfig', 'tieData', 'ngCookies']);

/**
 * The maximum amount of time (in seconds) that the code can take to run.
 *
 * @type {number}
 */
tie.constant('CODE_EXECUTION_TIMEOUT_SECONDS', 3);

// Supported languages.
/**
 * Used to tell whenever the language the user's code is in Python.
 *
 * @type {string}
 * @constant
 */
tie.constant('LANGUAGE_PYTHON', 'python');

/**
 * Array of strings each representing identifiers for languages that are
 * supported in TIE.
 *
 * @type {[string]}
 * @constant
 */
tie.constant('ALL_SUPPORTED_LANGUAGES', ['python']);

/**
 * Array of strings representing the names of Python libraries that are
 * supported by the TIE system.
 *
 * @type {[string]}
 * @constant
 */
tie.constant('SUPPORTED_PYTHON_LIBS', [
  'collections', 'math', 'operator', 'random', 're', 'string', 'time']);

/**
 * Class name for wrapping student code. Answer submissions are then run
 * using CLASS_NAME_STUDENT_CODE.function_name().
 *
 * @type {string}
 * @constant
 */
tie.constant('CLASS_NAME_STUDENT_CODE', 'StudentCode');

/**
 * Name of button that will direct users to Python language primer.
 *
 * @type {string}
 * @constant
 */
tie.constant('PYTHON_PRIMER_BUTTON_NAME', 'New to Python?');

/**
 * Constant to represent the consecutiveLanguageUnfamiliarityCounter option
 * for the resetCounters function in FeedbackGeneratorService. Is to be passed
 * into the resetCounters function as a parameter when we want to reset all
 * counters except the consecutiveLanguageUnfamiliarityCounter.
 *
 * @type {string}
 * @constant
 */
tie.constant('ERROR_COUNTER_LANGUAGE_UNFAMILIARITY',
  'consecutiveLanguageUnfamiliarityCounter');

/**
 * Constant to represent the consecutiveSameRuntimeErrorCounter option for
 * the resetCounters function in FeedbackGeneratorService. Is to be passed into
 * the resetCounters function as a parameter when we want to reset all counters
 * except the consecutiveSameRuntimeErrorCounter.
 *
 * @type {string}
 * @constant
 */
tie.constant('ERROR_COUNTER_SAME_RUNTIME', 'consecutiveSameError');

/**
 * Enum of possible feedback categories representing the types of feedback a
 * TIE user could potentially receive.
 *
 * @type (Object)
 * @constant
 */
tie.constant('FEEDBACK_CATEGORIES', {
  FAILS_STARTER_CODE_CHECK: 'FAILS_STARTER_CODE_CHECK',
  FAILS_BAD_IMPORT_CHECK: 'FAILS_BAD_IMPORT_CHECK',
  FAILS_GLOBAL_CODE_CHECK: 'FAILS_GLOBAL_CODE_CHECK',
  FAILS_LANGUAGE_DETECTION_CHECK: 'FAILS_LANGUAGE_DETECTION_CHECK',
  FAILS_FORBIDDEN_NAMESPACE_CHECK: 'FAILS_FORBIDDEN_NAMESPACE_CHECK',
  SYNTAX_ERROR: 'SYNTAX_ERROR',
  TIME_LIMIT_ERROR: 'TIME_LIMIT_ERROR',
  STACK_EXCEEDED_ERROR: 'STACK_EXCEEDED_ERROR',
  RUNTIME_ERROR: 'RUNTIME_ERROR',
  KNOWN_BUG_FAILURE: 'KNOWN_BUG_FAILURE',
  SUITE_LEVEL_FAILURE: 'SUITE_LEVEL_FAILURE',
  INCORRECT_OUTPUT_FAILURE: 'INCORRECT_OUTPUT_FAILURE',
  PERFORMANCE_TEST_FAILURE: 'PERFORMANCE_TEST_FAILURE',
  SUCCESSFUL: 'SUCCESSFUL'
});

/**
 * Imports and system-level functions that should be appended to all code.
 *
 * @type {{}}
 * @constant
 */
tie.constant('SYSTEM_CODE', {
  python: [
    'import collections',
    'import copy',
    'import math',
    'import operator',
    'import random',
    'import re',
    'import string',
    'import time',
    '',
    '# A copy of the most-recently processed input item. This is useful',
    '# for debugging exceptions.',
    'most_recent_input = None',
    '',
    'class System(object):',
    '    @classmethod',
    '    def runTest(cls, func, input):',
    '        global most_recent_input',
    '        most_recent_input = copy.deepcopy(input)',
    '        output = func(input)',
    '        return output',
    '',
    '    @classmethod',
    '    def extendString(cls, s, length):',
    '        return s * length',
    ''
  ].join('\n')
});

// Pre-requisite check error types
/**
 * Pre-requisite check error type for when starter code is missing or altered.
 *
 * @type {string}
 * @constant
 */
tie.constant('PREREQ_CHECK_TYPE_MISSING_STARTER_CODE', 'missingStarterCode');
/**
 * Pre-requisite check error type for when the user tries to import an
 * unsupported library in their code submission.
 *
 * @type {string}
 * @constant
 */
tie.constant('PREREQ_CHECK_TYPE_BAD_IMPORT', 'badImport');
/**
 * Pre-requisite check error type for when the user tries to declare or use
 * code in the global scope.
 *
 * @type {string}
 * @constant
 */
tie.constant('PREREQ_CHECK_TYPE_GLOBAL_CODE', 'globalCode');
/**
 * Pre-requisite check error type for when the user tries to utilize code with
 * syntax commonly used in another language that isn't valid in the current
 * language.
 *
 * @type {string}
 * @constant
 */
tie.constant('PREREQ_CHECK_TYPE_WRONG_LANG', 'wrongLang');

/**
 * FeedbackParagraph type that will be rendered to look like a normal text
 * paragraph.
 *
 * @type {string}
 * @constant
 */
tie.constant('PARAGRAPH_TYPE_TEXT', 'text');

/**
 * FeedbackParagraph type that will render text to look like code.
 *
 * @type {string}
 * @constant
 */
tie.constant('PARAGRAPH_TYPE_CODE', 'code');

/**
 * FeedbackParagraph type that will render text to bring attention to a syntax
 * error.
 *
 * @type {string}
 * @constant
 */
tie.constant('PARAGRAPH_TYPE_SYNTAX_ERROR', 'error');

/**
 * Constant for the number of times that a user can make a mistake (i.e.
 * same error, syntax error, etc.) until we prompt them to look at the
 * primer.
 *
 * @type {number}
 * @constant
 */
tie.constant('UNFAMILIARITY_THRESHOLD', 5);

/**
 * Dictionary of wrong language detection errors and their related information
 *
 * @type {{}}
 */
tie.constant('WRONG_LANGUAGE_ERRORS', {
  python: [{
    // Used Increment Operator
    errorName: 'incrementOp',
    regExString: '\\+\\+',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "Hmm... It looks like you're trying to use '++' to increment a ",
          "number, but unfortunately, this isn't valid in Python. Try ",
          "using '+= 1' instead."
        ].join('')
      }
    ],
    allowMultiline: false
  }, {
    // Used Decrement Operator
    errorName: 'decrementOp',
    regExString: '\\-\\-',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "Hmm... It looks like you're trying to use '--' to decrement a ",
          "number, but unfortunately, this isn't valid in Python. Try ",
          "using '-= 1' instead."
        ].join('')
      }
    ],
    allowMultiline: false
  }, {
    // Used `push` instead of `append`
    errorName: 'push',
    regExString: '.push\\(',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "It seems like you're using a `push` method to add an element ",
          "to an array, which is valid in Java, but the Python equivalent ",
          "is called `append`."
        ].join('')
      }
    ],
    allowMultiline: false
  }, {
    // Used the catch statement
    errorName: 'catch',
    regExString: '\\bcatch\\b',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "Are you trying to use a `catch` statement to catch an ",
          "Exception? In Python, we use `except` instead."
        ].join('')
      }
    ],
    allowMultiline: false
  }, {
    // Used the Java comment syntax
    errorName: 'javaComment',
    regExString: '\\/\\/(\\s|\\w)*\\n|\\/\\*(\\*)?(\\s|\\w)*\\*\\/',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "Hmmm... It seems like you're using the Java syntax to write ",
          "comments. Make sure you're using the '#' character on lines ",
          "you want to comment out."
        ].join('')
      }
    ],
    allowMultiline: true
  }, {
    // Used a do-while loop
    errorName: 'doWhile',
    regExString: 'do\\s*{(\\w|\\s|[;])*}\\s*while\\s*\\((\\w|\\s)*\\)|\\bdo' +
      '\\b',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "Unfortunately, Python doesn't support do-while statements. ",
          "Perhaps try using a flag or different condition instead?"
        ].join('')
      }
    ],
    allowMultiline: true
  }, {
    // Used else if instead of elif
    errorName: 'elseIf',
    regExString: '\\belse\\s*if\\b',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "Make sure to double check that you're using `elif` instead of ",
          "`else if` for your if-else statements."
        ].join('')
      }
    ],
    allowMultiline: false
  }, {
    // Used the wrong casing for "True" or "False".
    errorName: 'booleans',
    regExString: '\\b(true|TRUE|false|FALSE)\\b',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "Python only allows True and False for boolean values. Double-check ",
          "to make sure 'True' or 'False' are written with the letters in the ",
          "correct case."
        ].join('')
      }
    ],
    allowMultiline: false
  }, {
    // Used a switch statement
    errorName: 'switch',
    regExString: '\\bswitch\\b\\s*\\((\\w|\\s)*\\)\\s*[{|:]?\\s*((\\bcase' +
      '\\b)|(\\bdefault\\b))',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "Oops, Python doesn't support switch statements. You'll ",
          "just have to use if-else statements instead."
        ].join('')
      }
    ],
    allowMultiline: true
  }, {
    // Used the C-like import syntax
    errorName: 'cImport',
    regExString: '#include\\s+<\\w+>',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "It looks like you're using a C-like syntax to try and import ",
          "packages. In Python, your imports should be in the format: "
        ].join('')
      }, {
        type: 'code',
        content: 'import [insert package name here]'
      }
    ],
    allowMultiline: false
  }, {
    // Used the Java/C not operator
    errorName: 'notOp',
    regExString: '![^=]\\w*',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "Are you using the right NOT operator? In Python, it's just `not`."
        ].join('')
      }
    ],
    allowMultiline: false
  }, {
    // Used the Java/C and operator
    errorName: 'andOp',
    regExString: '&&',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "Triple check you're using the right AND operator. For Python, ",
          "the AND operator is simply `and`."
        ].join('')
      }
    ],
    allowMultiline: false
  }, {
    // Used the Java/C or operator
    errorName: 'orOp',
    regExString: '\\|\\|',
    feedbackParagraphs: [
      {
        type: 'text',
        content: [
          "Hmmm... It seems like you're trying to use the OR operator ",
          "syntax from Java. Be sure you're using the Python appropriate ",
          "operator - `or`."
        ].join('')
      }
    ],
    allowMultiline: false
  }]
});


/**
 * Pre-requisite check error type to see if the user tried to use any methods
 * from System in their code submission.
 *
 * @type {string}
 * @constant
 */
tie.constant('PREREQ_CHECK_TYPE_INVALID_SYSTEM_CALL', 'invalidSystem');

/**
 * Pre-requisite check error type to see if the user tried to use an
 * AuxiliaryCode method in their code submission.
 *
 * @type {string}
 * @constant
 */
tie.constant(
  'PREREQ_CHECK_TYPE_INVALID_AUXILIARYCODE_CALL', 'invalidAuxiliaryCode');

/**
  Dictionary of the customized runtime error feedback messages
  - `checker` function checks to see if the error matches with the type of
    feedback message
  - `generateMessage` function returns the appropriate feedback message for the
    given error
 **/
tie.constant('RUNTIME_ERROR_FEEDBACK_MESSAGES', {
  python: [{
    // Error when user indents lines incorrectly
    checker: function(errorString) {
      return errorString.startsWith("IndentationError: ");
    },
    generateMessage: function() {
      return ['It looks like your code has some inconsistencies with ',
        'indentation. Double check that you indent after every statement ',
        'that ends with a ":" and un-indent when necessary.'].join('');
    }
  }, {
    // Type Error where user tries to assign an item directly in a string
    checker: function(errorString) {
      return errorString.startsWith("TypeError: 'str' does not support" +
          " item assignment");
    },
    generateMessage: function() {
      return ["Unfortunately Python doesn't support directly assigning ",
        "characters in a string. If you need to do so, try splicing the ",
        "string and reassigning the characters that way. If you need a ",
        "refresher on splicing, check out the primer."].join('');
    }
  }, {
    // Error where user tries to concatenate a string with a non-string
    checker: function(errorString) {
      return (errorString.startsWith('TypeError: ') &&
      errorString.includes("cannot concatenate 'str' and") &&
      errorString.includes("objects"));
    },
    generateMessage: function() {
      return ["Did you remember to explicitly convert all objects to strings ",
        "when necessary (like when you're concatenating a string)? Make ",
        "sure everything that isn't a string gets converted using the str() ",
        "method or by using a formatted string."].join("");
    }
  }, {
    // Error when user tries to use a variable name that is not defined
    checker: function(errorString) {
      return errorString.startsWith('NameError: ');
    },
    generateMessage: function(errorString) {
      var nameErrorRegEx = /NameError:\sname\s'(\w+)'\sis\snot\sdefined/;
      var found = errorString.match(nameErrorRegEx);
      return ["It looks like " + found[1] + " isn't a declared variable. ",
        "Did you make sure to spell it correctly? And is it correctly ",
        "initialized?"].join('');
    }
  }, {
    // Error when user tries to use a property/method that isn't defined
    checker: function(errorString) {
      return errorString.startsWith('AttributeError: ');
    },
    generateMessage: function(errorString) {
      var attributeErrorRegEx =
          /AttributeError:\s'(\w+)'\sobject\shas\sno\sattribute\s'((\w|\W)+)'/;
      var found = errorString.match(attributeErrorRegEx);
      return [found[1] + " doesn't have a property or method named ",
        found[2] + ". Double check to make sure everything is spelled ",
        "correctly."].join("");
    }
  }, {
    // Error when user tries to access an index that is out of range
    checker: function(errorString) {
      return errorString.startsWith(
          "IndexError: list index out of range");
    },
    generateMessage: function() {
      return ["It looks like you're trying to access an index that is out ",
        "of the bounds for the list. Double check that your loops and ",
        "assignments don't try to retrieve from indexes below 0 or above ",
        "the length of the string."].join('');
    }
  }, {
    // Error when user tries to access a key that isn't defined in a dict
    checker: function(errorString) {
      return errorString.startsWith('KeyError: ');
    },
    generateMessage: function(errorString) {
      var keyErrorRegEx = /KeyError:\s(\w+)\s/;
      var found = errorString.match(keyErrorRegEx);
      return ["The key " + found[1] + " is not in the dictionary you're ",
        "trying to retrieve from. Double check to make sure everything is ",
        "spelled correctly and that you haven't forgotten to add any ",
        "key-value pairs."].join('');
    }
  }]
});

/**
 * Name of the list in which correctness test results are stored.
 *
 * @type {string}
 * @constant
 */
tie.constant('VARNAME_OBSERVED_OUTPUTS', 'correctness_test_results');
/**
 * Name of the list in which buggy output test results of all tasks are stored.
 *
 * @type {string}
 * @constant
 */
tie.constant('VARNAME_BUGGY_OUTPUT_TEST_RESULTS', 'buggy_output_test_results');
/**
 *  Name of the list in which performance test results of all tasks are stored.
 *
 *  @type {string}
 *  @constant
 */
tie.constant('VARNAME_PERFORMANCE_TEST_RESULTS', 'performance_test_results');
/**
 * Name of the list in which correctness test results of one single task are
 * stored.
 *
 * @type {string}
 * @constant
 */
tie.constant('VARNAME_TASK_CORRECTNESS_TEST_RESULTS',
    'task_correctness_test_results');
/**
 * Name of the list in which buggy output test results of one single task are
 * stored.
 *
 * @type {string}
 * @constant
 */
tie.constant('VARNAME_TASK_BUGGY_OUTPUT_TEST_RESULTS',
    'task_buggy_output_test_results');
/**
 * Name of the list in which performance test results of one single task are
 * stored.
 *
 * @type {string}
 * @constant
 */
tie.constant('VARNAME_TASK_PERFORMANCE_TEST_RESULTS',
    'task_performance_test_results');
/**
 * Name of the variable in which a copy of the most recent input is stored.
 *
 * @type {string}
 * @constant
 */
tie.constant('VARNAME_MOST_RECENT_INPUT', 'most_recent_input');
/**
 * Conversion rate between seconds to milliseconds.
 *
 * @type {number}
 * @constant
 */
var SECONDS_TO_MILLISECONDS = 1000;
tie.constant('SECONDS_TO_MILLISECONDS', SECONDS_TO_MILLISECONDS);

/**
 * Default auto save time in seconds.
 *
 * @type {number}
 * @constant
 */
tie.constant('DEFAULT_AUTOSAVE_SECONDS', 5);
/**
 * Number of seconds that "Saving code..." message will appear for before
 * disappearing.
 *
 * @type {number}
 * @constant
 */
tie.constant('DISPLAY_AUTOSAVE_TEXT_SECONDS', 1);
/**
 * Default question ID to use if no qid parameter is specified in the URL.
 *
 * @type {string}
 * @constant
 */
tie.constant('DEFAULT_QUESTION_ID', 'reverseWords');
/**
 * Default cookie lifetime for the privacy policy in days.
 *
 * @type {number}
 * @constant
 */
var SIX_MONTHS_IN_DAYS = 180;
tie.constant('PRIVACY_COOKIE_LIFETIME_DAYS', SIX_MONTHS_IN_DAYS);
/**
* Key to use to store the privacy policy agreement.
*
* @type {string}
* @constant
*/
tie.constant('PRIVACY_COOKIE_NAME', 'PRIVACY_POLICY_ACCEPTED');
/**
 * Menu page url relative to the question page.
 *
 * @type {string}
 * @constant
 */
tie.constant('MENU_PAGE_URL_FROM_QUESTION_PAGE', '../menu/menu.html');
