# Huertify.org
## Agro microescla.

Huertify es una aplicacion gratuita, de codigo abierto y sin fines de lucro.
Huertify is a free open-source app.

Huertify es MIT License : https://en.wikipedia.org/wiki/MIT_License
Huertify en Jira : https://huertify.atlassian.net/jira/software/projects/HTFY/boards/1/roadmap

La Linux Foundation lanzo su proyecto Ag Stack, 'Open-Source Digital Infrastructure for the Agriculture Ecosystem'.
- Usted tiene su huerto.
- Pero, a veces, olvida cuando regarlo, fertilizarlo, etc...
- Huertify se lo recuerda.
- Administra tus recordatorios de riego, fertilizacion, cochesa y siembra de tu huerto.
- Recibe notificaciones en tu celular! (en desarrollo).
- Y recuerda, Huertify te ayuda a administrar tu huerto urbano.
- ...pero quien lo cuida, son tus propias manos.


Nos falta tu planta? Pillaste un Bug? Avisanos!
twitter.com/Huertify


Pronto en Google Play!

## Propósito
1 planta = 1 QR ( https://es.wikipedia.org/wiki/QR )

## Modelo

### HfPlantacion
	- hfid: uuid; // id interno
	- hftipo: string; // Qué es?
	- hfcantidad: number; // Cuántas son?
	- hfgerminacion: Date; // Fecha germiancion

	- hflogin: any; // de quien es - Auth Firebase - https://huertify.atlassian.net/browse/HTFY-28
	- hfgeo : any; // Ubicación - https://huertify.atlassian.net/browse/HTFY-31


## Discalimers
* La información queda en tu cuenta, en tu propio celular.
* Information stays on your account, on your own cellphone.

# Dev
- cd functions/
- git fetch
- git pull
- npm clean-install
- expo start
	- npm install --global expo-cli
-
- { ...dev... }
-
- npm clean-install
- expo build:web
- firebase deploy --only hosting:huertify-org
- - sudo npm install -g firebase-tools
- git push
