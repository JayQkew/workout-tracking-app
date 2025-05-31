import './Work.css';
import { useEffect, useState } from 'react';

const fonts = [
  "'ClashGrotesk-Regular', Arial, sans-serif",
  "'ClashGrotesk-Bold', Arial, sans-serif",
  "'Courier New', Courier, monospace",
  "'Times New Roman', Times, serif",
  "'Comic Sans MS', cursive, sans-serif"
];

function Work() {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex(prev => (prev + 1) % fonts.length);
    }, 500); // Change font every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ fontFamily: fonts[fontIndex], transition: 'font-family 0.3s' }}>
      Work
    </span>
  );
}

export default Work;