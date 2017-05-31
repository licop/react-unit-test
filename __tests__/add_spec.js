import React from 'react';
import { mount } from 'enzyme';
import Add from '../src/client/components/add.jsx';

describe('Add', () => {
  let add;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    add = mount(<Add onAdd={onAdd} />);
  });

  it('Add requires onAdd prop', () => {
    expect(add.props().onAdd).toBeDefined();
  });

  it('Add renders button', () => {
    const button = add.find('button').first();
    expect(button).toBeDefined();
  });

  it('Button click calls onAdd', () => {
    const button = add.find('button').first();
    const input = add.find('input').first();
    //simulate 用于模拟用户行为
    input.simulate('change', { target: { value: 'Todo 4' } });
    button.simulate('click');
    expect(onAdd).toBeCalledWith('Todo 4');
  });

});

