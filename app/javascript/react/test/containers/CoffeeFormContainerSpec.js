import CoffeeFormContainer from '../../src/containers/CoffeeFormContainer';
import BrewInformation from '../../src/components/BrewInformation';
import RatioHelper from '../../src/components/RatioHelper';
import TimerForm from '../../src/components/TimerForm';

describe('CoffeeFormContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <CoffeeFormContainer />
    )
  });

  it('should render a BrewInformation component', () => {
    expect(wrapper.find(BrewInformation)).toBePresent();
  });

  it('should render a RatioHelper component', () => {
    expect(wrapper.find(RatioHelper)).toBePresent();
  });

  it('should render a TimerForm component', () => {
    expect(wrapper.find(TimerForm)).toBePresent();
  });

});
