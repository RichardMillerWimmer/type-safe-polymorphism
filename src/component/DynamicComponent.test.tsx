import { DynamicComponent } from './DynamicComponent.js'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('DynamicComponent', () => {
    describe('Dynamic Link', () => {
        it('renders a link when "as" is set to "link"', () => {
            render(<DynamicComponent as="a" href="/home">Home</DynamicComponent>)
            expect(screen.getByRole('link', { name: 'Home' })).toBeVisible()
            expect(screen.getByRole('link')).toHaveAttribute('href', '/home')
        })
    });
    describe('Dynamic Button', () => {
        const mockOnClick = vi.fn()
        it('renders a button when "as" is set to "button"', () => {
            render(<DynamicComponent as="button" onClick={mockOnClick}>Click</DynamicComponent>)
            expect(screen.getByRole('button', { name: 'Click' })).toBeVisible()
            fireEvent.click(screen.getByRole('button'))
            expect(mockOnClick).toHaveBeenCalledTimes(1)
        })
    });
})
