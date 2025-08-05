'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let prevState = { ...state };
for (const action of actions) {
let nextState = { ...prevState };
// ... застосовуй дію до nextState
stateHistory.push(nextState);
prevState = nextState;
}
  switch (action.type) {
      case 'addProperties':
        Object.assign(nextState, action.extraData);
        result.push(nextState);
        prevState = nextState;
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          if (nextState.hasOwnProperty(key)) {
            delete nextState[key];
          }
        }
        result.push(nextState);
        prevState = nextState;
        break;
      case 'clear':
        for (const key in nextState) {
          if (nextState.hasOwnProperty(key)) {
            delete nextState[key];
          }
        }
        result.push(nextState);
        break;
      default:
        break;
    }
  return nextState;
}
module.exports = transformStateWithClones;
