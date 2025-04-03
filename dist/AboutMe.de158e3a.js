fetch('./text/podsumowanie.txt').then((response)=>{
    if (!response.ok) throw new Error("B\u0142\u0105d sieci: " + response.status);
    return response.text();
}).then((data)=>{
    // Znajdź element HTML, do którego chcesz wstawić tekst
    const section = document.getElementById('podsumowanie');
    // Wstaw pobrany tekst do elementu. Możesz użyć innerHTML lub textContent.
    // innerHTML pozwala na interpretację ewentualnych znaczników HTML w treści:
    section.innerHTML += `<p>${data}</p>`;
// Jeśli nie chcesz, aby HTML został zinterpretowany, użyj textContent:
// section.textContent = data;
}).catch((error)=>{
    console.error("Wyst\u0105pi\u0142 problem z pobieraniem pliku:", error);
});

//# sourceMappingURL=AboutMe.de158e3a.js.map
