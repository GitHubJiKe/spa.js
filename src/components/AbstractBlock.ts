import SPA from './SPA'

export default abstract class AbstractBlock {
  abstract element(): HTMLElement
  abstract children(): AbstractBlock[]
  abstract style(css: string): ThisType<this>
  abstract setAppInstance(app: SPA): void
}
