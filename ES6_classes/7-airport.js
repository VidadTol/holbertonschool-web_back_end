export default class Airport {
  constructor(name, code) {
    // Check that name and code are strings
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }
// Overrides the toString method to return the airport code
  toString() {
    return `object [${this._code}]`;
  }
}