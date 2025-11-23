import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders Firebase Auth React App heading', () => {
    render(<App />)
    const headingElement = screen.getByText(/Firebase Auth React App/i)
    expect(headingElement).toBeInTheDocument()
  })

  it('shows Auth component when no user is logged in', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
  })

  it('shows welcome message when user is logged in', () => {
    render(<App />)
    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const signInButton = screen.getByRole('button', { name: /sign in/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(signInButton)

    expect(screen.getByText(/Welcome, test@example.com!/i)).toBeInTheDocument()
  })

  it('allows user to sign out', () => {
    render(<App />)
    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const signInButton = screen.getByRole('button', { name: /sign in/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(signInButton)

    const signOutButton = screen.getByRole('button', { name: /sign out/i })
    fireEvent.click(signOutButton)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
  })
})
