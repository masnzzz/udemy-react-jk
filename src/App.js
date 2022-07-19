import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";

export const App = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // useCallback 第二引数に依存配列を指定
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // useMemo...変数のメモ化, 第二引数は依存配列
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  )
}
