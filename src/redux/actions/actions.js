import {
  CHEAP,
  FAST,
  OPTIMAL,
  ALL,
  NO_TRANSFERS,
  ONE_TRANSFERS,
  TWO_TRANSFERS,
  THREE_TRANSFERS,
} from '../types/types'

export const cheap = () => {
  return {
    type: CHEAP,
  }
}
export const fast = () => {
  return {
    type: FAST,
  }
}
export const optimal = () => {
  return {
    type: OPTIMAL,
  }
}

export const all = (checked) => {
  return {
    type: ALL,
    checked,
  }
}
export const noTransfers = (checked) => {
  return {
    type: NO_TRANSFERS,
    checked,
  }
}
export const oneTransfer = (checked) => {
  return {
    type: ONE_TRANSFERS,
    checked,
  }
}
export const twoTransfers = (checked) => {
  return {
    type: TWO_TRANSFERS,
    checked,
  }
}
export const threeTransfers = (checked) => {
  return {
    type: THREE_TRANSFERS,
    checked,
  }
}
