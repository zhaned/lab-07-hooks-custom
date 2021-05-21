import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from '../characters/CharacterList';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockData from './mockData.json';
import HomePage from '../HomePage';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', 
    (req, res, ctx) => {
      return res(ctx.json(mockData));
    })
);

describe('testing the app', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('testing loading', async () => {
    render(<CharacterList />);

    screen.getByText('Loading...');
  });

  it('testing a list being shown', async () => {
    render(
      <CharacterList />
    );

    const uL = await screen.findByRole('list', { name: 'characters' });
    expect(uL).toMatchSnapshot();
  });

  it('testing homepage', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    screen.getByText('Avatar Character List Home Page!');
  });
});
