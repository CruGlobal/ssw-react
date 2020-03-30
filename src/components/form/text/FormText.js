/*
 * Maps to CruOrgApp/components/content/form/text
 */
import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';

/**
* Default Edit configuration for the Form Text component that interact with the Core Form Text component and sub-types
*
* @type EditConfig
*/
const FormTextEditConfig = {

    emptyLabel: 'Text Field',

    isEmpty: function(props) {
        return !props || !props.title || props.title.trim().length < 1;
    }
};

/**
 * FormText React component
 */
export default class FormText extends Component {
    render() {
        let label = !this.props.hideLabel ? (<label htmlFor={this.props.name}>{this.props.title}</label>) : '';
        let input = (
            <input type={this.props.type}
                   className="FormText"
                   name={this.props.name}
                   defaultValue={this.props.value}
                   placeholder={this.props.placeholder} />
        );
        let toolTip = this.props.helpMessage && !this.props.placeholder ?
            (<p className="cmp-form-text__help-block">{this.props.helpMessage}</p>) : '';

        return (
            <>
                {label}{toolTip}{input}
            </>
        )
    }
}

MapTo('CruOrgApp/components/content/form/text')(FormText, FormTextEditConfig);
