import { TypeAnimation } from 'react-type-animation';

function Name() {
  return (
    <TypeAnimation
      sequence={[
        "Hi There 👋\nI'm KISHAN",
        100,
        "Hi There 👋\nI'm KISHAN\nCurious about ",
        100,
        "Hi There 👋\nI'm KISHAN\nCurious about Linux 🐧",
        500,
        "Hi There 👋\nI'm KISHAN\nCurious about Maths 🔢",
        500,
        "Hi There 👋\nI'm KISHAN\nCurious about Cricket 🏏",
        500,
        "Hi There 👋\nI'm KISHAN\nCurious about MCU 🤖",
        500,
        "Hi There 👋\nI'm KISHAN\nCurious about Everything 😃",
        500,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2.5em', display: 'inline-block', color: 'white', whiteSpace: 'pre-line' }}
      repeat={0}
    />
  );
}

export default Name;
