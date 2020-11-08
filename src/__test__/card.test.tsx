import React from 'react';
import NativeModules from 'react-native'
import { shallow } from 'enzyme';
import SongsCard from '../component/SongsCard';

// jest.mock('NativeModules', () => ({
//   UIManager: {
//     RCTView: () => {},
//   },
//   RNGestureHandlerModule: {
//     attachGestureHandler: jest.fn(),
//     createGestureHandler: jest.fn(),
//     dropGestureHandler: jest.fn(),
//     updateGestureHandler: jest.fn(),
//     State: {},
//     Directions: {},
//   },
// }))

const findByTestAttr = (component: any, attr: any) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
describe('Songs Card Component', () => {
  const wrapperCardComponent = shallow(
    <SongsCard
      rowData={{ item: {}, index: 0 }}
      pushToDetails={(_item: any) => {}}
    />,
  );
  it('Songs snapshot', () => {
    expect(wrapperCardComponent).toMatchSnapshot('GP Card snap');
  });
  it('Songs card render', () => {
    const component = findByTestAttr(
      wrapperCardComponent,
      'Songs-card-component',
    );
    expect(component.length).toBe(0);
  });
});
