import Block from './Block'

export default class Page extends Block {

  #path = ''
  #animateIn: string[] = []
  #animateOut: string[] = []
  public pageTitle!: string;
  constructor(title?: string) {
    super()
    if (title) {
      this.pageTitle = title
    }
    this.ele = document.createElement('div')
    this.ele.style.cssText = 'height:100vh;width:100vw;'
    this.ele.setAttribute('data-name', 'Page')
  }

  path(path: string) {
    this.#path = path
    return this
  }

  route() {
    return {
      path: this.#path,
    }
  }



  enter(animate: string) {
    this.#animateIn = animate.split(' ')
    this.ele.classList.add(...this.#animateIn)
    return this
  }

  out(animate: string) {
    this.#animateOut = animate.split(' ')
    return this
  }

  animateIn() {
    this.ele.classList.remove(...this.#animateOut)
    this.ele.classList.add(...this.#animateIn)
  }

  animateOut() {
    this.ele.classList.remove(...this.#animateIn)
    this.ele.classList.add(...this.#animateOut)
  }

}
