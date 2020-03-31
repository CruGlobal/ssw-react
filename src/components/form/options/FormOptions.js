/*
 * Maps to CruOrgApp/components/content/form/options
 */
import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';

/**
* Default Edit configuration for the Form Options component that interact with the Core Form Options
* component and sub-types
*
* @type EditConfig
*/
const FormOptionsEditConfig = {

    emptyLabel: 'Form Options',

    isEmpty: function(props) {
        return !props || !props.items || props.items.length < 1;
    }
};

class CheckboxItem extends Component {
    render() {
        return (
            <label className="cmp-form-options__field-label">
                <input className="cmp-form-options__field cmp-form-options__field--checkbox"
                       type="checkbox"
                       name={this.props.name}
                       value={this.props.value}
                       checked={this.props.selected}
                       disabled={this.props.disabled} />
                <span className="cmp-form-options__field-description">{this.props.text}</span>
            </label>
        )
    }
}

class RadioItem extends Component {
    render() {
        return (
            <label className="cmp-form-options__field-label">
                <input className="cmp-form-options__field cmp-form-options__field--radio"
                       type="radio"
                       name={this.props.name}
                       value={this.props.value}
                       checked={this.props.selected}
                       disabled={this.props.disabled} />
                <span className="cmp-form-options__field-description">{this.props.text}</span>
            </label>
        )
    }
}

class DropdownItem extends Component {
    render() {
        return (
            <div className="options">
                <fieldset className="cmp-form-options cmp-form-options--drop-down">
                    <label className="cmp-form-options__field-label" htmlFor={this.props.id}>{this.props.title}</label>
                    <select className="cmp-form-options__field cmp-form-options__field--drop-down"
                            name={this.props.name}
                            id={this.props.id}>
                        {
                            this.props.items && this.props.items.map((selectItem, index) => {
                                return <option value={selectItem.value}
                                               selected={selectItem.selected}
                                               disabled={selectItem.disabled}>
                                           {selectItem.text}
                                       </option>
                            })
                        }
                    </select>
                    {this.props.toolTip}
                </fieldset>
            </div>
        )
    }
}

/**
 * FormOptions React component
 */
export default class FormOptions extends Component {
    render() {
        if (FormOptionsEditConfig.isEmpty(this.props)) {
            return <div></div>;
        }
        let fieldsetClass = 'cmp-form-options ';
        let toolTip = this.props.helpMessage && !this.props.placeholder ?
            (<p className="cmp-form-options__help-message">{this.props.helpMessage}</p>) : '';

        switch (this.props.type) {
            case 'CHECKBOX':
                fieldsetClass += 'cmp-form-options-checkbox';
                break;
            case 'RADIO':
                fieldsetClass += 'cmp-form-options-radio';
                break;
            case 'DROP_DOWN':
                // Drop-downs are different, since there is only 1 DOM element
                return (
                    <DropdownItem name={this.props.name}
                                  items={this.props.items}
                                  title={this.props.title}
                                  id={this.props.id}
                                  toolTip={toolTip} />
                );
            default:
                break; //do nothing;
        }

        return (
            <div className="options">
                <fieldset className={fieldsetClass}>
                    <legend class="cmp-form-options__legend">{this.props.title}</legend>
                    {
                        this.props.items && this.props.items.map((optionsItem, index) => {
                            switch (this.props.type) {
                                case 'CHECKBOX':
                                    return <CheckboxItem name={this.props.name}
                                                         title={this.props.title}
                                                         value={optionsItem.value}
                                                         selected={optionsItem.selected}
                                                         text={optionsItem.text}
                                                         disabled={optionsItem.disabled} />;
                                case 'RADIO':
                                    return <RadioItem name={this.props.name}
                                                      title={this.props.title}
                                                      value={optionsItem.value}
                                                      selected={optionsItem.selected}
                                                      text={optionsItem.text}
                                                      disabled={optionsItem.disabled} />
                                default:
                                    return null;
                            }
                        })
                    }
                    {toolTip}
                </fieldset>
            </div>
        )
    }
}

MapTo('CruOrgApp/components/content/form/options')(FormOptions, FormOptionsEditConfig);
