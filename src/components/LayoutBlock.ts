import Block from './Block'

export default class LayoutBlock extends Block {
  #direction: 'row' | 'column'
  constructor(direction: 'row' | 'column') {
    super()
    this.#direction = direction
    this.ele = document.createElement('div')
    this.ele.setAttribute('data-name', `LayoutBlock_${direction}`)
    this.ele.style.display = 'flex'
    this.ele.style.flexDirection = this.#direction
  }
}
