---
title: "Når navigationen teknisk set er korrekt, men stadig ikke kan bruges"
excerpt: "Det er muligt at have en navigation, der overholder WCAG og består alle tekniske tests, og som alligevel er svær at bruge. Artiklen viser, hvordan for mange links, ulogisk fokus-rækkefølge og gentagelser i navigationen kan skabe forvirring for brugerne, selv når alt er formelt korrekt. Pointen er enkel: WCAG sikrer adgang, men ikke nødvendigvis overblik eller brugervenlighed."
date: "2026-01-29"
tags: ["ux", "accessibility"]
featured: false
author: "Brian Emilius"
---
Det er en situation, jeg støder på igen og igen:

En hjemmeside har fået lavet et tilgængelighedstjek.  
WCAG-kravene er overholdt.  
Navigationen består testen.

Og alligevel har brugerne svært ved at finde rundt.

Det er ikke en selvmodsigelse. Det er et klassisk problem.

## WCAG sikrer adgang – ikke overblik

WCAG handler om, **om man kan tilgå indholdet**:

- Kan links fokuseres?
- Kan navigationen bruges med tastatur?
- Bliver elementer annonceret korrekt for hjælpemidler?

Det er alt sammen nødvendigt.  
Men det er ikke det samme som, at navigationen er **nem at forstå eller bruge**.

Her er tre meget almindelige eksempler fra virkeligheden.

## For mange links

Mange navigationer fejler ikke teknisk, de fejler i prioritering.

Jeg ser ofte hovedmenuer med 20-30 links, dropdowns med flere niveauer og sektioner, hvor alt er gjort tilgængeligt for en sikkerheds skyld.

Teknisk set er det korrekt.  
Alt kan nås. Intet er skjult.

Men for brugeren opstår spørgsmålet:

> Hvor starter jeg?  
> Og hvad er egentlig vigtigst her?

WCAG siger intet om, hvor mange valg et menneske kan overskue.  
Det gør brugervenlighed.

## Ulogisk fokus-rækkefølge

En anden klassiker er fokus, der bevæger sig "korrekt", men uforståeligt.

Det sker ofte, når:

- DOM-strukturen er logisk
- Layoutet er visuelt omarrangeret
- Fokus følger koden, ikke øjet

Resultatet kan være:

- Fokus hopper fra logo til søgning
- Videre til cookie-links
- Pludselig til footer
- Og først derefter til selve menuen

Alt kan fokuseres.  
Intet bryder reglerne.

Men rækkefølgen giver ingen mening for brugeren.

En fokus-rækkefølge kan godt være korrekt og stadig ubrugelig.

## Gentagelser i navigationen

Mange sider gentager de samme links igen og igen:

- I topnavigationen
- I megamenuen
- I genveje på forsiden
- I footeren

Formålet er ofte at "sikre adgang".

Men for brugeren betyder det:

- Mere læsning
- Flere valg
- Større kognitiv belastning

Især for tastatur- og skærmlæserbrugere kan gentagelser gøre navigationen langsommere og mere trættende, selvom alt er teknisk tilgængeligt.

## WCAG-overholdelse er ikke lig med brugervenlighed

Det er her misforståelsen opstår.

WCAG er et **minimumskrav**.  
Brugervenlighed er et **kvalitetsniveau**.

Derfor finder gode audits ofte to typer problemer:

- Tilgængelighedsfejl (WCAG)
- Brugervenlighedsproblemer (struktur, prioritering, overblik)

De løser ikke det samme problem – men de supplerer hinanden.

## Konklusion

Du kan godt have en navigation, der:

- Overholder WCAG
- Består alle tekniske tests
- Og stadig forvirrer dine brugere

Tilgængelighed handler om adgang.  
Brugervenlighed handler om forståelse.

Begge dele er nødvendige, hvis din hjemmeside rent faktisk skal fungere for rigtige mennesker i virkelige situationer.
