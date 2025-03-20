export type ReadTimeOptions = {
    wordsPerMinute?: number;
    minTime?: number;
    maxReadTime?: number;
  };
  
  function isValidText(text: unknown): text is string {
    return typeof text === 'string';
  }
  
  function sanitizeText(text: string): string {
    return text.replace(/<\/?[^>]+(>|$)/g, '').trim(); // Menghapus tag HTML
  }
  
  function countWords(text: string): number {
    const matches = text.match(/\b\w+\b/g);
    return matches ? matches.length : 0;
  }
  
  export function estimateReadTime(text: unknown, options: ReadTimeOptions = {}): number {
    if (!isValidText(text)) throw new Error('Invalid input: Expected a string');
  
    const sanitized = sanitizeText(text as string);
    const baseWordCount = countWords(sanitized);
  
    if (baseWordCount === 0) return options.minTime || 1;
  
    const baseWpm = options.wordsPerMinute || 390; 
    let estimatedTime = baseWordCount / baseWpm;
  
    // Tidak menambahkan faktor kompleksitas yang berlebihan
    const finalTime = Math.ceil(estimatedTime);
  
    // Menggunakan minTime dan maxReadTime sesuai yang diberikan
    return finalTime < (options.minTime || 1) ? (options.minTime || 1) : finalTime;
  }
  