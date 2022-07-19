export const StyledJsx = () => {
    return (
        <>
            <div className="container">
                <p className="title">- Styled Jsx -</p>
                <button className="button">Button3</button>
            </div>
            <style jsx="true">{`
                .container {
                    border: solid 2px blue;
                    border-radius: 20px;
                    padding: 8px;
                    margin: 8px;
                    display: flex;
                    justify-content: space-around;
                }
                .title {
                    margin: 0;
                    color: red;
                }
                .button {
                    border-radius: 10px;
                    &:hover {
                        background-color: aquamarine;
                    }
                }
            `}</style>
        </>
    )
};
