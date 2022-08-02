import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
    const { image, name } = props;
    const { UserInfo } = useContext(UserContext);

    const isAdmin = UserInfo ? UserInfo.isAdmin : false;

    return (
        <SContainer>
            <SImage src={image} alt="profile" height={160} width={160} />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`;

const SImage = styled.img`
    border-radius: 50%;
`;

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #3d1ada;
    cursor: pointer;
`
