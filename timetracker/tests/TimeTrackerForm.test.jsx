import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import TimeTrackerForm from 'TimeTrackerForm.jsx';

test('renders the time tracker form', () => {
    render(<TimeTrackerForm />);

    expect(screen.getByRole('form')).toBeInTheDocument();
})
