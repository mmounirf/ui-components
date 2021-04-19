import React from 'react';
import { render, screen } from '@testing-library/react';
import { CustomCursor } from './';

describe('custom-cursor', () => {
  it('should render', () => {
    const { container } = render(<CustomCursor />);
    expect(container).toBeDefined();
  });
});
