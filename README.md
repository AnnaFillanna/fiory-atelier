# FIORI ATELIER – Blumen mit Persönlichkeit

[Projekt auf GitHub ansehen](https://github.com/AnnaFillanna/fiory-atelier)

Ein responsives Portfolio-Demoprojekt für ein fiktives Premium-Blumenatelier. Die Anwendung umfasst eine redaktionell gestaltete Startseite, eine nach Anlass filterbare Bouquet-Kollektion, Produktdetails, einen funktionalen Bouquet-Konfigurator und einen Demo-Warenkorb.

> **Demo-Projekt – keine echten Bestellungen möglich.** Es gibt keine Zahlung, Backend-Anbindung oder Speicherung personenbezogener Daten. Die „Demo-Bestellung“ leert den lokalen Warenkorb und bestätigt nur die Simulation im Browser.

## Lokal starten

```sh
npm install
npm run dev
```

TypeScript und Production Build prüfen:

```sh
npm run build
```

## Technologien und Struktur

- React, TypeScript und Vite
- React Router für die Seiten und Produktdetails
- Lucide React für Icons
- Modulares CSS: globale Tokens/Resets in `src/index.css`, Komponenten- und Layoutstile in `src/App.css`
- `src/data/images.ts`: zentrale Bildkonfiguration
- `src/data/products.ts`: Beispieldaten der Kollektion
- `src/components/`: Header, Footer und wiederverwendbare Produktkarte
- `src/pages/`: Startseite, Kollektion, Detailansicht, Konfigurator und Warenkorb

Der Warenkorb wird im React-Anwendungszustand gehalten. Beim Neuladen wird er absichtlich nicht dauerhaft gespeichert.

## Bildmaterial ersetzen

Aktuell werden Bild-Platzhalter von Unsplash eingebunden. Die vier prominenten Editorial-Bild-Slots sind in `src/data/images.ts` zentral benannt und werden direkt in der Startseiten-Komposition verwendet. Lege die finalen Dateien unter `public/images/` ab und ersetze jeweils `placeholderUrl` durch den passenden lokalen Pfad.

| Datei | Verwendung | Empfohlenes Format |
| --- | --- | --- |
| `hero-flower-transparent.png` | Hero-Blüte, freigestellte Komposition | PNG mit Transparenz, 1800 × 2200 px |
| `editorial-flower-01.webp` | Überlagerndes Hero-Motiv / Atelier-Bild | Hochformat, 1200 × 1600 px |
| `editorial-flower-02.webp` | Kleines schwebendes Hero-Motiv | Hochformat, 1000 × 1300 px |
| `editorial-flower-03.webp` | Bordeaux-Editorial „Ein Moment. Ein Bouquet.“ | Querformat, 1800 × 1400 px |
| `atelier-flowers.jpg` | Optionales Atelier-Motiv | Querformat, 1400 × 1100 px |
| `bouquet-alba.jpg` | Alba | Hochformat, 1000 × 1200 px |
| `bouquet-rosa-di-sera.jpg` | Rosa di Sera | Hochformat, 1000 × 1200 px |
| `bouquet-il-giardino.jpg` | Il Giardino | Hochformat, 1000 × 1200 px |
| `bouquet-selvaggia.jpg` | Selvaggia | Hochformat, 1000 × 1200 px |
| `bouquet-luce.jpg` | Luce | Hochformat, 1000 × 1200 px |
| `bouquet-dolce-vita.jpg` | Dolce Vita | Hochformat, 1000 × 1200 px |

Für freigestellte Hero-Blüten sollte `hero-flower-transparent.png` einen transparenten Hintergrund besitzen; die drei Editorial-Bilder sind bewusst als Bildflächen komponiert. Für konsistente Produktkacheln sollten die sechs Bouquet-Aufnahmen dieselbe Ausrichtung, ähnliche Lichtstimmung und einen ruhigen Hintergrund haben. Bilder in der Vorschau des Konfigurators sind ausdrücklich stilisiert und stellen nicht jede Kombination fotorealistisch dar.

## Projektstand und offene Aufgaben

Umgesetzt: responsive Seiten und Navigation, Filter nach Anlass, Produktdetailseiten, dynamische Preisberechnung und Auswahl im Konfigurator, Mengensteuerung/Entfernen im Warenkorb sowie eine Bestellsimulation ohne Übermittlung von Daten. Reduced-Motion, Fokuszustände, deutschsprachige SEO-Metadaten und sichtbare Demo-Hinweise sind berücksichtigt.

Vor einem produktiven Einsatz wären eigene Bildassets, redaktionelle Inhalte, Rechtstexte sowie eine echte Backend-/Bestellarchitektur separat zu planen. Das Projekt ist bewusst kein Shop und nimmt keine realen Bestellungen entgegen.
