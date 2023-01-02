import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ProfileIcon } from '../../../assets/profile.svg';
import { ReactComponent as BookIcon } from '../../../assets/book.svg';
import { ReactComponent as MailIcon } from '../../../assets/mail.svg';
import { ReactComponent as CheckIcon } from '../../../assets/check.svg';
import styled from "styled-components";
import {useTheme} from "../../../utils/hooks";

const Container = styled.div`
    margin: 50px 0;
    cursor: pointer;
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`;

const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    
`;

const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: black ;
`;

const IconArea = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color:${props => props.active ? '#000000' : 'rgb(208, 180, 235)'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Point = styled.div`
    width: 13px;
    height: 13px;
    border: 2px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color:${props => props.active ? '#000000' : 'rgb(208, 180, 235)'};
`;

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
};

const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    const { theme } = useTheme()
    return (
        <Container theme={theme}>
            <Link to={path}>
                <Info>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Info>
                <IconArea active={active}>
                    {icon === 'profile' && <ProfileIcon fill="white" width={24} height={24} />}
                    {icon === 'book' && <BookIcon fill="white" width={24} height={24} />}
                    {icon === 'mail' && <MailIcon fill="white" width={24} height={24} />}
                    {icon === 'check' && <CheckIcon fill="white" width={24} height={24} />}
                </IconArea>
                <Point active={active}></Point>
            </Link>
        </Container>
    );
};

export default SidebarItem;
