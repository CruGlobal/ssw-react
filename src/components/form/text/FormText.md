Basic Text Field:

  ```jsx
    <FormText name="my-text" type="text" />
  ```

Text Field with Placeholder:

  ```jsx
    <FormText name="my-text" type="text" placeholder="My Placeholder Text" />
  ```

Text Field with Label:
```jsx
    <FormText name="my-text" type="text" title="My label: " />
```

Required Text Field:
```jsx
    <FormText name="my-text" 
              type="text" 
              title="My label: " 
              required={true} 
              data-cmp-required-message="This field is required" />
```

Read only Text Field:
```jsx
    <FormText name="my-text" type="text" title="My label: " readOnly={true} />
```

Text Field with Default Value:
```jsx
    <FormText name="my-text" type="text" title="My label: " value="Default value" />
```

Text Field with Tooltip:
```jsx
    <FormText name="my-text" type="text" title="My label: " helpMessage="Help Me!" />
```

Textarea Field:
```jsx
    <FormText name="my-text" type="textarea" title="My textarea: " rows="3" />
```

Number Field:
```jsx
    <FormText name="my-text" type="number" title="My number: " />
```

Email Field:
```jsx
    <FormText name="my-text" type="email" title="My email: " />
```

Telephone Field:
```jsx
    <FormText name="my-text" type="tel" title="My phone: " />
```

Password Field:
```jsx
    <FormText name="my-text" type="password" title="Password: " />
```

Date Field:
```jsx
    <FormText name="my-text" type="date" title="My date: " />
```
