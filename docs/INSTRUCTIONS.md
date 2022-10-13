# All Human - WCAG Audit

Doe een WCAG test op een bestaande website en rapporteer daar over.

## Context

Deze leertaak hoort bij sprint **All Human**. Dit is een deeltaak die je individueel uitvoert.

In het college S03W1-01-WCAG-Compliance-checks wordt behandeld hoe je een WCAG test kan uitvoeren.



 
## Doel van deze opdracht

Je leert hoe je een toegankelijkheids test kan uitvoeren en je presenteert je bevindingen.


## Werkwijze
Deze opdracht gaat over [testen](#testen) van de DLC.


### Testen
<!-- *In de testfase test je of een website goed werkt.* -->

Het is de verantwoordelijkheid van een frontender dat een website voor verschillende mensen, met verschillende apparaten, in verschillende situaties toegankelijk is. Met goede code en een goed design kun je ervoor zorgen dat mensen met een (tijdelijke) beperking een website ook op een prettige manier kunnen bedienen. 

Stel je voor dat de gebruiker van jouw website niet kan zien, of geen kleuren ziet, of een website bedient met alleen het toetsenbord of spastisch is. Of een arm in het gips heeft. Of ... 

Een goede toegankelijke website voldoet aan de _[Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/)_ van het W3C. [The A11Y Project](https://www.a11yproject.com) is een goede plek om te lezen over toegankelijkheid, daar staat ook een [checlist](https://www.a11yproject.com/checklist/) waar een website aan moet voldoen. 

Voor het testen van toegankelijkheid kun je een website automatisch testen in de browser met bijvoorbeeld de tool _Lighthouse_. Voor deze opdracht ga je zo'n test uitvoeren en schrijf je een toegankelijkheidsrapport.

1. Eerst ga je een [Lighthouse test](#1-lighthouse-test) doen van een bestaande website en je documenteer de belangrijkste bevindingen uit de test in je Wiki
2. Daarna ga je [handmatige](#2-handmatige-tests) dezelfde website verder testen en documenteer je tests.


### 1.Lighthouse Audit

Lighthouse is een geautomatiserde test die je in een Chrome browser kan uitvoeren. In de Devtools kun je de Lighthouse gebruiken. Je begint de toegankelijkheidstest met een Lighthouse Audit.  

#### Aanpak

- Ga naar een bestaande website
- Open de Devtools en klik naar Lighthouse
- Selecteer alleen _Accessibility_ en zorg dat _Clear storage_ aan staat en de _Throttling_ op _default_. 


- Run de test en maak een screenshot van de score en zet deze in de Wiki
- Bekijk het Lighthouse rapport en documenteer de problemen en de goede uitkomsten van de test in de Wiki. Schrijf bij elke onderdeel in je eigen woorden wat het betekent. Schrijf bij de problemen hoe je dit in code zou kunnen oplossen.


#### Materiaal Lighthouse Audit

 - [Test accessibility with Chrome DevTools](https://www.youtube.com/watch?v=b0Q5Zp_yKaU)
 - [Lighthouse documentation](https://developer.chrome.com/docs/lighthouse/accessibility/)


### 2.Handmatige tests

Lighthouse is een geautomatiserde test die een aantal veel voorkomende toegankelijkheidsproblemen kan testen. Echter, een geautomatiseerde test is nooit voldoende om een website goed op toegenkelijkheid te testen. Hiervoor moet je nog een aantal handmatige tests uitvoeren en beoordelen. In het Lighthouse rapport staan een aantal handmatige checks genoemd, maar ook op de website van The A11Y Project staat een checklist. Deze gaan we gebruiken om de bestaande website mee te testen.

#### Aanpak

- Lees de handmatige checks die in het Lighthouse rapport worden genoemd
- Vergelijk de lijst met de checlist van de A11Y Project checklist. Je zult dan zien dat hier (ongeveer) dezelfde checks staan maar dan anders georganiseerd
- Begin met het testen van de website met je keyboard zoals beschreven in het artikel "How To Do an Accessibility Review - Start with the keyboard"
- Test de website daarna met een Screenreader, zoals beschreven in het artikel "How To Do an Accessibility Review - Try it with a screen reader"
- Test daarna de _interactive elements_ en _headings and landmarks_, zoals beschreven in het artikel "How To Do an Accessibility Review"
- Documenteer je bevindingen in de Wiki

#### Materiaal handmatige tests

- [How To Do an Accessibility Review](https://web.dev/how-to-review/)
- [The A11Y Project Checklist](https://www.a11yproject.com/checklist/)

#### Materiaal Screenreader
 - [VoiceOver een Mac OS screenreader](https://webaim.org/articles/voiceover/)
 - [JAWS on Windows](https://downloads.sensotec.be/Jaws/Sneltoetsen-JAWS2018.pdf)


## Criteria

Focus sprint 3: All Human - De focus van deze sprint ligt op gebruiksvriendelijkheid, toegankelijkheid, testen en de testresultaten gebruiken voor het verbeteren van een ontwerp.

Deze deeltaak hoort bij het gedragscriterium:

- Methodisch handelen: Je past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe

Deze opdracht is done als:

- [ ] je hebt een Lighthouse test gedaan op een ebstaande website en de test is gedocumenteerd in de Wiki van deze deeltaak
- [ ] Je hebt een een serie handmatige tests gedaan en gedocumenteerd in de wiki


