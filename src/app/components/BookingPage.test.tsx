import { render, screen, fireEvent } from '@testing-library/react';
import { BookingPage } from './BookingPage';

describe('BookingPage', () => {
    const mockOnConfirm = jest.fn();
    const mockOnBack = jest.fn();

    beforeEach(() => {
        mockOnConfirm.mockClear();
        mockOnBack.mockClear();
    });

    it('renders the booking form heading', () => {
        render(<BookingPage onConfirm={mockOnConfirm} onBack={mockOnBack} />);
        expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
    });

    it('allows selecting a time', () => {
        render(<BookingPage onConfirm={mockOnConfirm} onBack={mockOnBack} />);

        // Default time is 19:00, so let's pick 20:00
        const timeSlot = screen.getByText('20:00');
        fireEvent.click(timeSlot);

        // Check if it has the active class/style (we can check class or just logic)
        // The component sets active button with specific classes.
        expect(timeSlot).toHaveClass('bg-[#495E57]');
    });

    it('shows validation error when submitting without a date', () => {
        render(<BookingPage onConfirm={mockOnConfirm} onBack={mockOnBack} />);

        const submitButton = screen.getByText('Confirm Reservation');
        fireEvent.click(submitButton);

        expect(screen.getByText('Please select a date for your reservation.')).toBeInTheDocument();
        expect(mockOnConfirm).not.toHaveBeenCalled();
    });

    // Note: Testing date picker interaction can be tricky with some libs,
    // we will trust the validation test confirms the gatekeeping logic.
});
