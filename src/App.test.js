import { shallow, mount, render } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
