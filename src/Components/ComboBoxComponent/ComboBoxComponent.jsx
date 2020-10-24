import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function ComboboxComponent(props) {
    const [value, setValue] = React.useState(props.data[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div>
            <br />
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={props.data}
                style={{ width: 300 }}
            />
        </div>
    );
}
