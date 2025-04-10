
import AbstractBlock from './AbstractBlock'
import SPA from './SPA'

export default class Block extends AbstractBlock {
  static appInstance: SPA
  public ele!: HTMLElement
  #children: Block[] = []


  setAppInstance(app: SPA) {
    Block.appInstance = app
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

  on(event: string, callback: (e: Event, app: SPA, self: Block) => void) {
    this.element().addEventListener(event, e => callback(e, Block.appInstance, this))
    return this
  }

  addChild(child: Block) {
    this.#children.push(child)
    this.element().appendChild(child.element())
    return this
  }


}
