import Block from './Block.js'

export default class PureBlock extends Block {
  ele!: HTMLElement
  constructor() {
    super()
    this.ele = document.createElement('div')
    this.ele.setAttribute('data-name', 'PureBlock')
  }
}
