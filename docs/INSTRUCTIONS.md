# Toegankelijkheid audit FDND website

Verbeter de toegankelijkheid van de website van FDND.

## Context

Deze leertaak hoort bij sprint **All Human**. 
Dit is een voorbeeld taak en wordt behandeld tijdens een aantal workshops. 
Je kunt deze repository gebruiken om de onderwerpen nog eens rustig na te lezen.

## Briefing

De website van de Ad Frontend Design & Development, [fdnd.nl](https://fdnd.nl), bevat informatie over de opleiding.  
Onderzoek hoe je de toegankelijkheid van de website kan verbeteren en presenteer aan de hand van een prototype hoe de verbeteringen in de website toegepast kunnen worden.
 
## Doel van deze opdracht

Voer een web content accessibility guidelines controle uit op een website en presenteer je bevindingen.


## Werkwijze
Deze opdracht gaat over [testen](#testen) van de DLC.

### Testen
*In de testfase controleer je of jouw aanpassingen werken zoals bedoeld.*

#### Lighthouse audit vóór verbeteringen

<details>
<summary>Aanpak</summary>

Doe een lighthouse audit voor toegankelijkheid en maak een screenshot van de score. Zet het screenshot in de readme.

#### Materiaal Lighthouse

 - [Test accessibility with Chrome DevTools](https://www.youtube.com/watch?v=b0Q5Zp_yKaU)


</details>

#### Keyboard navigatie

Test in hoeverre het mogelijk is om met alleen een toetsenbord door de website te navigeren

<details>
<summary>Aanpak</summary>

 1. Navigeer door de website met je toetsenbord. Controleer of interactieve elementen een goede focus state hebben en een logische volgorde
 2. Maak issues aan waar nodig en los de issues op in code

#### Materiaal Keyboard navigatie

 - [A11yproject Controls: Controls ](https://www.a11yproject.com/checklist/#controls)
 - [The no mouse challlenge](https://uxdesign.cc/taking-the-keyboard-navigation-red-pill-dbb76dd73b1e)

</details>

#### Screenreader

Test met een screenreader of de website goed te gebruiken is als je de website niet kan zien

<details>
<summary>Aanpak</summary>

 1. Navigeer met een screenreader door de website. Test of het je lukt om snel door de heading structuur en landmarks te navigeren
 2. Check of content images een alternatieve tekst hebben
 3. Check of interactieve elementen een betekenisvolle tekst hebben die duidleijk maken waar naartoe genavigeerd kan worden
 4. Maak issues aan waar nodig en los de issues op in code

#### Materiaal Screenreader
 - [VoiceOver een Mac OS screenreader](https://webaim.org/articles/voiceover/)
 - [JAWS on Windows](https://downloads.sensotec.be/Jaws/Sneltoetsen-JAWS2018.pdf)
 - [A11yproject Checklist: Global code ](https://www.a11yproject.com/checklist/#https://www.a11yproject.com/checklist/#global-code)
 - [A11yproject Checklist: Headings ](https://www.a11yproject.com/checklist/#headings)
 - [A11yproject Checklist: Controls ](https://www.a11yproject.com/checklist/#controls)
 - [A11yproject Checklist: Images ](https://www.a11yproject.com/checklist/#images)

</details>

#### Lighthouse audit na verbeteringen

<details>
<summary>Aanpak</summary>

 1. Doe opnieuw een lighthouse audit voor toegankelijkheid
 2. Maak een screenshot van de score en zet deze onder het eerste screenshot

#### Materiaal Lighthouse

 - [Test accessibility with Chrome DevTools](https://www.youtube.com/watch?v=b0Q5Zp_yKaU)
 

</details>
