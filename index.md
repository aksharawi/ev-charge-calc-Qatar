# Charge Calculator — EV Charging Cost Calculator

> A free worldwide web app that calculates electric vehicle (EV) and plug-in hybrid (PHEV) charging costs in your local currency.

**URL:** https://evcalculator.app
**Author:** [@aksharawi](https://x.com/aksharawi)
**Version:** 2.4
**Languages:** English, Arabic, French, Spanish
**License:** All rights reserved

-----

## What It Does

Charge Calculator helps EV and PHEV owners answer questions like:

- “How much does it cost to fully charge my car?”
- “What will I spend on charging per month?”
- “How long will it take using a wall plug versus an AC charger?”

Users enter their battery capacity, current/target state of charge, electricity tariff, and charging frequency. The app calculates cost per charge, monthly cost, annual cost, and estimated charging time in real time.

## Key Features

- **Auto-detects user country and currency** via IP geolocation (with browser language fallback)
- **27 supported countries** across Gulf, MENA, Europe, Americas, Asia, and Oceania, each with realistic local electricity tariffs (Low / Medium / High presets)
- **Two charger types** — Wall Plug (Mode 2, 2.2 kW) and AC Charger (Type 2, 11 kW)
- **Four languages** — English, Arabic (RTL), French, and Spanish
- **Light and dark mode**
- **Installable PWA** — works offline once installed to the home screen
- **No account required** — fully client-side, no data stored on a server

## How To Use It

1. The app auto-detects your country on first visit and pre-fills typical electricity rates.
1. Choose your charger type: Wall Plug (slow) or AC Charger (fast).
1. Adjust your battery capacity (kWh), current charge level, and target charge level.
1. Pick a tariff preset (Low / Medium / High) or enter a custom rate from your electricity bill.
1. Set how often you charge (e.g., every 3 days).
1. Read the live calculations: cost per charge, monthly cost, annual cost, and estimated charging time.

## Technical Details

- **Default battery example:** 31.8 kWh (small PHEV)
- **Charger efficiency:** 85% default (typical for Mode 2 wall plug)
- **Wall Plug charging time:** ~12–13 hours for 20% → 100% on a 30 kWh battery
- **AC Charger charging time:** ~2.5–3 hours for the same range
- **Currency formatting:** uses local symbol with thousands separators; no decimals for currencies like JPY/PKR

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

-----

## Foire aux questions (Français)

### Combien coûte la recharge d’une voiture électrique ?

Le coût de recharge d’un véhicule électrique dépend de votre tarif d’électricité local et de la taille de la batterie. Pour une batterie typique de 30 kWh chargée de 20 % à 100 %, les coûts varient de 1 € à 15 € selon le pays.

### Combien de temps faut-il pour recharger un VE avec une prise murale ?

Avec une prise murale standard (Mode 2, 2,2 kW), recharger une batterie de 30 kWh de 20 % à 100 % prend environ 12 à 13 heures. Avec un chargeur AC de 11 kW (Type 2), le temps se réduit à environ 2,5 à 3 heures.

### Combien coûte la recharge d’un VE par mois ?

Le coût mensuel dépend de la fréquence, de la taille de la batterie et des tarifs locaux. Pour 10 charges par mois, comptez entre 10 € et 80 € par mois.

### Quelle est la différence entre Mode 2 et Type 2 ?

Le Mode 2 utilise un câble portable branché sur une prise murale ordinaire (~2,2 kW). Le Type 2 désigne une wallbox AC dédiée ou une borne publique (7 à 22 kW).

-----

## Preguntas frecuentes (Español)

### ¿Cuánto cuesta cargar un coche eléctrico?

El coste de cargar un VE depende de tu tarifa eléctrica local y del tamaño de la batería. Para una batería típica de 30 kWh del 20 % al 100 %, los costes oscilan entre 1 € y 15 € según el país.

### ¿Cuánto tarda en cargarse un VE con un enchufe de pared?

Con un enchufe de pared estándar (Modo 2, 2,2 kW), cargar una batería de 30 kWh del 20 % al 100 % tarda entre 12 y 13 horas. Con un cargador AC de 11 kW (Tipo 2), entre 2,5 y 3 horas.

### ¿Cuánto cuesta cargar un VE al mes?

El coste mensual depende de la frecuencia, batería y tarifas locales. Para 10 cargas al mes, espera pagar entre 10 € y 80 € al mes.

### ¿Cuál es la diferencia entre Modo 2 y Tipo 2?

El Modo 2 usa un cable portátil en un enchufe doméstico (~2,2 kW). El Tipo 2 es una wallbox AC dedicada o estación pública (7 a 22 kW).

-----

## الأسئلة الشائعة (العربية)

### كم تكلفة شحن السيارة الكهربائية؟

تعتمد تكلفة شحن السيارة الكهربائية على تعريفة الكهرباء المحلية وحجم البطارية. لشحن بطارية بسعة 30 كيلوواط ساعة من 20٪ إلى 100٪، تتراوح التكاليف عادةً بين دولار واحد و 15 دولاراً اعتماداً على البلد.

### كم تستغرق شحن السيارة الكهربائية باستخدام مقبس الحائط؟

باستخدام مقبس الحائط القياسي (الوضع 2، بقدرة 2.2 كيلوواط)، يستغرق شحن بطارية 30 كيلوواط ساعة من 20٪ إلى 100٪ حوالي 12 إلى 13 ساعة. أما باستخدام شاحن 11 كيلوواط (النوع 2) فحوالي 2.5 إلى 3 ساعات.

### كم تبلغ تكلفة شحن السيارة الكهربائية شهرياً؟

تعتمد التكلفة الشهرية على عدد مرات الشحن وحجم البطارية وأسعار الكهرباء المحلية. لـ 10 شحنات شهرياً، توقع دفع ما بين 10 و 80 دولاراً شهرياً.

### ما الفرق بين الشحن بالوضع 2 والنوع 2؟

الوضع 2 يستخدم كابلاً محمولاً في مقبس عادي (~2.2 كيلوواط). النوع 2 هو شاحن AC مخصص أو محطة عامة (7 إلى 22 كيلوواط).

-----

## Resources

- **Web app:** https://evcalculator.app
- **Sitemap:** https://evcalculator.app/sitemap.xml
- **Robots:** https://evcalculator.app/robots.txt
- **PWA manifest:** https://evcalculator.app/manifest.json

-----

*Last updated: 2026-04-29*