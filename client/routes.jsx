import React from 'react';
import {mount} from 'react-mounter';
import {Page1} from './layout/Page1';
import App from '../imports/ui/App';
FlowRouter.route('/',{
    action(){
        mount(Page1,{content:(<App/>)})
    }
});