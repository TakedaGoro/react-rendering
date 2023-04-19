import { useCallback, useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  // 再レンダリングを防ぐには子のコンポーネントのmemo化と
  // 子コンポーネントに関数を渡す場合は関数をuseCallbackで囲う
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} close={onClickClose} />
    </div>
  );
}
