import { fireEvent, render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import SearchableList from '../Components/SearchableList';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

const mockedDispatch = jest.fn();

describe('SearchableList component', () => {
  const list = [
    { id: 1, title: 'Item 1', description: 'Description 1' },
    { id: 2, title: 'Item 2', description: 'Description 2' },
    { id: 3, title: 'Item 3', description: 'Description 3' },
  ];

  beforeAll(() => {
    useDispatch.mockReturnValue(mockedDispatch);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders without errors', () => {
    render(<SearchableList list={list} />);
    const searchInput = screen.getByLabelText('Search...');
    const clearButton = screen.getByText('CLEAR LIST');
    expect(searchInput).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
  });

  it('updates the search term state when text is entered', () => {
    render(<SearchableList list={list} />);
    const searchInput = screen.getByLabelText('Search...');
    fireEvent.change(searchInput, { target: { value: 'Item 1' } });
    expect(searchInput).toHaveValue('Item 1');
  });

  it('filters the list based on the search term', () => {
    render(<SearchableList list={list} />);
    const searchInput = screen.getByLabelText('Search...');
    fireEvent.change(searchInput, { target: { value: 'Item 1' } });
    const item1 = screen.getByText('Item 1');
    expect(item1).toBeInTheDocument();
    const item2 = screen.queryByText('Item 2');
    expect(item2).not.toBeInTheDocument();
  });

  it('displays the loading spinner when the list is empty', () => {
    render(<SearchableList list={[]} />);
    const loadingSpinner = screen.getByRole('progressbar');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('displays the list items with the correct title and description', () => {
    render(<SearchableList list={list} />);
    const item1 = screen.getByText('Item 1');
    expect(item1).toBeInTheDocument();
    const description1 = screen.getByText('Description 1');
    expect(description1).toBeInTheDocument();
  });
});
