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
        it('renders a link with a custom class name', () => {
            render(<DynamicComponent as="a" href="/home" className='className-prop'>Home</DynamicComponent>)
            expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('className-prop')
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
        it('renders a button with a custom class name', () => {
            render(<DynamicComponent as="button" onClick={mockOnClick} className='className-prop'>Click</DynamicComponent>)
            expect(screen.getByRole('button', { name: 'Click' })).toHaveClass('className-prop')
        })
    });
    it('returns null when conditions are not met', () => {
        render(<DynamicComponent as="a">Home</DynamicComponent>)
        expect(screen.queryByRole('link', { name: 'Home' })).toBeNull()
        render(<DynamicComponent as="button">Click</DynamicComponent>)
        expect(screen.queryByRole('button', { name: 'Click' })).toBeNull()
    })
})
