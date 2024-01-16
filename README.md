# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


favorit tabel på serveren, når du opretter en bruger oprettes et specifikt id til dig, men hvis du vil lave en favorite liste hos en bruger, så skal du finde det rigtige endpoint for at hente favoriten, du sender requesten afsted med et token, som så viser den specifikke brugers favoritter!!!

link til figma: https://www.figma.com/file/TKNHKa6INS4OnT1pwyHQuZ/Din-m%C3%A6gler?type=design&node-id=297-47&mode=design&t=2uKH3JB9wxzKwZZS-0¨


Spørg chat gbt om dette: avorites can be added or removedd from the user in an array.

A complete list of favorites must be provided when updating.

To add a favorite, append a home id to the array and send a put request with the updated array.

To remove a favorite, remove the home id from the array, and send a put request with the updated array.

A users favorites will appear on the home property when logging in or accessing users/me.

OG SØRG FOR AT LOG in ændre sig når du er logget ind!!!
