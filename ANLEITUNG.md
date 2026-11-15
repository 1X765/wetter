# KRAFTPILOT Fahrwetter – v1.8

Wetter-App für Motorradfahrer, weltweit nutzbar.
Läuft auf Android als App auf dem Startbildschirm (eine Web-App, die man installieren kann).

## Inhalt dieses Ordners

| Datei | Zweck |
|---|---|
| `index.html` | Die komplette App |
| `manifest.webmanifest` | Macht die App auf Android installierbar (Name, Icon, Farben) |
| `sw.js` | Hält die App offline verfügbar und lädt sie schnell |
| `icons/` | App-Icons (192 px, 512 px, „maskable“ für runde Android-Icons) |
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

**Update später:** Dateien ersetzen und neu hochladen. In `sw.js` die Zeile `const VERSION = "kp-v1.8"`
hochzählen (z. B. `kp-v1.9`), dann holt sich jedes Handy die neue Version automatisch.

## 2. Auf dem Android-Handy installieren (für dich und die Clique)

1. Die Adresse in **Chrome** öffnen.
2. Chrome zeigt „App installieren“. Falls nicht: Menü **⋮ → „App installieren“** bzw. „Zum Startbildschirm hinzufügen“.
3. Beim ersten Start **Standort erlauben**. Alternativ einen Ort über das Zahnrad suchen. Das geht weltweit.

Die Adresse einfach per WhatsApp an die Clique schicken, fertig.

## 3. Bedienung

- **Start:** Logo + zufälliger Biker-Spruch. Bleibt stehen, bis man auf „LOS GEHT'S“ tippt.
- **Ort:** Zahnrad oder Ortsname antippen → GPS oder Ort weltweit suchen. Die letzten 6 Orte werden gemerkt.
  Ein gesuchter Ort bleibt fest eingestellt. „Meinen Standort nutzen“ schaltet zurück auf GPS.
- **Ortszeit:** Liegt der Ort in einer anderen Zeitzone, steht die Ortszeit in Orange unter dem Datum.
- **↻:** Aktualisieren. Die App aktualisiert sich auch selbst (alle 15 Min. und beim Öffnen).
- **Ohne Netz:** Die letzten Daten werden mit dem Hinweis „OFFLINE · Stand …“ angezeigt.
- **FAHRMODUS** (Knopf unter der Uhrzeit): Riesige Anzeige für die Halterung. Das Display bleibt an.
- **Tour-Radar:** Wetter in 8 Richtungen rund um den Ort. Umschalten zwischen **50 km** (Feierabendrunde) und **100 km** (Tagestour), direkt in der Karte oder in den Einstellungen.
- **Tempo:** Landstraße (90) oder Autobahn (130) für die gefühlte Fahrtwind-Temperatur.

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
