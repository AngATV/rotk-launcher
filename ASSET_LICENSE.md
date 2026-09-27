# Licence et provenance des assets

Ce document distingue le code open source du launcher des éléments visuels ou marques appartenant à des tiers.

## Asset ROTK inclus

Le rebranding utilise les fichiers maîtres fournis par l’équipe ROTK, selon `ROTK_Brand_Guidelines_v1.pdf` (version 1.0, septembre 2026) :

- `public/branding/rotk-wordmark-red-skull.svg` : wordmark officiel provenant de [rotk.app](https://rotk.app/branding/rotk-wordmark-red-skull.svg), conservé sans modification.
- `public/branding/rotk-mark.svg` : `ROTK Media Pack/Logo/SVG/Icon/Icon Red.svg`.
- `public/branding/rotk-mark.png` : `ROTK Media Pack/Logo/PNG/App icons/Icon 16-256/App256x.png`. `build/icon.ico` est dérivé de ce master.
- `public/branding/rotk-key-art.png` : `ROTK Media Pack/Social Media/ROTK Header.png`, conservé sans modification ; le cadrage est réalisé par CSS.
- `public/branding/rotk-launcher-art.png` : adaptation de ce visuel pour le fond du launcher, réalisée avec l’outil intégré GPT Image à la demande de l’équipe ROTK. Composition élargie, suppression des textes intégrés et prolongement des zones coupées ; le master original reste disponible dans `rotk-key-art.png`. Cette adaptation ne modifie pas les droits sur les éléments d’origine.
- `public/branding/fonts/eurostile-regular.ttf` et `eurostile-black.ttf` : fichiers `Eurostile.ttf` et `Eurostile-Black Regular.ttf` du dossier `Font` du pack fourni.

Ces éléments de marque et les polices conservent les droits de leurs ayants droit respectifs. Leur fourniture pour l’interface officielle ne les place pas sous GPL et n’accorde aucun droit implicite de réutilisation de la marque ou de redistribution des polices. Le pack source ne contient pas de licence distincte autorisant leur redistribution par des tiers.

Les forks publics sont invités à remplacer ce symbole et le nom du produit lorsqu’ils changent l’identité ou le service cible.

## Couvertures chargées depuis rotk.app

Les images des dev updates et patch notes ne sont pas embarquées dans le dépôt ni dans le paquet source. Le launcher charge uniquement, à l’exécution, les URLs HTTPS dont l’origine est exactement `https://rotk.app`.

Ces images restent soumises aux droits indiqués par leur page de publication et leurs ayants droit. Leur affichage par le launcher ne les place pas sous GPL et ce dépôt n’accorde aucun droit de réutilisation sur celles-ci.

## Assets H1Z1

Aucun fichier extrait du client H1Z1 n’est ajouté par ce rebranding. Le visuel promotionnel fourni dans le pack ROTK est identifié ci-dessus ; les éléments du jeu qu’il représente conservent les droits de leurs ayants droit. Le client et ses assets demeurent la propriété de leurs ayants droit.

H1Z1, Z1 Battle Royale, Daybreak et les noms ou logos associés sont cités uniquement pour décrire la compatibilité. ROTK n’est ni approuvé ni affilié à Daybreak Game Company.

## Polices et icônes tierces

L’interface emploie Eurostile (pack fourni, provenance ci-dessus) et Inter (Fontsource, SIL Open Font License 1.1). Barlow Condensed reste une dépendance historique et n’est plus chargée par l’interface. Les icônes Lucide sont sous licence ISC. Les références sont détaillées dans [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
