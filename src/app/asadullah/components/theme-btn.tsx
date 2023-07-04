'use client'
import React, { useState, useEffect } from 'react';



export default function ThemeBtn() {
    const [theme, setTheme] = useState<string>('system');
    useEffect(() => {
        const detectSystemTheme = () => {
          const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
          if ((darkThemeMq.matches && theme == 'system') || theme == 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        };
    
        detectSystemTheme();
        window.matchMedia('(prefers-color-scheme: dark)').addListener(detectSystemTheme);
      }, [theme]);

      useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && savedTheme !== theme) {
          setTheme(savedTheme);
        }
      }, [theme]);


      const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = e.target.value;
        setTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
      };
    
      return (
        <div className='theme-btn h-[34px] w-[95px] p-[2px] bg-accent2'>
          <input
            name='theme'
            type='radio'
            value='light'
            checked={theme === 'light'}
            onChange={handleThemeChange}
            className={`${theme === 'light' ? 'active-theme' : ''} dark:invert radio-light w-[30px] h-[30px] hover:bg-accent3`}
          />
          <input
            name='theme'
            type='radio'
            value='system'
            checked={theme === 'system'}
            onChange={handleThemeChange}
            className={`${theme === 'system' ? 'active-theme' : ''} dark:invert radio-system w-[30px] h-[30px] hover:bg-accent3`}
          />
          <input
            name='theme'
            type='radio'
            value='dark'
            checked={theme === 'dark'}
            onChange={handleThemeChange}
            className={`${theme === 'dark' ? 'active-theme' : ''} dark:invert radio-dark w-[30px] h-[30px] hover:bg-accent3`}
          />
        </div>
    )
}