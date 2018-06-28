import {FindPasswordForm} from '../FindPasswordForm'
import React from 'react';
import {shallow} from  'enzyme';


const setup = ()=>{
    const props = {
        handleFormInput :jest.fn(),
        handleFormSubmit : jest.fn()
    };
    const wrapper = shallow(<FindPasswordForm {...props}/>)
    return {
        props,
        wrapper
    }
}

describe('FindPasswordForm',()=>{
    const {wrapper,props} = setup();

    //test ui render
    describe('ui render',()=>{
        test('render',()=>{
            expect(wrapper).toMatchSnapshot();
        })
    })

    describe('props test',()=>{
        test('when submit form and title,content are null,onSubmit should not be called',()=>{

            wrapper.find('form').simulate('submit',{
                preventDefault:()=>{
                }
            });

            expect(props.handleFormSubmit).not.toBeCalled();
        });

        test('when submit form and title,content are both not null,onSubmit should be called',()=>{
            wrapper.find('input').simulate('change',{
                target:{
                    value : 'a',
                    dataset:{
                        type:'input'
                    }
                }
            });
            wrapper.find('textarea').simulate('change',{
                target:{
                    value : 'a',
                    dataset:{
                        type:'textarea'
                    }
                }
            });
            wrapper.find('form').simulate('submit',{
                preventDefault:()=>{
                }
            });
            expect(props.onSubmit).toBeCalled();
        });
    })

    describe('state test',()=>{
        test('change textarea , content in state should change',()=>{
            wrapper.find('textarea').simulate('change',{
                target:{
                    value:'random',
                    dataset:{
                        type:'textarea'
                    }
                }
            });
            expect(wrapper.state('content')).toEqual('random');
        });
        test('change input , title in state should change',()=>{
            wrapper.find('textarea').simulate('change',{
                target:{
                    value:'random',
                    dataset:{
                        type:'input'
                    }
                }
            });
            expect(wrapper.state('title')).toEqual('random');
        })
    })

});