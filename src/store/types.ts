import { atom } from 'nanostores'


export type TStore<T> = ReturnType<typeof atom<T>>