import React, { useEffect, useState } from 'react';

function Podsumowanie() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/text/podsumowanie.txt')
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
      <h2>Podsumowanie</h2>
      <p>{content}</p>
    </section>
  );
}

export default Podsumowanie;
