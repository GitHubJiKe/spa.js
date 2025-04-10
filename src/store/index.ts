import { atom } from 'nanostores'

const defaultState = { title: 'Welcome to SPA.js', subTitle: 'nanostores is great!' }
export const $homeStore = atom<{ title: string; subTitle: string }>(defaultState)

export function changeTitle(title: string) {
    $homeStore.set({ ...$homeStore.get(), title })
}

export function changeSubTitle(subTitle: string) {
    $homeStore.set({ ...$homeStore.get(), subTitle })
}

export function resetHomeStore() {
    $homeStore.set(defaultState)
}