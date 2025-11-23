import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Auth from './Auth'

describe('Auth Component', () => {
  it('renders sign in form', () => {
    render(<Auth onUserChange={() => {}} />)
    expect(screen.getByRole('heading', { name: /Sign In/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
  })

  it('updates email input value', () => {
    render(<Auth onUserChange={() => {}} />)
    const emailInput = screen.getByPlaceholderText(/email/i)
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    expect(emailInput.value).toBe('test@example.com')
  })

  it('updates password input value', () => {
    render(<Auth onUserChange={() => {}} />)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    expect(passwordInput.value).toBe('password123')
  })

  it('calls onUserChange when form is submitted', () => {
    const mockOnUserChange = vi.fn()
    render(<Auth onUserChange={mockOnUserChange} />)
    
    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)

    expect(mockOnUserChange).toHaveBeenCalledWith({ email: 'test@example.com' })
  })

  it('does not call onUserChange when form is submitted with empty fields', () => {
    const mockOnUserChange = vi.fn()
    render(<Auth onUserChange={mockOnUserChange} />)
    
    const submitButton = screen.getByRole('button', { name: /sign in/i })
    fireEvent.click(submitButton)

    expect(mockOnUserChange).not.toHaveBeenCalled()
  })
})
