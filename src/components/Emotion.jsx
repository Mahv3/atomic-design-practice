/** @jdx */
import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #000;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: 8px;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({
    margin: 0,
    color: "orange",
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- emotion -</p>
      <button>nice</button>
    </div>
  );
};
