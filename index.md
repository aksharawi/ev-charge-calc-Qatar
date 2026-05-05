# Charge Calculator — EV Charging Cost Calculator

> A free worldwide web app that calculates electric vehicle (EV) and plug-in hybrid (PHEV) charging costs in your local currency.

**URL:** https://evcalculator.app
**Author:** [@aksharawi](https://x.com/aksharawi)
**Version:** 2.7.3
**Languages:** English, Arabic, French, Spanish
**License:** All rights reserved

-----

## What It Does

Charge Calculator helps EV and PHEV owners answer questions like:

- “How much does it cost to fully charge my car?”
- “What will I spend on charging per month?”
- “How long will it take using a wall plug versus an AC charger?”
- “What’s the battery capacity of my Tesla / BYD / Hyundai / etc.?”

Users either pick their car from a built-in database of 100+ models (battery is auto-filled) or enter their battery capacity manually. Then they set state of charge, electricity tariff, and charging frequency. The app calculates cost per charge, monthly cost, annual cost, and estimated charging time in real time.

## Key Features

- **Vehicle picker — 108 EV/PHEV models from 35 brands** including Tesla, BYD, Hyundai, Kia, Volkswagen, Audi, BMW, Mercedes-Benz, Porsche, Ford, Chevrolet, Nissan, Polestar, Volvo, Toyota, Honda, Mazda, Peugeot, Citroën, Opel, Renault, Jeep, Jetour, MG, Lucid, Rivian, Genesis, Lexus, MINI, Fiat, Mitsubishi, NIO, XPeng, Denza, Zeekr, Jaguar, Land Rover. Brand → model → variant flow auto-fills the right battery size.
- **Auto-detects user country and currency** via IP geolocation (with browser language fallback)
- **27 supported countries** across Gulf, MENA, Europe, Americas, Asia, and Oceania, each with realistic local electricity tariffs (Low / Medium / High presets)
- **Two charger types** — Wall Plug (Mode 2, 2.2 kW) and AC Charger (Type 2, 11 kW)
- **Four languages** — English, Arabic (RTL), French, and Spanish
- **Light and dark mode**
- **Installable PWA** — works offline once installed to the home screen
- **No account required** — fully client-side, no data stored on a server

## How To Use It

1. The app auto-detects your country on first visit and pre-fills typical electricity rates.
1. (Optional) Tap “My Vehicle” → pick your car brand → model → variant. Battery capacity auto-fills.
1. Choose your charger type: Wall Plug (slow) or AC Charger (fast).
1. Adjust your battery capacity (kWh — already filled if you picked a vehicle), current charge level, and target charge level.
1. Pick a tariff preset (Low / Medium / High) or enter a custom rate from your electricity bill.
1. Set how often you charge (e.g., every 3 days).
1. Read the live calculations: cost per charge, monthly cost, annual cost, and estimated charging time.

## Technical Details

- **Vehicle database:** 35 brands, 108 models, 173 variants with usable battery sizes (kWh)
- **Charger efficiency:** 85% default (typical for Mode 2 wall plug)
- **Wall Plug charging time:** ~12–13 hours for 20% → 100% on a 30 kWh battery
- **AC Charger charging time:** ~2.5–3 hours for the same range
- **Currency formatting:** uses local symbol with thousands separators; no decimals for currencies like JPY/PKR

## Sample Vehicle Battery Capacities

|Vehicle                |Variant       |Usable Battery|
|-----------------------|--------------|--------------|
|Tesla Model 3          |Long Range    |79 kWh        |
|Tesla Model Y          |Standard Range|60 kWh        |
|BYD Atto 3             |Standard      |60.5 kWh      |
|Hyundai Ioniq 5        |Long Range    |77.4 kWh      |
|Kia EV6                |GT            |77.4 kWh      |
|VW ID.4                |Pro S         |82 kWh        |
|BMW iX                 |xDrive50      |105.2 kWh     |
|Polestar 2             |Long Range    |79 kWh        |
|Toyota bZ4X            |Standard      |71.4 kWh      |
|Toyota Prius Prime PHEV|Standard      |13.6 kWh      |
|MG4                    |Long Range    |64 kWh        |
|Rivian R1T             |Max Pack      |180 kWh       |
|Denza B5               |PHEV          |31.8 kWh      |
|Denza B8               |PHEV          |38.5 kWh      |
|Jetour G700            |EREV          |52.4 kWh      |
|Jetour Shanhai L9      |PHEV          |40.9 kWh      |

-----

## Frequently Asked Questions (English)

### How much does it cost to charge an electric car?

The cost to charge an electric vehicle depends on your local electricity tariff and battery size. For a typical 30 kWh battery charged from 20% to 100%, costs typically range from $1 to $15 USD equivalent depending on the country.

### How long does it take to charge an EV with a wall plug?

Using a standard wall plug (Mode 2, 2.2 kW), charging a 30 kWh battery from 20% to 100% takes approximately 12 to 13 hours. Using an 11 kW AC charger (Type 2) reduces this to around 2.5 to 3 hours.

### How much does EV charging cost per month?

Monthly EV charging cost depends on charging frequency, battery size, and local electricity rates. For a driver charging every 3 days (about 10 charges per month), expect to pay between $10 and $80 USD equivalent per month.

### What is the difference between Mode 2 and Type 2 charging?

Mode 2 charging uses a portable cable that plugs into a regular household wall socket, typically delivering 2.2 kW (slow charging). Type 2 refers to a dedicated AC home charger or public charging station, typically delivering 7 kW to 22 kW (much faster charging).

### Which electric vehicles does the calculator support?

The vehicle picker includes 108 popular EV and PHEV models from 35 brands: Tesla, BYD, Hyundai, Kia, Volkswagen, Audi, BMW, Mercedes-Benz, Porsche, Ford, Chevrolet, Nissan, Polestar, Volvo, Toyota, Honda, Mazda, Peugeot, Citroën, Opel, Renault, Jeep, Jetour, MG, Lucid, Rivian, Genesis, Lexus, MINI, Fiat, Mitsubishi, NIO, XPeng, Denza, Zeekr, Jaguar, Land Rover. Selecting your car auto-fills the battery capacity. If your model isn’t listed, you can enter the kWh manually.

-----

## Foire aux questions (Français)

### Combien coûte la recharge d’une voiture électrique ?

Le coût de recharge d’un véhicule électrique dépend de votre tarif d’électricité local et de la taille de la batterie. Pour une batterie typique de 30 kWh chargée de 20 % à 100 %, les coûts varient de 1 € à 15 € selon le pays.

### Combien de temps faut-il pour recharger un VE avec une prise murale ?

Avec une prise murale standard (Mode 2, 2,2 kW), recharger une batterie de 30 kWh de 20 % à 100 % prend environ 12 à 13 heures. Avec un chargeur AC de 11 kW (Type 2), le temps se réduit à environ 2,5 à 3 heures.

### Quels véhicules le calculateur prend-il en charge ?

Le sélecteur de véhicules contient 108 modèles VE et PHEV populaires de 35 marques. Sélectionner votre voiture remplit automatiquement la capacité de la batterie.

-----

## Preguntas frecuentes (Español)

### ¿Cuánto cuesta cargar un coche eléctrico?

El coste de cargar un VE depende de tu tarifa eléctrica local y del tamaño de la batería. Para una batería típica de 30 kWh del 20 % al 100 %, los costes oscilan entre 1 € y 15 € según el país.

### ¿Qué vehículos soporta la calculadora?

El selector de vehículos incluye 108 modelos populares de VE y PHEV de 35 marcas. Al seleccionar tu coche, se rellena automáticamente la capacidad de la batería.

-----

## الأسئلة الشائعة (العربية)

### كم تكلفة شحن السيارة الكهربائية؟

تعتمد تكلفة شحن السيارة الكهربائية على تعريفة الكهرباء المحلية وحجم البطارية. لشحن بطارية بسعة 30 كيلوواط ساعة من 20٪ إلى 100٪، تتراوح التكاليف عادةً بين دولار واحد و 15 دولاراً اعتماداً على البلد.

### ما هي السيارات التي تدعمها الحاسبة؟

يتضمن منتقي السيارات 108 موديلات من السيارات الكهربائية والهجينة الشهيرة من 35 علامة تجارية. اختيار سيارتك يعبئ سعة البطارية تلقائياً.

-----

## Resources

- **Web app:** https://evcalculator.app
- **Sitemap:** https://evcalculator.app/sitemap.xml
- **Robots:** https://evcalculator.app/robots.txt
- **PWA manifest:** https://evcalculator.app/manifest.json

-----

*Last updated: 2026-05-05*