---
title: "Hvis jeres udvikler siger \"det virker med en screen reader\", så spørg om dette"
excerpt: "Mange virksomheder siger, de har testet deres hjemmeside med en screen reader. Men at kunne navigere er ikke det samme som at kunne forstå indholdet. I dette indlæg forklarer jeg, hvorfor mange tilgængelighedstests kun skraber overfladen."
date: "2026-03-04"
tags: ["tilgængelighed", "testing"]
featured: false
author: "Brian Emilius"
---
Der er en sætning, jeg hører igen og igen i projekter:

> "Vi har testet det med en screen reader. Det virker!"

Problemet er bare, at den sætning sjældent betyder det, folk tror den betyder.

For i mange virksomheder betyder *"vi har testet det"* bare, at nogen har åbnet en screen reader, trykket lidt rundt og konstateret at siden ikke brød sammen.

Men det er ikke det samme som at siden faktisk er brugbar.

## At kunne navigere er ikke det samme som at kunne forstå

Når man tester tilgængelighed, bliver der ofte fokuseret på **om man kan navigere rundt**.

Kan man hoppe mellem overskrifter?  
Kan man tabbe til knapperne?  
Kan man aktivere links?

Hvis svaret er ja, konkluderer mange: *Så virker det.*

Men virkeligheden er mere kompleks.

For brugere af screen readers handler det ikke kun om **at kunne bevæge sig rundt**.  
Det handler om **at kunne forstå hvad der foregår**.

Et par klassiske eksempler:

- En knap hedder *"Læs mere"*, men hvad handler den om?
- En formular har labels, men de giver ikke mening uden konteksten fra layoutet
- En navigation fungerer teknisk, men strukturen er ulogisk

Alt dette kan sagtens "virke" i en screen reader.

Men det betyder ikke, at det giver mening.

## Den hurtige test der snyder mange

En klassisk test ser sådan ud:

1. Åbn siden
2. Start en screen reader
3. Tab gennem siden
4. Aktiver nogle links
5. Konkludér: "Det virker."

Problemet er, at denne test kun viser én ting:

At siden **ikke bryder sammen teknisk**.

Den siger intet om:

- Om strukturen giver mening
- Om information kan forstås uden visuel kontekst
- Om navigationen er logisk
- Om brugeren faktisk kan løse sin opgave

Det svarer lidt til at teste en bog ved at bladre i den og konkludere:

> "Alle siderne er der, så den må være god."

## Den vigtige forskel: Teknisk korrekt vs. faktisk brugbar

Tilgængelighed handler ikke kun om, at teknologien virker.

Det handler om **oplevelsen for brugeren**.

Kan en blind bruger forstå siden uden at gætte?  
Kan de finde det de leder efter?  
Kan de gennemføre en opgave uden frustration?

Hvis svaret er nej, så er det ligegyldigt at "screen readeren virker".

Så virker **siden** ikke.

## Spørgsmålet du bør stille næste gang

Næste gang nogen siger:

> "Vi har testet det med en screen reader."

Så prøv at stille et simpelt spørgsmål:

**"Hvordan testede I det?"**

- Blev der løst konkrete brugeropgaver?
- Blev strukturen gennemgået?
- Blev teksten vurderet uden visuel kontekst?
- Blev der testet af en faktisk bruger?

Hvis svaret er uklart, er testen sandsynligvis også det.

## Den lidt ubehagelige sandhed

De fleste virksomheder tester ikke for at finde problemer.

De tester for at kunne sige, at de har testet.