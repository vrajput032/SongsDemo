/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import SongsCard from '../component/SongsCard';
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
