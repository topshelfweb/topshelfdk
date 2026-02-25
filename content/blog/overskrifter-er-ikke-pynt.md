---
title: "Overskrifter er ikke pynt, de er navigation for skærmlæsere"
excerpt: "Overskrifter er ikke kun et visuelt greb. De er selve navigationsstrukturen for brugere af skærmlæsere og andre hjælpemidler. Når H1–H6 bruges forkert, springes over eller erstattes af \"visuelle overskrifter\" uden korrekt semantik, mister siden sin logiske opbygning. I denne artikel forklarer jeg, hvorfor korrekt overskriftshierarki er afgørende for forståelse, navigation og professionel informationsarkitektur, og hvordan små strukturelle justeringer kan gøre en stor forskel for både tilgængelighed og brugeroplevelse."
date: "2026-02-17"
tags: ["tilgængelighed"]
featured: false
author: "Brian Emilius"
---
De fleste tænker på overskrifter som noget visuelt.

Noget der skal:
- Se flot ud  
- Skabe luft i layoutet  
- Gøre teksten mere "indbydende"  

Men for brugere af skærmlæsere er overskrifter ikke pynt.

De er navigation.

Og når vi misbruger dem, svarer det til at fjerne vejskiltene på en motorvej.

## Forestil dig to måder at læse en side på

**Den visuelle bruger:**
Scroller. Skimmer. Finder noget med stor fed tekst. Stopper dér.

**Skærmlæser-brugeren:**
Trykker på en tast og får en liste over alle overskrifter på siden.  
Springer direkte til den sektion, der er relevant.

Overskrifter er bogstaveligt talt en indholdsfortegnelse.

Hvis strukturen er forkert, bliver navigationen kaotisk.

## Problem 1: H1–H6 bruges til design, ikke til struktur

Det sker hele tiden:

- En H3 bruges, fordi den har den rigtige størrelse  
- En H2 vælges, fordi den ser "pænere" ud  
- En H4 bruges bare for at få mindre tekst  

Men H1–H6 er ikke størrelser.

De er et hierarki.

Når man springer vilkårligt rundt, får skærmlæseren en struktur som denne:

- H1
- H4
- H2
- H5

Forestil dig en bog, hvor kapitlerne hedder:
Kapitel 1 → Kapitel 4 → Kapitel 2 → Kapitel 5

Det giver ingen mening.

## Problem 2: Visuelle overskrifter uden semantik

En tekst kan sagtens ligne en overskrift uden at være det.

```html
<p class="big-bold-text">Vores services</p>
```

Visuelt? Ja.  
Semantisk? Nej.

En skærmlæser ser bare et almindeligt afsnit.

Brugeren mister muligheden for at navigere direkte til sektionen.

Det svarer til at male et vejskilt på en mur i stedet for at sætte et rigtigt skilt op.

## Problem 3: Spring i hierarkiet

Et klassisk eksempel:

```html
<h1>Forside</h1>
<h2>Vores ydelser</h2>
<h4>UX-analyse</h4>
```

Hvor blev H3 af?

Spring i hierarkiet betyder, at strukturen bliver brudt.
Det skaber forvirring for teknologier, der forventer en logisk opbygning.

Det handler ikke om perfektion.

Det handler om forståelighed.

## Aha-oplevelsen

Her er det, mange beslutningstagere ikke ved:

En skærmlæser-bruger læser sjældent hele siden fra top til bund.

De scanner overskrifter først.

Hvis strukturen er rodet, bliver hele siden rodet.

Det er ikke et "handicap-problem".
Det er et informations-arkitektur-problem.

Og det rammer:

- Brugere med synsnedsættelse
- Brugere med kognitive udfordringer
- Brugere der navigerer hurtigt via tastatur
- Power-brugere der scanner indhold effektivt

Overskrifter er fundamentet for forståelse.

## Den simple tommelfingerregel

- Der bør kun være én H1 (sidens hovedemne)
- Brug H2 til hovedsektioner
- Brug H3 under H2
- Spring ikke niveauer over
- Brug CSS til design, ikke til heading-tags

Design bestemmer udseendet.  
HTML bestemmer strukturen.

De to ting skal ikke blandes sammen.

## Hvorfor det her betyder noget

Når strukturen er korrekt:

- Bliver indhold lettere at forstå
- Bliver siden lettere at navigere
- Bliver oplevelsen mere professionel
- Får I færre friktionspunkter i brugerrejsen

Og vigtigst:

I viser, at I har styr på fundamentet.

Overskrifter er ikke pynt.

De er arkitekturen bag jeres indhold.