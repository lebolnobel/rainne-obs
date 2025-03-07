import { useState } from 'react';

export default function useClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error when copy:', err);
    }
  };

  return { copied, copyToClipboard };
}
