import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import getPrivateFile from '../../../modules/server/get-private-file';
import parseMarkdown from '../../../modules/parse-markdown';

Meteor.methods({
  'utility.getPage': function utilityGetPage(fileName) {
    check(fileName, String);
    return parseMarkdown(getPrivateFile(`pages/${fileName}.md`));
  },

  'utility.getPrivateHtml': function utilityGetPrivateHtml(fileName) {
    check(fileName, String);
    return getPrivateFile(`pages/${fileName}.html`);
  },

});
