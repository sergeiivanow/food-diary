import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native'
import { composeStories } from '@storybook/testing-react'

import * as stories from './Button.stories';

const { Basic, AnotherExample } = composeStories(stories);

describe('Button Basic', () => {
  it('- get title and press', async () => {
    render(<Basic />)
    const button = screen.getByText(/Hello world/i)
    expect(button).not.toBeNull()
    fireEvent.press(button)
  })
})

describe('Another example', () => {
  it('- get title and press', async () => {
    render(<AnotherExample />)
    const button = screen.getByText(/Another example/i)
    expect(button).not.toBeNull()
    fireEvent.press(button)
  })
})
  