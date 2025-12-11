export default function StyledDynamic({ theme }) {
  return (
    <>
      <style jsx>
        {`
          .panel {
            width: 300px;
            padding: 10px;
            border: 1px solid #000;
            color: white;
          }
        `}
      </style>
      {/* propsでスタイルを変更 */}
      {/* style jsxタグには直下に一つの要素しか入れちゃだめらしい。
      コメントをタグの下に埋め込んだら二つ目の要素だからエラー起きた */}
      <style jsx>
        {`
          .panel {
            border-radius: ${theme.radius ? "10px" : "0px"};
            background-color: ${theme.color};
          }
        `}
      </style>
      <div className="panel">
        <b>Styled は、JSX式にスタイル定義を・・・</b>
      </div>
    </>
  );
}
