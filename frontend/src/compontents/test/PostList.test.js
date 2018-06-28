import PostList from '../PostList';
import React from 'react';
import {shallow} from  'enzyme';

const setup = ()=>{
    const props = {
        onSubmit :jest.fn(),
        discussion :{
            title:'test',
            author:'test',
            postid:1
        }
    };
    const wrapper = shallow(<PostList {...props}/>)
    return {
        props,
        wrapper
    }
}

describe('PublishArea',()=>{
    const {wrapper,props} = setup();

    //test ui render
    describe('ui render',()=>{
        test('render',()=>{
            expect(wrapper).toMatchSnapshot();
        })
    })

});