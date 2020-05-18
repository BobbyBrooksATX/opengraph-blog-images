/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import Textfit from "react-textfit";
import { render } from "react-dom";

function App() {
  return (
    <div
      css={{
        width: 1200,
        height: 630,
        backgroundImage: `linear-gradient(135deg, rgba(238, 238, 238, 0.08) 0%, rgba(238, 238, 238, 0.08) 55%,rgba(109, 109, 109, 0.08) 55%, rgba(109, 109, 109, 0.08) 60%,rgba(107, 107, 107, 0.08) 60%, rgba(107, 107, 107, 0.08) 81%,rgba(57, 57, 57, 0.08) 81%, rgba(57, 57, 57, 0.08) 94%,rgba(203, 203, 203, 0.08) 94%, rgba(203, 203, 203, 0.08) 100%),linear-gradient(0deg, rgba(53, 53, 53, 0.02) 0%, rgba(53, 53, 53, 0.02) 24%,rgba(89, 89, 89, 0.02) 24%, rgba(89, 89, 89, 0.02) 27%,rgba(190, 190, 190, 0.02) 27%, rgba(190, 190, 190, 0.02) 34%,rgba(51, 51, 51, 0.02) 34%, rgba(51, 51, 51, 0.02) 63%,rgba(217, 217, 217, 0.02) 63%, rgba(217, 217, 217, 0.02) 74%,rgba(226, 226, 226, 0.02) 74%, rgba(226, 226, 226, 0.02) 77%,rgba(60, 60, 60, 0.02) 77%, rgba(60, 60, 60, 0.02) 100%),linear-gradient(45deg, rgba(212, 212, 212, 0.03) 0%, rgba(212, 212, 212, 0.03) 2%,rgba(186, 186, 186, 0.03) 2%, rgba(186, 186, 186, 0.03) 4%,rgba(163, 163, 163, 0.03) 4%, rgba(163, 163, 163, 0.03) 5%,rgba(167, 167, 167, 0.03) 5%, rgba(167, 167, 167, 0.03) 35%,rgba(20, 20, 20, 0.03) 35%, rgba(20, 20, 20, 0.03) 62%,rgba(204, 204, 204, 0.03) 62%, rgba(204, 204, 204, 0.03) 65%,rgba(53, 53, 53, 0.03) 65%, rgba(53, 53, 53, 0.03) 71%,rgba(84, 84, 84, 0.03) 71%, rgba(84, 84, 84, 0.03) 100%),linear-gradient(45deg, rgba(184, 184, 184, 0.05) 0%, rgba(184, 184, 184, 0.05) 10%,rgba(75, 75, 75, 0.05) 10%, rgba(75, 75, 75, 0.05) 32%,rgba(53, 53, 53, 0.05) 32%, rgba(53, 53, 53, 0.05) 38%,rgba(103, 103, 103, 0.05) 38%, rgba(103, 103, 103, 0.05) 72%,rgba(114, 114, 114, 0.05) 72%, rgba(114, 114, 114, 0.05) 76%,rgba(62, 62, 62, 0.05) 76%, rgba(62, 62, 62, 0.05) 100%),linear-gradient(90deg, rgba(108, 108, 108, 0.03) 0%, rgba(108, 108, 108, 0.03) 42%,rgba(6, 6, 6, 0.03) 42%, rgba(6, 6, 6, 0.03) 51%,rgba(227, 227, 227, 0.03) 51%, rgba(227, 227, 227, 0.03) 57%,rgba(143, 143, 143, 0.03) 57%, rgba(143, 143, 143, 0.03) 75%,rgba(178, 178, 178, 0.03) 75%, rgba(178, 178, 178, 0.03) 83%,rgba(98, 98, 98, 0.03) 83%, rgba(98, 98, 98, 0.03) 85%,rgba(152, 152, 152, 0.03) 85%, rgba(152, 152, 152, 0.03) 100%),linear-gradient(135deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 43%,rgba(67, 67, 67, 0.03) 43%, rgba(67, 67, 67, 0.03) 59%,rgba(142, 142, 142, 0.03) 59%, rgba(142, 142, 142, 0.03) 66%,rgba(160, 160, 160, 0.03) 66%, rgba(160, 160, 160, 0.03) 96%,rgba(242, 242, 242, 0.03) 96%, rgba(242, 242, 242, 0.03) 100%),linear-gradient(45deg, rgba(63, 63, 63, 0.07) 0%, rgba(63, 63, 63, 0.07) 10%,rgba(206, 206, 206, 0.07) 10%, rgba(206, 206, 206, 0.07) 38%,rgba(241, 241, 241, 0.07) 38%, rgba(241, 241, 241, 0.07) 49%,rgba(26, 26, 26, 0.07) 49%, rgba(26, 26, 26, 0.07) 52%,rgba(155, 155, 155, 0.07) 52%, rgba(155, 155, 155, 0.07) 72%,rgba(210, 210, 210, 0.07) 72%, rgba(210, 210, 210, 0.07) 91%,rgba(30, 30, 30, 0.07) 91%, rgba(30, 30, 30, 0.07) 100%),linear-gradient(90deg, rgba(196, 196, 196, 0.08) 0%, rgba(196, 196, 196, 0.08) 5%,rgba(182, 182, 182, 0.08) 5%, rgba(182, 182, 182, 0.08) 17%,rgba(196, 196, 196, 0.08) 17%, rgba(196, 196, 196, 0.08) 23%,rgba(62, 62, 62, 0.08) 23%, rgba(62, 62, 62, 0.08) 33%,rgba(127, 127, 127, 0.08) 33%, rgba(127, 127, 127, 0.08) 70%,rgba(112, 112, 112, 0.08) 70%, rgba(112, 112, 112, 0.08) 100%),linear-gradient(45deg, rgba(240, 240, 240, 0.04) 0%, rgba(240, 240, 240, 0.04) 9%,rgba(84, 84, 84, 0.04) 9%, rgba(84, 84, 84, 0.04) 35%,rgba(162, 162, 162, 0.04) 35%, rgba(162, 162, 162, 0.04) 45%,rgba(2, 2, 2, 0.04) 45%, rgba(2, 2, 2, 0.04) 52%,rgba(208, 208, 208, 0.04) 52%, rgba(208, 208, 208, 0.04) 88%,rgba(85, 85, 85, 0.04) 88%, rgba(85, 85, 85, 0.04) 100%),linear-gradient(90deg, rgb(177, 45, 148),rgb(0, 243, 220))`,

        position: `absolute`,
        display: `flex`,
        overflow: `hidden`
      }}
    >
      <Global
        styles={{
          "*": {
            boxSizing: `border-box`,
            margin: 0,
            padding: 0,
            fontFamily: `system-ui`
          }
        }}
      />
      <div
        css={{
          background: `#1B0916`,
          margin: `40px`,
          display: `flex`,
          flex: 1,
          flexDirection: `column`,
          justifyContent: `space-between`,
          borderRadius: 15,
          padding: `8rem`,
          boxShadow:  `
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)`,
        }}
      >
        <h1
          css={{
            color: `#FCEBE9`,
            height: `100%`,
            textAlign: `center`,
          }}
        >
          <Textfit
            max={256}
            min={24}
            style={{
              minHeight: `80%`,
              maxHeight: `80%`,
              lineHeight: 1
            }}
          >
            {window.title}
          </Textfit>
        </h1>
        <div
          css={{
            color: `white`,
            display: `flex`,
            justifyContent: `space-between`,
            fontSize: 36,
            margin: `-5rem`
          }}
        >
          <ul
            css={{
              listStyleType: `none`,
              display: `flex`,
              "& li": {
                marginRight: `0.5rem`,
                "&:not(:last-child):after": {
                  content: `'•'`,
                  marginLeft: `0.5rem`
                }
              }
            }}
          >
            {window.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <span>{window.author}</span>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById('corgi'));