import SPA from './SPA.js'

export default abstract class AbstractBlock {
  abstract element(): HTMLElement
  abstract children(): AbstractBlock[]
  abstract style(css: string): ThisType<this>
  abstract setAppInstance(app: SPA): void
}
