var _ = require('underscore');

module.exports = (template, namespace, key) => {
  var compiled = _.template(template).source;

  if (!namespace || !key){
    // no key or namespace, for tests, used with 'eval'
    // needs wrapping parentheses.
    return `(${compiled})`;
  }else{
    return `${namespace}['${key}'] = ${compiled};`
  }
};
