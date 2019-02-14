import { capitalize, camelize, dasherize, underscore } from '@ember/string';
export { singularize, pluralize } from 'ember-inflector';

let mCapitalize = capitalize;
let mCamelize = camelize;
let mDasherize = dasherize;
let mUnderscore = underscore;

export { mCapitalize as capitalize, mCamelize as camelize, mDasherize as dasherize, mUnderscore as underscore };
