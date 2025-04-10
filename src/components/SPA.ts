import Page from './Page'

export default class SPA {
  #target!: HTMLElement
  #pages: Page[] = []
  #currentPage!: Page
  #prevPage!: Page
  constructor(target: string | HTMLElement = document.body) {
    if (target) {
      if (typeof target === 'string') {
        this.#target = document.querySelector(target) as HTMLElement
      } else {
        this.#target = target
      }
    }
  }

  addPage(page: Page) {
    page.setAppInstance(this)
    this.#pages.push(page)
    return this
  }

  render(keepPageRoute?: boolean) {
    if (this.#currentPage) {
      this.#target.appendChild(this.#currentPage.element())
      return
    }
    if (!keepPageRoute) {
      localStorage.removeItem('SPA_CURRENT_PATH')
      this.#currentPage = this.#pages[0]
      this.#target.appendChild(this.#currentPage.element())
      return
    }
    const savedPath = localStorage.getItem('SPA_CURRENT_PATH')
    this.#currentPage = savedPath
      ? this.#pages.find(page => page.route().path === savedPath)!
      : this.#pages[0]
    this.#target.appendChild(this.#currentPage.element())
  }

  switchTo(path: string) {
    const page = this.#pages.find(page => page.route().path === path)
    if (!page) {
      throw new Error(`Page not found: ${path}`)
    }

    localStorage.setItem('SPA_CURRENT_PATH', path)
    this.#prevPage = this.#currentPage
    this.#prevPage.animateOut()
    setTimeout(() => {
      this.#target.removeChild(this.#prevPage.element())
    }, 500)
    this.#currentPage = page
    this.#currentPage.animateIn()
    setTimeout(() => {
      this.#target.appendChild(this.#currentPage.element())
      if (this.#currentPage.pageTitle) {
        document.title = this.#currentPage.pageTitle
      }
    }, 500)
  }
}
