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
    const [teamInfoCheckboxes, setTeamInfoCheckBoxes] = useState(
        props.teamInfos.map((teamInfo) => ({
            ...teamInfo,
            value: ++count,
            isSelected: false
        }))
    );

    const handleChange = (event) => {
        const newTeamInfoCheckboxes = teamInfoCheckboxes.map((teamInfoCheckbox) => {
            if (teamInfoCheckbox.id === parseInt(event.target.value)) {
                teamInfoCheckbox.isSelected = event.target.checked;
            }
            return teamInfoCheckbox;
        });

        setTeamInfoCheckBoxes(newTeamInfoCheckboxes);

        props.onSelectedTeamIdsChange(newTeamInfoCheckboxes
            .filter(checkbox => checkbox.isSelected)
            .map(checkbox => checkbox.id)
        );
    };

    return (
        <Form>
            {teamInfoCheckboxes.map((teamInfoCheckbox) => (
                <div key={teamInfoCheckbox.id}>
                    <input
                        type="checkbox"
                        value={teamInfoCheckbox.id}
                        checked={teamInfoCheckbox.isSelected}
                        onChange={handleChange}
                    />
                    <label>{teamInfoCheckbox.fullName}</label>
                </div>
            ))}
        </Form>
    );
};

export default TeamsCheckboxList;
