---
title: "Formularer (hvor leads dør i stilhed)"
excerpt: "Mange formularer ser flotte ud, men er i praksis utilgængelige, fordi labels er lavet som placeholders. Det gør formularen usynlig for skærmlæsere og ubrugelig for en stor gruppe brugere."
date: "2026-01-20"
tags: ["accessibility"]
featured: true
author: "Brian Emilius"
---
Jeg ser rigtig ofte formularer, på ellers professionelt designede hjemmesider, som ikke har labels.

Nå jeg gennemgår hjemmesider for mine klienter er det faktisk et af de mest almindelige tilgængeligheds-problemer jeg støder på: En designer har lavet en rigtig flot formular, hvor hvert input-felt har en forklarende tekst. Problemet er bare at designet er lavet således at det ser ud som om den forklarende tekst står inde i input-felterne.

<img src="/form-with-placeholders.png" alt="grafik der viser en fomular med labels inde i input-felterne" style="width:400px;height:auto;">

Problemet med dette design er, at der ikke er foklaret hvordan de fire labels skal opføre sig. Når en bruger klikker på et input-felt, skal labellen så forsvinde, ligesom en placeholder? Eller skal den med en animation flyttes til et andet sted? Hvor skal den flyttes hen?

Programmøren, der sidder med dette design kender måske ikke designerens hensigt og griber ofte til de mest almindelige tricks: det ligner en placeholder, så jeg laver det som en placeholder.

Men brugere der benytter sig af skærmlæsere kan ikke læse placeholder-tekst. Det betyder at denne formular egentlig er "usynlig" for brugeren, eller i bedste fald synlig, men ubrugelig. Og er din formular usynlig for brugere, så kan de selvfølgelig ikke udfylde den.

## Hvad kan du gøre istedet?

Tænk på dine inputs som små komponenter:

```html
<div>
    <label>
        <span>E-mail</span>
        <input type="email" name="someName" placeholder="din@mail.dk">
    </label>
    <span>Placeholder til status- eller hjælpetekst</span>
</div>
```

Denne opsætning kan let styles til at ligne stort set alle almindelige design-mønstre.
- Du kan skjule din label helt hvis du vil: Brug en `sr-only` klasse
- Du kan sætte dine input felter op horisontalt eller vertikalt ved at bruge `flex`
- Du kan lave faste afstande mellem label og input felt så alt er justeret ens
- Du kan lave en fin animation på label så den minimeres når et input-felt er aktivt eller udfyldt