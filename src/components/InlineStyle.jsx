export const InlineStyle = () => {
    const containerStyle = {
        border: "solid 2px blue",
        borderRadius: "20px",
        padding: "8px",
        margin: "8px",
        display: "flex",
        justifyContent: "space-around",
        alineItems: "center",
    };
    const titleStyle = {
        margin: 0,
        color: "red",
    };
    const buttonStyle = {
        borderRadius: "10px",
    };

    return (
        <div style={containerStyle}>
            <p style={titleStyle}>- Inline Styles -</p>
            <button style={buttonStyle}>Button</button>
        </div>
    );
};
