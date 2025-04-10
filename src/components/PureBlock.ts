import Block from './Block'

export default class PureBlock extends Block {
  constructor() {
    super()
    this.ele = document.createElement('div')
    this.ele.setAttribute('data-name', 'PureBlock')
  }
}
