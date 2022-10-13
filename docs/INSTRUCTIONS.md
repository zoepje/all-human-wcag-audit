# All Human - WCAG Audit

Doe een WCAG test op een bestaande website en rapporteer daar over.

## Context

Deze leertaak hoort bij sprint **All Human**. Dit is een deeltaak die je individueel uitvoert.

In het college S03W1-01-WCAG-Compliance-checks wordt behandeld hoe je een WCAG test kan uitvoeren.



 
## Doel van deze opdracht

Je leert hoe je een web content accessibility guidelines (WCAG) kan uitvoeren en je presenteert je bevindingen.


## Werkwijze
Deze opdracht gaat over [testen](#testen) van de DLC.


### Testen
<!-- *In de testfase test je of een website goed werkt.* -->

Het is de verantwoordelijkheid van een frontender dat een website voor verschillende mensen, met verschillende apparaten, in verschillende situaties toegankelijk is. Met goede code en een goed design kun je ervoor zorgen dat mensen met een (tijdelijke) beperking een website ook op een prettige manier kunnen bedienen. 

Stel je voor dat de gebruiker van jouw website niet kan zien, of geen kleuren ziet, of een website bedient met alleen het toetsenbord of spastisch is. Of een arm in het gips heeft. Of ... 

Een goede toegankelijke website voldoet aan de _[Web Content Accessibility Guidelines]((https://www.w3.org/TR/WCAG21/)_ van het W3C. [The A11Y Project](https://www.a11yproject.com) is een goede plek om te lezen over toegankelijkheid, daar staat ook een [checlist](https://www.a11yproject.com/checklist/) waar een website aan moet voldoen. 

Voor het testen van toegankelijkheid kun je een website testen in de browser met bijvoorbeeld de tool _Lighthouse_. Voor deze opdracht ga je zo'n test uitvoeren en schrijf je een toegankelijkheidsrapport.


### Lighthouse audit vóór verbeteringen

#### Aanpak

Doe een lighthouse audit voor toegankelijkheid en maak een screenshot van de score. Zet het screenshot in de readme.

#### Materiaal Lighthouse

 - [Test accessibility with Chrome DevTools](https://www.youtube.com/watch?v=b0Q5Zp_yKaU)



### Keyboard navigatie

Test in hoeverre het mogelijk is om met alleen een toetsenbord door de website te navigeren

#### Aanpak

 1. Navigeer door de website met je toetsenbord. Controleer of interactieve elementen een goede focus state hebben en een logische volgorde
 2. Maak issues aan waar nodig en los de issues op in code

#### Materiaal Keyboard navigatie

 - [A11yproject Controls: Controls ](https://www.a11yproject.com/checklist/#controls)
 - [The no mouse challlenge](https://uxdesign.cc/taking-the-keyboard-navigation-red-pill-dbb76dd73b1e)



### Screenreader

Test met een screenreader of de website goed te gebruiken is als je de website niet kan zien

#### Aanpak

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



### Lighthouse audit na verbeteringen


#### Aanpak

 1. Doe opnieuw een lighthouse audit voor toegankelijkheid
 2. Maak een screenshot van de score en zet deze onder het eerste screenshot

#### Materiaal Lighthouse

 - [Test accessibility with Chrome DevTools](https://www.youtube.com/watch?v=b0Q5Zp_yKaU)
 


## Criteria

Focus sprint 3: All HHuman - De focus van deze sprint ligt op gebruiksvriendelijkheid, toegankelijkheid, testen en de testresultaten gebruiken voor het verbeteren van een ontwerp.

Deze deeltaak hoort bij het gedragscriterium:

- Methodisch handelen: Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe

Deze opdracht is done als:

- [ ] je hebt de test gedaan
- [ ] Je hebt de test gedocumenteerd in de wiki


