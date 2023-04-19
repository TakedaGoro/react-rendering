import { memo } from "react";

export const ChildArea = memo((props) => {
  const { open, close } = props;
  console.log("子コンポーネントが再レンダリングされた");
  return (
    <>
      {open ? (
        <div>
          <p>子コンポーネント</p>
          <button onClick={close}>閉じる</button>
        </div>
      ) : (
        false
      )}
    </>
  );
});
