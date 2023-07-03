'use client'
import React, { useState, useEffect } from 'react';



export default function ThemeBtn() {
    const [theme, setTheme] = useState<string>('system');
    const [systemTheme, setSystemTheme] = useState<string>('dark');
    useEffect(() => {
        const detectSystemTheme = () => {
          const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
          if ((darkThemeMq.matches && theme == 'system') || theme == 'dark') {
            setSystemTheme('dark');
            document.documentElement.classList.add('dark');
          } else {
            setSystemTheme('light');
            document.documentElement.classList.remove('dark');
          }
        };
    
        detectSystemTheme();
        window.matchMedia('(prefers-color-scheme: dark)').addListener(detectSystemTheme);
      }, [theme]);

    
    return (
        <div className='theme-btn h-[30px] w-[90px] bg-accent2 ' >
            <input name="theme" type="radio" value='light'   checked={theme=='light'} onChange={(e) => setTheme(e.target.value)}     className={`${theme=='light'?'active-theme': ''} dark:invert radio-light w-[30px] h-[30px]`}/>
            <input name="theme" type="radio" value='system'  checked={theme=='system'} onChange={(e) => setTheme(e.target.value)}      className={`${theme=='system'?'active-theme': ''} dark:invert radio-system w-[30px] h-[30px]`}/>
            <input name="theme" type="radio" value='dark'    checked={theme=='dark'}   onChange={(e) => setTheme(e.target.value)}     className={`${theme=='dark'?'active-theme': ''} dark:invert radio-dark w-[30px] h-[30px]`}/>
        </div>
    )
}