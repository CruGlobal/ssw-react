/*
 * Maps to CruOrgApp/components/content/form/button
 */
import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';

/**
* Default Edit configuration for the Form Button component that interact with the Core Form Button
* component and sub-types
*
* @type EditConfig
*/
const FormButtonEditConfig = {

    emptyLabel: 'Submit',

    isEmpty: function(props) {
        return !props || !props.title || props.title.trim().length < 1;
    }
};

/**
 * FormButton React component
 */
export default class FormButton extends Component {
    render() {
        return (
            <div className="button">
                <button type={this.props.type}
                        className="cmp-form-button"
                        name={this.props.name}
                        value={this.props.value}>{this.props.title || 'Submit'}</button>
            </div>
        )
    }
}

MapTo('CruOrgApp/components/content/form/button')(FormButton, FormButtonEditConfig);
