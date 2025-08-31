// Warte, bis die gesamte HTML-Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {

    // 1. Finde alle wichtigen Elemente auf der Seite
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const gesamtkostenAnzeige = document.getElementById('gesamtkosten');
    const ausgewaehlteOptionenListe = document.getElementById('ausgewaehlte-optionen');

    // 2. Funktion, um die Kosten und die Liste zu aktualisieren
    function aktualisiereZusammenfassung() {
        let aktuelleGesamtkosten = 0;
        ausgewaehlteOptionenListe.innerHTML = ''; // Leere die Liste zuerst

        // Gehe durch jede Checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                // Wenn sie ausgewählt ist:
                // a) Addiere den Preis zur Gesamtsumme
                aktuelleGesamtkosten += parseFloat(checkbox.value);

                // b) Erstelle einen neuen Listeneintrag für die Zusammenfassung
                const listenEintrag = document.createElement('li');
                // Hole den Text aus dem zugehörigen <label>
                const labelText = document.querySelector(`label[for="${checkbox.id}"]`).textContent;
                listenEintrag.textContent = labelText;
                ausgewaehlteOptionenListe.appendChild(listenEintrag);
            }
        });

        // 3. Zeige die finale Summe an, formatiert auf 2 Nachkommastellen
        gesamtkostenAnzeige.textContent = aktuelleGesamtkosten.toFixed(2);
    }

    // 4. Füge einen "Event Listener" zu jeder Checkbox hinzu
    // Das bedeutet: "Jedes Mal, wenn eine Checkbox angeklickt wird, führe meine Funktion aus"
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', aktualisiereZusammenfassung);
    });

    // Führe die Funktion einmal am Anfang aus, um den Startzustand (0.00 €) zu setzen
    aktualisiereZusammenfassung();
});
