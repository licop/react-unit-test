import React from 'react';
import { shallow } from 'enzyme';
import List from '../src/client/components/list.jsx';

describe('List', () => {
  let list;
 // 使用shallow 浅渲染一个组件 ，可以覆盖render里的代码，render外的函数需要其他方法覆盖
  beforeEach(() => {
    list = shallow(<List data={['Todo 1', 'Todo 2', 'Todo 3']} />);
  });

  it('List renders table', () => {
    expect(list.find('table').length).toEqual(1);
  });

  it('Class of rendered table', () => {
    expect(list.find('.myClass').length).toEqual(1);
  });

  it('List renders column', () => {
    const arr = list.find('th');
    expect(arr.length).toEqual(1);
    expect(arr.first().text()).toEqual('Todos');
  });

  it('List renders data', () => {
    const arr = list.find('td');
    expect(arr.length).toEqual(3);
    expect(arr.at(1).text()).toEqual('Todo 2');
  });
});