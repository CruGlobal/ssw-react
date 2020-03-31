Checkboxes
```jsx
const checkboxItems = [
    {
        text: 'Check 1',
        value: '1'
    },
    {
        text: 'Check 2',
        value: '2',
        selected: true
    },
    {
        text: 'Check 3',
        value: '3',
        disabled: true
    }
];
<FormOptions name="checkboxes" title="Checkboxes Title" items={checkboxItems} type="CHECKBOX" helpMessage="Help!" /> 
```

Radio Items
```jsx
const radioItems = [
    {
        text: 'Radio 1',
        value: '1'
    },
    {
        text: 'Radio 2',
        value: '2',
        selected: true
    },
    {
        text: 'Radio 3',
        value: '3',
        disabled: true
    }
];
<FormOptions name="radios" title="Radio Title" items={radioItems} type="RADIO" helpMessage="Help!" /> 
```

Drop-down
```jsx
const dropdownItems = [
    {
        text: 'Radio 1',
        value: '1'
    },
    {
        text: 'Radio 2',
        value: '2',
        selected: true
    },
    {
        text: 'Radio 3',
        value: '3',
        disabled: true
    }
];
<FormOptions name="dropdown" title="Dropdown Title" items={dropdownItems} type="DROP_DOWN" helpMessage="Help!" /> 
```
