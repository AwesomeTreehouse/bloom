import IndexContainer from '../../src/containers/IndexContainer';
import FormulaTile from '../../src/components/FormulaTile';

describe('IndexContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <IndexContainer
      />
    )
  });

  describe('adds FormulaTile to page', () => {
    it('should add a coffee formula tile', () => {
      let formulas = [
        {
          bean: 'Test Bean',
          tool: 'AeroPress',
          grind: 'Meduim',
          measurement: 'grams',
          ratio: '16:1',
          coffee_weight: 16,
          water_weight: 256,
          minutes: 1,
          seconds: 30,
          time: 13000,
          note: 'Good!'
        }
      ];
      wrapper.setState({ formulas: formulas });
      expect(wrapper).toHaveState('formulas': formulas)
    });
  });
});
