import Block from './Block'

export default class TextBlock extends Block {
  addChild(_child: Block) {
    return this
  }

  constructor(text: string) {
    super()
    this.ele = document.createElement('span')
    this.ele.setAttribute('data-name', 'TextBlock')
    this.ele.textContent = text
  }
}
