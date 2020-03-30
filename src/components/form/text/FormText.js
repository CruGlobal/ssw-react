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
        let input;
        if (this.props.type === 'textarea') {
            input = (
                <textarea className="cmp-form-text__textarea FormText"
                          id={this.props.id}
                          name={this.props.name}
                          defaultValue={this.props.value}
                          placeholder={this.props.placeholder}
                          data-cmp-required-message={this.props.requiredMessage}
                          required={this.props.required}
                          readOnly={this.props.readOnly}
                          rows={this.props.rows} />
            );
        } else {
            input = (
                <input type={this.props.type}
                       className="cmp-form-text__text FormText"
                       id={this.props.id}
                       name={this.props.name}
                       defaultValue={this.props.value}
                       placeholder={this.props.placeholder}
                       data-cmp-required-message={this.props.requiredMessage}
                       required={this.props.required}
                       readOnly={this.props.readOnly} />
            );
        }
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
