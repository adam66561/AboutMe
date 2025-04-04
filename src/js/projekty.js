import React, { useEffect, useState } from 'react';

function Projekty() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/adam66561/AboutMe/main/public/text/projekty.txt')
      .then(response => {
        if (!response.ok) {
          throw new Error('Błąd sieci: ' + response.status);
        }
        return response.text();
      })
      .then(data => {
        setContent(data);
      })
      .catch(error => {
        console.error('Wystąpił problem z pobieraniem pliku:', error);
      });
  }, []);

  return (
    <section id="podsumowanie">
      <h2>Projekty</h2>
      <p>{content}</p>
    </section>
  );
}

export default Projekty;
