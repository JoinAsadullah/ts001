import React from 'react';
import copy from 'clipboard-copy';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copied, setCopied] = React.useState("copy");
  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      setCopied("copied");
    } catch (error) {
      alert('Failed to copy text to clipboard.');
      console.error(error);
    }
  };

  return (
    <button className='text-accent7' onClick={handleCopyClick}>&nbsp;{copied}</button>
  );
};

export default CopyButton;
