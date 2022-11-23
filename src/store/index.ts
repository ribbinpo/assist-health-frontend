import create from 'zustand'
import { persist } from 'zustand/middleware'

interface AcccountStoreProps {
    token: string;
    setToken: (token: string) => void
}

const accountStore = persist<AcccountStoreProps>(
    (set) => ({
        token:"",
        setToken: (token) => set(() => ({ token }))
    }),
    { name: 'account-store'}
)

export const useAccountStore = create(accountStore)