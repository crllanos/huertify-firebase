# Huertify.org LLC | agro microescla.

Huertify es una aplicacion gratuita, de codigo abierto y sin fines de lucro por parte de Cristian Llanos M.
* El set de datos debiera refrescarse con una frecuencia suficiente base para mantener exactitud. 

Huertify is a free open-source app.
* The data set should be refreshed on a frequent enough basis to maintain accuracy.

La Linux Foundation lanzo su proyecto Ag Stack, 'Open-Source Digital Infrastructure for the Agriculture Ecosystem'.
- Usted tiene su huerto.
- Pero, a veces, olvida cuando regarlo, fertilizarlo, etc...
- Huertify se lo recuerda.
- Administra tus recordatorios de riego, fertilizacion, cochesa y siembra de tu huerto.
- Recibe notificaciones en tu celular! (en desarrollo).
- Y recuerda, Huertify te ayuda a administrar tu huerto urbano.
- ...pero quien lo cuida, son tus propias manos.


Nos falta tu planta?
Pillaste un Bug?
Avisanos!

Huertify en Twitter : https://witter.com/Huertify

Huertify demo : https://huertify-org.web.app/ (pendiente huertify.cl y huertify.org config)

Huertify en Jira : https://huertify.atlassian.net/jira/software/projects/HTFY/boards/1/roadmap

Huertify es MIT License : https://en.wikipedia.org/wiki/MIT_License

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
* Huertify promueve la adopción, protección y cuidado de vegetación nativa de tu área.
* Huertify promotes the adoption, protection and care of native vegetation from your zone.

### Almacenamiento local / Local Storage
* La información de tu huerto queda en tu cuenta, en tu propio celular: compartir en la nube es opcional.
* Information of your garden stays on your account, on your own cellphone: to share it on cloud is optional.
### Búsquedas / Searchs
* Huertify no se hace responsable de las búsquedas realizadas por los usuarios del sistema.
* Huertify does not take responsability for the searchs made by the users.

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

En memoria de Violeta Parra.
