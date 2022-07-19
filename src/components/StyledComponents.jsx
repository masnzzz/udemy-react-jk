import styled from "styled-components"

export const StyledComponents = () => {
    return (
        <Container>
            <Title>- StyledComponents -</Title>
            <Button>Button4</Button>
        </Container>
    );
};

const Container = styled.div`
    border: solid 2px blue;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
`;

const Title = styled.p`
    margin: 0;
    color: red;
`;

const Button = styled.button`
    border-radius: 10px;
    &:hover {
        background-color: aquamarine;
    }
`;
