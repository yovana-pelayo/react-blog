import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('comforter');
  const [align, setAlign] = useState('left');
  const []
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} align={align} />
      <Editor setTitle={setTitle} setSubtitle={setSubtitle} setFont={setFont} setAlign={setAlign} />
    </main>
  );
}
