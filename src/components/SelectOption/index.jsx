
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    border: 2px solid ${props => props.selected ? 'rgb(91, 24, 153)' : 'rgb(208, 180, 235)'}; /* rgb(177, 113, 238) */
    margin-top: 30px;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;
    &:hover {
        border: 2px solid rgb(91, 24, 153);
    }
    background-color: rgb(235, 235, 235);
`;

const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(91, 24, 153);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
`;

const Description = styled.div`
    font-size: 14px; 
`;

function SelectOption({title, description, icon, selected, onClick}) {
    return (
        <Container onClick={onClick} selected={selected}>
            <Icon>{icon}</Icon>
            <Info>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Info>
        </Container>
    );
}

export default SelectOption;