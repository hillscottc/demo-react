/** Important **/
/** You should not be committing this file with real secrets to GitHub **/
/** Repeat: DO! NOT! COMMIT! SECRETS! TO! YOUR! REPO! **/

module.exports = {
  // Find the appropriate database to connect to, default to localhost if not found.
  db: process.env.MONGOLAB_URI || 'mongodb://localhost/DemoReact'
};
