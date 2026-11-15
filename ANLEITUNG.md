# KRAFTPILOT Fahrwetter – v2.3

Wetter-App für Motorradfahrer, weltweit nutzbar.
Läuft auf Android als App auf dem Startbildschirm (eine Web-App, die man installieren kann).

## Inhalt dieses Ordners

| Datei | Zweck |
|---|---|
| `index.html` | Die komplette App |
| `manifest.webmanifest` | Macht die App auf Android installierbar (Name, Icon, Farben) |
| `sw.js` | Hält die App offline verfügbar und lädt sie schnell |
| `icons/` | App-Icons (192 px, 512 px, „maskable“ für runde Android-Icons). Bei neuem Logo neue Dateinamen vergeben, sonst behält Android das alte Icon. |
| `SCHRIFTEN-LIZENZ-OFL.txt` | Lizenz der eingebauten Schriften (Bebas Neue, Barlow), die ohne Google-Server geladen werden |

## 1. Online stellen (einmalig, kostenlos)

Die App braucht eine **https-Adresse**, damit Android sie installieren kann und GPS funktioniert.

**Variante A – Netlify (am einfachsten)**
1. Am Computer auf https://app.netlify.com/drop gehen und ein kostenloses Konto anlegen.
2. Den **ganzen Ordner** (`kraftpilot-fahrwetter`) ins Browserfenster ziehen.
3. Netlify gibt dir eine Adresse, z. B. `https://kraftpilot-xyz.netlify.app`.
   Unter „Site settings → Change site name“ kannst du sie umbenennen, z. B. `kraftpilot-wetter.netlify.app`.
4. Bei einer eigenen Domain (z. B. `wetter.kraftpilot.de`) diese unter „Domain management“ eintragen.

**Variante B – GitHub Pages**
Ordnerinhalt in ein GitHub-Repository hochladen → Settings → Pages → Branch „main“ wählen.

**Update später:** Dateien ersetzen und neu hochladen. In `sw.js` die Zeile `const VERSION = "kp-v2.3"`
hochzählen (z. B. `kp-v2.4`), dann holt sich jedes Handy die neue Version automatisch.

## 2. Auf dem Android-Handy installieren (für dich und die Clique)

1. Die Adresse in **Chrome** öffnen.
2. Chrome zeigt „App installieren“. Falls nicht: Menü **⋮ → „App installieren“** bzw. „Zum Startbildschirm hinzufügen“.
3. Beim ersten Start **Standort erlauben**. Alternativ einen Ort über das Zahnrad suchen. Das geht weltweit.

Die Adresse einfach per WhatsApp an die Clique schicken, fertig.

## 3. Bedienung

- **Start:** Logo und Biker-Spruch. Tippen auf **„LOS GEHT'S“** öffnet die App.
- **Navigation oben:** Vier Reiter **JETZT · HEUTE · TOUR · WOCHE**. Man kann auch nach links/rechts wischen.
  Die **Zurück-Taste** des Handys führt zur vorherigen Ansicht.
- **☰ Menü oben rechts:** Alle Ansichten plus **Fahrmodus**, **Ort & Einstellungen** und **Aktualisieren**.
- **JETZT:** Ort, aktuelles Wetter, gefühlte Temperatur bei Fahrtwind, **Fahr-Tacho** (0 = Garage, 100 = Kurventag),
  bestes Fahrfenster, Kluft-Tipp und der Knopf **Fahrmodus**. „Ort ändern“ öffnet die weltweite Ortssuche.
- **HEUTE:** Sonne, Regen, Max/Min, Sonnenauf- und -untergang, Wind und Stunde für Stunde (seitlich wischen).
- **TOUR (Tour-Radar):** Wohin lohnt sich die Fahrt? Oben die **beste Richtung** mit Pfeil, darunter alle Richtungen
  sortiert von gut nach schlecht. Umschalten zwischen **Feierabend (ca. 50 km)** und **Tagestour (bis 100 km)**.
- **WOCHE:** Vorschau für **3 oder 7 Tage** mit Bewertung pro Tag.
- **Fahrmodus:** Riesige Anzeige für die Handyhalterung: Datum, Uhrzeit, Temperatur, gefühlte Temperatur, Regen-Hinweis. Das Display bleibt an.
- **Spruch:** Auf jeder Ansicht. Antippen zeigt den nächsten.
- **Ohne Netz:** Die letzten Daten werden mit dem Hinweis „OFFLINE“ angezeigt.

## 4. Fahr-Tacho: so wird bewertet (0–100)

Abzüge für Kälte, Regenwahrscheinlichkeit, Regenmenge, starken Wind, Nebel, Dunkelheit,
Schnee/Eisregen/Gewitter. Ergebnis:
- **75–100 KURVENTAG** (orange)
- **55–74 FAHRBAR** (gelb)
- **35–54 GRENZWERTIG** (beige)
- **0–34 GARAGENTAG** (rot)

Die Tageswertung ist der Schnitt der 4 besten Stunden bei Tageslicht.

## 5. Datenquellen

- Wetter & Ortssuche: **Open-Meteo.com** (CC BY 4.0, ohne Anmeldung). Für **nicht-kommerzielle**
  Nutzung kostenlos. Wird die App kommerziell (Werbung, Verkauf), braucht es den kostenpflichtigen API-Tarif.
- Ortsname aus GPS: BigDataCloud (kostenloser Dienst für Abfragen direkt vom Handy).

## 6. Für eine öffentliche Version (Checkliste)

- [ ] Impressum und Datenschutzerklärung verlinken (in Deutschland Pflicht).
      Die App speichert nur auf dem Handy (Ort, Tempo, letzte Daten). Standortdaten gehen an Open-Meteo und BigDataCloud.
- [ ] Bedingungen von Open-Meteo bei kommerzieller Nutzung prüfen
- [ ] Optional für den **Google Play Store**: Auf https://www.pwabuilder.com die Adresse eingeben →
      „Package for stores → Android“. Daraus entsteht ein App-Paket für den Play Store.
      Dafür ist ein Google-Play-Entwicklerkonto nötig.

Design by KRAFTPILOT Design.
