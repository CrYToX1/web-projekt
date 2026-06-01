function showFact() {

    const facts = [
        "Rainbow Six Siege vyšlo v roce 2015.",
        "Ve hře je více než 70 operátorů.",
        "Každá mapa umožňuje destrukci zdí, podlah a stropů.",
        "Hra je součástí série Tom Clancy's Rainbow Six.",
        "Siege je jednou z nejúspěšnějších taktických FPS her."
    ];

    const randomFact =
        facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("fact").textContent =
        randomFact;
}