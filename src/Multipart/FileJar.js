'use strict'

/*
 * adonis-bodyparser
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const _ = require('lodash')

/**
 * FileJar is store to keep multiple files of same nature. For
 * uploading multiple files will be bundled as `Jar` and you
 * can call methods on this class to perform bulk operations.
 *
 * @class FileJar
 * @constructor
 */
class FileJar {
  constructor (files = []) {
    this._files = files
  }

  /**
   * Add a new file to the store
   *
   * @method track
   *
   * @param  {File} file
   *
   * @return {void}
   */
  track (file) {
    this._files.push(file)
  }

  /**
   * Return all files inside the Jar. Also this method
   * will `toJSON` on each file instance before
   * returning.
   *
   * To get an array of file instances, call `fileJar.files()`
   *
   * @method all
   *
   * @return {Array}
   */
  all () {
    return _.map(this._files, (file) => file.toJSON())
  }

  /**
   * Returns an array of files that have been moved successfully.
   * `file.toJSON()` is called before returing file.
   *
   * @method movedList
   *
   * @return {Array}
   */
  movedList () {
    return _.filter(this.all(), (file) => file.status === 'moved')
  }

  /**
   * Returns a boolean indicating whether all files have been moved
   * or not.
   *
   * @method movedAll
   *
   * @return {Boolean}
   */
  movedAll () {
    return _.every(this.all(), (file) => file.status === 'moved')
  }

  /**
   * Returns an array errors occured during file move.
   *
   * @method errors
   *
   * @return {Array}
   */
  errors () {
    return _(this.all())
    .filter((file) => file.status !== 'moved')
    .map((file) => file.error)
    .value()
  }
}

module.exports = FileJar