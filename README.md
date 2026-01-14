# FIFA Matches – REST API & Web Client

Projekt przedstawiający implementację kompletnej usługi REST do zarządzania danymi meczów mistrzostw świata FIFA wraz z prostym klientem webowym.

Aplikacja została zaprojektowana w architekturze klient–serwer i umożliwia pełny przepływ danych pomiędzy frontendem, backendem oraz bazą danych. Projekt zawiera również dokumentację techniczną w standardzie OpenAPI (Swagger).

---

##  Cel projektu

Celem projektu było:
- zaprojektowanie i implementacja usługi REST,
- integracja z bazą danych MongoDB,
- przygotowanie dokumentacji API,
- stworzenie klienta webowego umożliwiającego korzystanie z wszystkich funkcji usługi.

Projekt odzwierciedla typowe zadania realizowane w pracy backend / full-stack developera.

---

##  Architektura

Projekt składa się z trzech głównych warstw:

- **Backend (Node.js + Express)**  
  Odpowiedzialny za obsługę endpointów REST oraz logikę biznesową.
- **Baza danych (MongoDB)**  
  Przechowywanie danych meczów w postaci dokumentów.
- **Frontend (HTML + CSS + JavaScript)**  
  Prosty klient webowy komunikujący się z API za pomocą `fetch`.

---

##  Technologie

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Swagger / OpenAPI 3.0  
- HTML5 (semantyczny)  
- CSS3  
- JavaScript (Fetch API)

---

##  Funkcjonalności API

- **POST `/matches`**  
  Dodawanie nowego meczu do bazy danych.
- **GET `/matches`**  
  Pobieranie listy wszystkich meczów.
- **GET `/matches/{country}`**  
  Pobieranie meczów, w których wskazany kraj występuje jako gospodarz lub gość.

---

##  Klient webowy

Aplikacja zawiera prosty klient HTML, który umożliwia:
- dodawanie nowych meczów poprzez formularz,
- wyświetlanie wszystkich meczów w tabeli,
- filtrowanie meczów według kraju.

Klient komunikuje się z backendem wyłącznie przez REST API.

---

##  Dokumentacja API

Dokumentacja została przygotowana zgodnie ze specyfikacją **OpenAPI 3.0** i jest dostępna poprzez Swagger UI.

Zawiera:
- opis endpointów,
- parametry zapytań,
- struktury danych (`schemas`),
- przykładowe żądania i odpowiedzi.

---

##  Uruchomienie projektu

1. Instalacja zależności:
```bash
npm install
```
2. Uruchomienie serwera:
```bash
node server.js
```
3.Dostępne adresy:

Klient webowy:
http://localhost:3000/index.html

Dokumentacja Swagger:
http://localhost:3000/api-docs

## Struktura projektu
```
project-rest-fifa/

├── server.js

├── package.json

├── swagger.json

├── model/

│   └── matches.js

└── public/

    ├── index.html
    
    └── style.css
```
