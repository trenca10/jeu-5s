const objets = document.querySelectorAll('.objet');
const zonesCible = document.querySelectorAll('.zone-cible');

// Écoute les événements de drag start/stop sur chaque objet
objets.forEach(objet => {
    objet.addEventListener('dragstart', () => {
        objet.classList.add('en-train-de-draguer');
    });

    objet.addEventListener('dragend', () => {
        objet.classList.remove('en-train-de-draguer');
    });
});

// Écoute les événements de drag over et de drop sur chaque zone cible
zonesCible.forEach(zone => {
    zone.addEventListener('dragover', e => {
        e.preventDefault(); // Nécessaire pour autoriser le drop
    });

    zone.addEventListener('drop', () => {
        const objet = document.querySelector('.en-train-de-draguer');
        zone.appendChild(objet);
    });
});
