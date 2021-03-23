const genFsm = require('../src/gen-fsm')

describe('#### fsm tests ####', () => {
  let fsm
  beforeEach(() => {
    fsm = genFsm(
      ['S0', 'S1', 'S2'],
      ['0', '1'],
      'S0',
      ['S0', 'S1', 'S2'],
      (state, char) => {
        const map = {
          S0: {
            0: 'S0',
            1: 'S1',
          },
          S1: {
            0: 'S2',
            1: 'S0',
          },
          S2: {
            0: 'S1',
            1: 'S2',
          },
        }
        return map[state][char]
      },
    )
  })

  it('Test initial state', () => {
    const {
      getState,
    } = fsm
    expect(getState()).toBe('S0')
  })

  it('Test setState', () => {
    const { VALID_STATES, getState, setState } = fsm
    const [, S2] = VALID_STATES
    setState(S2)
    expect(getState()).toBe(S2)
  })

  it('Test setState with exception', () => {
    const { setState } = fsm
    expect(() => setState('S5')).toThrow('Invalid state')
  })

  it('Test stateTransition', () => {
    const {
      VALID_STATES: [S0, S1, S2],
      getState,
      setState,
      stateTransition,
    } = fsm
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
    const { stateTransition } = fsm
    expect(() => stateTransition('5')).toThrow('Invalid param')
  })
})
