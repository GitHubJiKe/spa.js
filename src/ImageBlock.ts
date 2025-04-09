import Block from './Block.js'

export default class ImageBlock extends Block {
  ele!: HTMLImageElement
  constructor(src?: string) {
    super()
    this.ele = document.createElement('img')
    src && (this.ele.src = src)
  }

  element() {
    return this.ele
  }

  width(width: string) {
    this.ele.style.width = width
    return this
  }

  height(height: string) {
    this.ele.style.height = height
    return this
  }

  src(src: string) {
    this.ele.src = src
    return this
  }
}
