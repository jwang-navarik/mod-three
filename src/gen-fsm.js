const genFsm = (states, charSet, initState, finalStates, transFunc) => {
  if (!Array.isArray(states)) {
    throw new Error('states not an array')
  }

  if (!Array.isArray(charSet)) {
    throw new Error('charSet not an array')
  }

  if (!Array.isArray(finalStates)) {
    throw new Error('finalStates not an array')
  }

  if (!(transFunc instanceof Function)) {
    throw new Error('transFunc not a function')
  }

  const VALID_STATES = states
  const FINAL_STATES = finalStates
  let state = initState
  const stateTransition = (char) => {
    if (!charSet.includes(char)) {
      throw new Error('Invalid param')
    }
    state = transFunc(state, char)
  }

  const setState = (v) => {
    if (!VALID_STATES.includes(v)) {
      throw new Error('Invalid state')
    }

    state = v
  }

  return {
    VALID_STATES,
    getState: () => state,
    setState,
    stateTransition,
  }
}

module.exports = genFsm
