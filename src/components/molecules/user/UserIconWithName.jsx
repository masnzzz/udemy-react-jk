import styled from "styled-components";

export const UserIconWithName = (props) => {
    const { image, name } = props;
    return (
        <SContainer>
            <SImage src={image} alt="profile" height={160} width={160} />
            <SName>{name}</SName>
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
