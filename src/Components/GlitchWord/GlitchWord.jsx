import './GlitchWord.css';
import { useEffect, useState } from 'react';

const fonts = [
  "'ClashGrotesk-Bold', Arial, sans-serif",
  "'Comico-Regular', cursive, sans-serif",
  "'Array-Bold', Arial, sans-serif",
  "'Telma-Black', Arial, sans-serif",
  "'Aktura-Regular', serif",
  "'Segment-Regular', Arial, sans-serif",
  "'TrenchSlab-Bold', serif",
  "'Boxing-Regular', Arial, sans-serif",
  "'Tanker-Regular', Arial, sans-serif",
  "'Stardom-Regular', Arial, sans-serif",
  "'Styro-Black', Arial, sans-serif",
  "'Kihim-Regular', Arial, sans-serif",
  "'KohinoorZerone-Zero', Arial, sans-serif",
  "'Kola-Regular', Arial, sans-serif",
  "'Panchang-Extrabold', Arial, sans-serif"
];

function Work({children}) {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex(prev => (prev + 1) % fonts.length);
    }, 200); // Change font every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <p className='glitch-word' style={{ fontFamily: fonts[fontIndex], transition: 'font-family 0.3s' }}>
      {children}
    </p>
  );
}

export default Work;