export const getFormatedDate = (date: any, format:string = 'DD-MM-YYYY') => {
    if(!date) return '-';
    
    const formatter = new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  
    if (format === 'DD-MM-YYYY') {
      return formatter.format(date);
    } else if (format === 'YYYY-MM-DD') {
      return formatter.format(date).split('-').reverse().join('-');
    } else if (format === 'MM/DD/YYYY') {
      return formatter.format(date).split('-').join('/');
    } else {
      throw new Error('Invalid format');
    }
  };