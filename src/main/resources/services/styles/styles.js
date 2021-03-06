var config = require('../../highlight-config.json')
var utils = require("../../lib/service-utils")

exports.get = function (req) {
  var query = (req.params.query !== undefined)
    ? req.params.query.toLowerCase()
    : '';

  var hits = config.cssFiles
    .map(function(fileName) {
      return utils.createResponseItem(fileName.replace(".min.css", ""))
    })
    .filter(function(item) {
      return item.displayName.toLowerCase().indexOf(query) !== -1
    });

  return {
    status: 200,
    body: {
      total: config.cssFiles.length,
      count: hits.length,
      hits: hits
    }
  }
}
