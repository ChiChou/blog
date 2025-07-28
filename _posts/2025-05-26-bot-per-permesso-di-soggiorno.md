---
layout: post
title:  "Bot per lo status del permesso di soggiorno"
date:   2025-05-26
image:  img/2025-05-26-bot-per-permesso/cinqueterre.webp
desc:   Trucco della vita
---

L'Italia è fantastica per i turisti. Ma per vivere qui, è una storia diversa.

I studenti e i lavoratori hanno spesso sperimentato il dolore di dover aspettare il rinnovo del permesso di soggiorno.

C'è un RSS per controllare lo stato del rinnovo, anche se non accelera nulla.

Per fortuna, il website ufficiale del Ministero dell'Interno ha un RSS per il permesso di soggiorno, che è molto utile per tenere traccia dello stato.

Devi usare il password sopra la ricevuta, che è un codice numerico lungo 12 caratteri.

![Il esempio](img/2025-05-26-bot-per-permesso/esempio.svg)

Per esempio, se il tuo codice è `123456789012`, l'URL RSS sarà:

```
https://questure.poliziadistato.it/servizio/stranieri?lang=english&pratica=123456789012&invia=Submit&mime=4
```

C'è un problema, però. Il sito web non è molto amichevole con i client RSS, e non fornisce un output valido.
Ho scritto un proxy per normalizzare l'output e renderlo più facile da usare.

<noscript>Embeded Gists require Javascript</noscript>
<script src="https://gist.github.com/ChiChou/0fefb4e33537fe732269d01ec58c146d.js"></script>

Allora puoi usare questo proxy sul iOS Shortcuts per creare un bot che ti dice il stato ogni giorno.
