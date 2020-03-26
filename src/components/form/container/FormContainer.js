/*
 * Maps to CruOrgApp/components/content/form/container
 */
import React from 'react';
import {MapTo, Container} from '@adobe/cq-react-editable-components';
import FormText from '../text/FormText.js';
import Text from '../../text/Text.js';

/**
* Default Edit configuration for the Form Container component that interact with the Core Form Container
* component and sub-types
*
* @type EditConfig
*/
const FormContainerEditConfig = {

    emptyLabel: 'FormContainer',

    isEmpty: function(props) {
        return !props || !props.items || props.items.length < 1;
    }
};

/**
 * FormContainer React component
 */
export default class FormContainer extends Container {
    get containerProps() {
        let attrs = super.containerProps;
        attrs.className = (attrs.className || '') + ' FormContainer ' + (this.props.cssClassNames || '');
        return attrs;
    }
}

MapTo('CruOrgApp/components/content/form/container')(FormContainer, FormContainerEditConfig);
