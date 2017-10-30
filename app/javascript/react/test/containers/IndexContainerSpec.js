import IndexContainer from '../../src/containers/IndexContainer';
import CoffeeFormContainer from '../../src/containers/CoffeeFormContainer';

describe('IndexContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(IndexContainer.prototype, 'handleShowForm').and.callThrough();

    wrapper = mount(
      <IndexContainer
      />
    )
  });

  describe('it should not render CoffeeFormContainer', () => {
    it('should not render CoffeeFormContainer to the page', () => {
      expect(wrapper.find(CoffeeFormContainer)).not.toBePresent();
    });
  });

  describe('it should render CoffeeFormContainer', () => {
    it('should render the CoffeeFormContainer to the page', () => {
      wrapper.setState({ coffeeForm: true });
      expect(wrapper.find(CoffeeFormContainer)).toBePresent();
    });
  });
});
