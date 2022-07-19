/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
    const containerStyle = css`
    border: solid 2px blue;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    `;
    const titleStyle = css({
        margin: 0,
        color: "red",
    });

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>- Emotion -</p>
            <Button>Button5</Button>
        </div>
    );
};

const Button = styled.button`
    border-radius: 10px;
    &:hover {
        background-color: aquamarine;
    }
`;
