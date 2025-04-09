import AbstractBlock from './AbstractBlock.js'
import SPA from './SPA.js'

export default class Block extends AbstractBlock {
  #appInstance!: SPA

  setAppInstance(app: SPA) {
    this.#appInstance = app
  }

  element() {
    return this.ele
  }
  removeChild(child: Block) {
    this.#children = this.#children.filter(c => c !== child)
    return this
  }
  children(): Block[] {
    return this.#children
  }
  style(css: string) {
    this.element().style.cssText += css
    return this
  }
  public ele!: HTMLElement
  #children: Block[] = []

  classname(name: string) {
    if (name.includes(' ')) {
      name.split(' ').forEach(n => this.element().classList.add(n))
    } else {
      this.element().classList.add(name)
    }
    const parent = this.element().parentElement
    if (parent) {
      parent.removeChild(this.element())
      parent.appendChild(this.element())
    }
    return this
  }
  on(event: string, callback: (...args: any[]) => void) {
    this.element().addEventListener(event, e => callback(e, this.#appInstance))
    return this
  }
  addChild(child: Block) {
    child.setAppInstance(this.#appInstance)
    this.#children.push(child)
    this.element().appendChild(child.element())
    return this
  }
}
