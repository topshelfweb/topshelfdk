---
title: "ARIA redder dig ikke: Når ‘fixet’ gør tilgængeligheden værre"
excerpt: "ARIA kan ikke redde dårlig HTML. Alt for ofte bruges ARIA-attributter som hurtige “fixes”, der i virkeligheden gør tilgængeligheden mere  krøbelig. Når semantik og struktur ikke er på plads, kan skærmlæsere blive forvirrede – selv om koden ser korrekt ud. Tilgængelighed starter med det rigtige fundament. Ikke med lappeløsninger."
date: "2026-03-03"
tags: ["tilgængelighed"]
featured: false
author: "Brian Emilius"
---
ARIA er blevet webverdenens gaffatape.

Noget virker ikke for skærmlæsere? Smid en aria-label på.  
En knap er bygget som en `<div>`? Giv den `role="button"`.  
Navigationen er rodet? Tilføj nogle ekstra attributter.  

Problem løst.

Eller...?

## Hvad er ARIA helt kort?

ARIA står for Accessible Rich Internet Applications.  
Det er et sæt attributter, som kan hjælpe hjælpemidler (fx skærmlæsere) med at forstå dynamiske eller komplekse interfaces.

Det er vigtigt at forstå én ting:

ARIA erstatter ikke HTML.  
Det er et supplement.

W3C’s første regel om ARIA er ret brutal i sin enkelhed:

> Brug ikke ARIA, hvis du kan bruge almindelig HTML.

Alligevel ser jeg igen og igen det modsatte.

## Når ARIA bliver en lappeløsning

ARIA bliver ofte brugt som en hurtig "rettelse", når fundamentet er forkert.  
Men hvis HTML-strukturen er dårlig, kan ARIA faktisk gøre situationen værre.

Her er tre klassiske eksempler, jeg finder i audits.

1. `role="button"` på en `<div>`
```html
<div role="button" onclick="save()">Gem</div>
```

Det ligner en knap.

Men:

- Den kan ikke aktiveres med Enter/Space som en rigtig `<button>`
- Den får ikke automatisk fokus
- Den opfører sig ikke som brugere forventer

En rigtig løsning:

```html
<button type="button">Gem</button>
```

HTML giver dig allerede:

- Tastaturunderstøttelse
- Fokus
- Korrekt rolle
- Forventet adfærd

ARIA-varianten kræver, at du manuelt genopfinder alt det.

Det er ikke en forbedring.
Det er teknisk gæld forklædt som tilgængelighed.

2. `aria-label` der ikke matcher synlig tekst
```html
<button aria-label="Slet bruger">Fjern</button>
```

Den seende bruger ser: "Fjern"
Skærmlæseren siger: "Slet bruger"

To forskellige budskaber.
To forskellige virkeligheder.

Det skaber forvirring især for:

- Brugere med kognitive udfordringer
- Brugere der navigerer visuelt og auditivt parallelt
- Testere der forsøger at reproducere fejl

ARIA må ikke omskrive virkeligheden.  
Den skal beskrive den.

3. ARIA ovenpå dårlig struktur
```html
<div role="navigation">
  <div role="link">Forside</div>
  <div role="link">Produkter</div>
</div>
```

Det her er en ombygget `<nav>` med `<a>`-elementer.

Problemet?

- Ingen rigtige links
- Ingen korrekt tastaturnavigation
- Ingen standardforventninger opfyldt

Skærmlæsere kan godt læse rollerne op.  
Men adfærden følger ikke med.

Resultatet:  
Brugeren hører noget, der lyder rigtigt, men som ikke virker rigtigt.

Det er værre end en synlig fejl.

## Hvorfor skærmlæsere bliver forvirrede

Skærmlæsere bygger på en tilgængelighedstræstruktur (accessibility tree), som genereres ud fra HTML.

Når vi begynder at:
- Overstyre roller
- Omskrive labels
- Simulere semantik

... så risikerer vi at skabe inkonsistens mellem:

- Det DOM’en siger
- Det ARIA siger
- Det brugeren oplever

Og forskellige skærmlæsere håndterer ARIA forskelligt.  
Det betyder, at noget kan "virke" i én kombination og bryde i en anden.

ARIA er magtfuldt.  
Men det er ikke tilgivende.

## Den skjulte konsekvens

Det farligste ved ARIA-misbrug er ikke, at noget fejler tydeligt.

Det er, at det ser ud som om, det virker.

Lighthouse scorer måske fint.  
Koden ser tilgængelig ud.  
Der er jo masser af aria-attributter.

Men brugeroplevelsen er skrøbelig.

Og det er præcis den slags fejl, der først opdages sent. Ofte når en reel bruger støder på dem.

## Start rigtigt

Tilgængelighed starter ikke med ARIA.

Den starter med:

- Korrekte HTML-elementer
- Rigtig semantik
- Forventet adfærd
- Tastaturunderstøttelse

ARIA skal kun bruges, når HTML ikke kan løse opgaven alene.

Ikke som genvej.  
Ikke som plaster.  
Ikke som pynt.  

Start med korrekt semantik, ikke attributter.

Jeg hjælper virksomheder med at finde netop de her skjulte fejl. Dem der ikke nødvendigvis ses, men mærkes.

Hvis du vil vide, om jeres løsning reelt fungerer for alle brugere, ikke bare på papiret, så lad os tage en gennemgang.