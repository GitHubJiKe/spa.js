import Block from './Block'

export default class ImageBlock extends Block {
  constructor(src?: string) {
    super()
    this.ele = document.createElement('img')
    src && ((this.ele as HTMLImageElement).src = src)
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
    (this.ele as HTMLImageElement).src = src
    return this
  }
}
