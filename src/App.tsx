import React from 'react';

const App: React.FC = () => {
  return (
    <div className='layout'>
      <div className='container'>
        <h1 className='title'>Wazzup 👋</h1>
        <p className='text'>A starter project for building web applications with React using TypeScript.</p>
        <p className='text'>Preprocessor Sass is used for styling.</p>
        <p className='text'>The boilerplate pre-configured with code quality tools: ESLint, Prettier, Husky.</p>
        <footer className='footer'>
          Powered by{' '}
          <a
            href='https://github.com/dtsiki'
            target='_blank'
            rel='noopener noreferrer'>
            @dtsiki
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
