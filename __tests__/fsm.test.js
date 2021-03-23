const fsm = require('../src/fsm')

describe('#### fsm tests ####', () => {
  it('Test initial state', () => {
    const {
      VALID_STATES,
      getState,
    } = fsm()
    const { S0 } = VALID_STATES
    expect(getState()).toBe(S0)
  })

  it('Test setState', () => {
    const { VALID_STATES, getState, setState } = fsm()
    const { S2 } = VALID_STATES
    setState(S2)
    expect(getState()).toBe(S2)
  })

  it('Test setState with exception', () => {
    const { setState } = fsm()
    expect(() => setState('S5')).toThrow('Invalid state')
  })

  it('Test stateTransition', () => {
    const {
      VALID_STATES: { S0, S1, S2 },
      getState,
      setState,
      stateTransition,
    } = fsm()
    setState(S0)
    stateTransition('0')
    expect(getState()).toBe(S0)

    setState(S0)
    stateTransition('1')
    expect(getState()).toBe(S1)

    setState(S1)
    stateTransition('0')
    expect(getState()).toBe(S2)

    setState(S1)
    stateTransition('1')
    expect(getState()).toBe(S0)

    setState(S2)
    stateTransition('0')
    expect(getState()).toBe(S1)

    setState(S2)
    stateTransition('1')
    expect(getState()).toBe(S2)
  })

  it('Test stateTransition with exception', () => {
    const { stateTransition } = fsm()
    expect(() => stateTransition('5')).toThrow('Invalid param')
  })

  it('Test getValueByState', () => {
    const {
      VALID_STATES: { S0, S1, S2 },
      getValueByState,
      setState,
    } = fsm()

    setState(S0)
    expect(getValueByState()).toBe(0)
    setState(S1)
    expect(getValueByState()).toBe(1)
    setState(S2)
    expect(getValueByState()).toBe(2)
  })
})
