import { TStore } from '../store/types'
import Block from './Block'

export default class TextBlockWithStore<T extends object> extends Block {
  addChild(_child: Block) {
    return this
  }
  constructor(store: TStore<T>, fieldKey: string) {
    super()
    this.ele = document.createElement('span')
    this.ele.setAttribute('data-name', 'TextBlockWithStore')
    // @ts-ignore
    this.ele.textContent = store.value[fieldKey]

    store.subscribe(newStore => {
      // @ts-ignore
      this.ele.textContent = newStore[fieldKey]
    })
  }

}
