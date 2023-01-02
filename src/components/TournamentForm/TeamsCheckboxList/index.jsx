import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Form = styled.form`
  label {
    padding: 0 15px 0 15px;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? 'rgb(91, 24, 153)'  : '#000000')};
  }
`;

const TeamsCheckboxList = (props) => {
    let count = 0;
    const [options, setOptions] = useState(
        props.teams.map((team) => ({
            ...team,
            id: ++count,
            isSelected: false
        }))
    );

    useEffect(() => {
        console.log('Options have changed!');
    }, [options]);

    const handleChange = (event) => {
        const newOptions = options.map((option) => {
            console.log(option.id)
            console.log(event.target.value)
            if (option.id === parseInt(event.target.value)) {
                option.isSelected = event.target.checked;
            }
            return option;
        });

        setOptions(newOptions);
        props.onOptionsChange(newOptions);
    };

    return (
        <Form>
            {options.map((option) => (
                <div key={option.id}>
                    <input
                        type="checkbox"
                        value={option.id}
                        checked={option.isSelected}
                        onChange={handleChange}
                    />
                    <label>{option.fullName}</label>
                </div>
            ))}
        </Form>
    );
};

export default TeamsCheckboxList;
