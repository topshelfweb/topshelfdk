---
title: "Modaler og popups: Den hurtigste måde at ødelægge tilgængeligheden"
excerpt: "Modaler og popups kan hurtigt ødelægge tilgængeligheden på et website, hvis de ikke er implementeret korrekt. Problemer med fokus, tastaturnavigation og skjult indhold gør ofte modaler svære – eller umulige – at bruge for mange mennesker. I dette indlæg viser jeg, hvad der typisk går galt, og hvordan du kan lave en hurtig test af din egen hjemmeside. Det tager kun få sekunder at opdage problemerne."
date: "2026-03-16"
tags: ["brugervenlighed"]
featured: false
author: "Brian Emilius"
---
Modaler og popups findes overalt på moderne websites.

Cookie-bannere.  
Nyhedsbrevs-tilmeldinger.  
"Vent! Få 10% rabat hvis du tilmelder dig"-pop-ups.

De er ofte lavet for at øge konverteringer. Konveteringer som er vigtige for virksomheden.

Men teknisk set er de også en af de **hurtigste måder at ødelægge tilgængeligheden på et website**.

Og problemet rammer langt flere mennesker end bare skærmlæserbrugere.

## Hvad er en modal egentlig?

En modal er et element der **låser resten af siden**, indtil brugeren tager stilling.

Når en modal åbner, bør tre ting ske teknisk:

1. **Fokus flyttes ind i modalen**
2. **Fokus må ikke kunne forlade modalen** (fokus-fælde)
3. **Indholdet bagved skjules for hjælpemidler**

Hvis bare én af disse ting fejler, begynder problemerne.

Og de fejler oftere, end de virker.

## Problem 1: Fokus forsvinder

Når en modal åbner, bør tastaturfokus flyttes ind i den.

Men mange implementeringer glemmer det.

Resultatet?

Brugeren trykker **Tab**... og fokus hopper rundt **bag modalen**.

Så visuelt står der en stor popup midt på skærmen, men tastaturet navigerer i noget helt andet.

For en tastaturbruger føles det som om siden er gået i stykker.

## Problem 2: Ingen fokus-fælde

Selv hvis fokus starter korrekt i modalen, er der ofte **ingen fokus-fælde**.

Det betyder at når brugeren tabber igennem knapperne i modalen...

...hopper fokus pludselig ud på siden bagved.

Nu kan brugeren navigere i elementer der **ikke er synlige**.

Det er ekstremt forvirrende.

En korrekt modal skal sørge for, at fokus **bliver i modalen**, indtil den lukkes.

## Problem 3: Indholdet bagved er stadig "synligt"

For skærmlæsere skal resten af siden skjules når en modal åbner.

Typisk gøres det med `aria-hidden="true"` på indholdet bag modalen.

Hvis det ikke sker, kan en skærmlæser stadig navigere rundt i hele siden.

Så brugeren kan være inde i modalen og samtidig høre indhold fra siden bagved.

Det svarer lidt til at prøve at føre en samtale i et rum hvor **to radioer spiller samtidig**.

## Cookie-bannere er ofte de værste

Cookie-bannere er et perfekt eksempel på dårlige modaler.

De bryder ofte alle regler på én gang.

Typiske problemer:

* Fokus flyttes ikke ind i banneret
* Banneret kan ikke lukkes med tastatur
* Tab-navigation hopper bagved banneret
* Escape virker ikke
* Fokus sendes til toppen af siden bagefter

Ironisk nok er **det første element mange brugere møder på et website... også det mest ødelagte**.

## En mini-test du kan lave på 10 sekunder

Prøv dette på din egen hjemmeside:

1. Åbn siden
2. Brug **kun tastaturet**
3. Tryk **Tab** indtil en modal eller popup åbner
4. Fortsæt med at trykke **Tab**

Spørg dig selv:

* Hopper fokus bag modalen?
* Kan du komme ud af modalen igen?
* Kan du lukke den uden mus?

Hvis svaret er **nej** til bare én af dem...

...så er modalen et tilgængelighedsproblem.

## Det rammer ikke kun skærmlæsere

Modal-problemer påvirker mange flere brugere:

**Tastaturbrugere**
(alle med motoriske udfordringer eller power users)

**Zoom-brugere**
(når skærmen er forstørret, kan modaler skjule alt)

**Mobilbrugere**
(scroll-lock og fastlåste overlays)

**Alle andre**
(når popup'en bare ikke kan lukkes)

Modaler er ikke bare et tilgængelighedsproblem.

De er ofte **et generelt brugervenlighedsproblem**.

## Den simple sandhed

Modaler er teknisk svære at implementere korrekt.

De kræver styr på:

* fokus
* tastaturnavigation
* scroll-lock
* aria-attributter
* DOM-struktur

Men et af de store problemer er at mange af de her implementationer bliver lavet på en eftermiddag af et marketing- eller tracking-plugin.

Resultatet?

Et website der føles som om det **kæmper imod brugeren**.

## Hvis du vil vide om jeres site har dette problem

De fleste virksomheder opdager det først **når nogen klager**.

Men på det tidspunkt har brugere allerede opgivet.

Hos Topshelf hjælper jeg virksomheder med at finde præcis den slags skjulte problemer i deres websites og giver konkrete forslag til hvordan de kan løses. 

Hvis du vil vide om jeres modaler eller resten af jeres website faktisk virker for alle brugere, så tag fat i mig.

Det tager ofte mindre end en time at finde de største problemer.
