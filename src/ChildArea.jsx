import { memo } from "react";

const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
}

// memo()...propsが変更されない限りは再レンダリングされない、という指定
// 複数要素からできている、または肥大化が予想されるコンポーネントにはmemoを付けたい
export const ChildArea = memo((props) => {
    const { open } = props;
    console.log("rendering ChildArea.");

    const data = [...Array(2000).keys()];
    data.forEach(() => {
        console.log("...");
    });

    return (
        <>
            {open ? (
                <div style={style}>
                    <p>子コンポーネント</p>
                </div>
            ) : null}
        </>
    );
});
