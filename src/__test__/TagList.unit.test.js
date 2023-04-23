import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TagList from '../Components/TagList';

const mockStore = configureStore([]);

describe('TagList', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      values: ['tag1', 'tag2', 'tag3'],
    });
  });

  it('renders the component with the correct props', () => {
    render(
      <Provider store={store}>
        <TagList values={['tag1', 'tag2', 'tag3']} />
      </Provider>
    );

    expect(screen.getByText('Tap to delete')).toBeInTheDocument();
    expect(screen.getByText('tag1')).toBeInTheDocument();
    expect(screen.getByText('tag2')).toBeInTheDocument();
    expect(screen.getByText('tag3')).toBeInTheDocument();
  });

  it('dispatches removeValue with the correct index when a chip is clicked', () => {
    render(
      <Provider store={store}>
        <TagList values={['tag1', 'tag2', 'tag3']} />
      </Provider>
    );

    const deleteButton = screen.getByText('tag2');
    fireEvent.click(deleteButton);

    expect(store.getActions()).toEqual([{ type: 'values/removeValue', payload: 1 }]);
  });
});
