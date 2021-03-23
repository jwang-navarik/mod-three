const fsm = require('./fsm')

const modThree = (input) => {
  if (typeof input !== 'string' && !(input instanceof String)) {
    throw new Error('Invalid input')
  }

  if (input.length === 0) {
    throw new Error('Empty string')
  }

  const { stateTransition, getValueByState } = fsm()
  for (let i = 0; i < input.length; i++) {
    stateTransition(input[i])
  }

  return getValueByState()
}

module.exports = modThree
