import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicCustomCursor } from './custom-cursor.composition';

describe('custom-cursor', () => {
  it('should render', () => {
    const { container } = render(<BasicCustomCursor />);
    expect(container).toBeDefined();
  });
});
