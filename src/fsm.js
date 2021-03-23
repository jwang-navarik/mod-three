const fsm = () => {
  const S0 = 'S0'
  const S1 = 'S1'
  const S2 = 'S2'
  const VALID_STATES = {
    S0,
    S1,
    S2,
  }
  const valueMap = {
    S0: 0,
    S1: 1,
    S2: 2,
  }

  let state = S0
  const init = () => {
    state = S0
  }

  const setState = (v) => {
    if (typeof VALID_STATES[v] === 'undefined') {
      throw new Error('Invalid state')
    }

    state = v
  }

  const stateTransition = (char) => {
    if (char !== '0' && char !== '1') {
      throw new Error('Invalid param')
    }

    switch (state) {
    case S0:
      state = char === '0' ? S0 : S1
      break
    case S1:
      state = char === '0' ? S2 : S0
      break
    case S2:
      state = char === '0' ? S1 : S2
      break
    default:
      break
    }
  }

  const getValueByState = () => {
    return valueMap[state]
  }

  return {
    VALID_STATES,
    init,
    getState: () => state,
    setState,
    stateTransition,
    getValueByState,
  }
}

module.exports = fsm
