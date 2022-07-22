import styled from "styled-components"

export const Card = (props) => {
    const { children } = props;
    return (
        <SCard>{children}</SCard>
    )
}

// レイアウトの調整はコンポーネント呼び出し側の責務にする
// サイズ調整などはここではしない。
const SCard = styled.div`
    background-color: #f0adad;
    box-shadow: #ddd 0 0 4px 2px;
    border-radius: 8px;
    padding: 16px;
`;
