import { createContext } from 'react'

function voidF() {}

export const AuthContext = createContext({
	token: null,
	userId: null,
	isAuthenticated: false,
	login: voidF,
	logout: voidF
})