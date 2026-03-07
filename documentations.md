# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Jakub Gawroński & Kajetan Szczypiński (Załoga ZETA)
**Klasa:** 3 Technikum
**Data:** [WPISZ DATĘ]

---
## 1. Analiza wymagań klienta
(Opisz własnymi słowami, jakie funkcjonalności musiały znaleźć się w aplikacji na podstawie e-maila od klienta).
* Podanie swojego imienia za pomocą pola input text
* Wybór pojazdu poprzez select (przy wyborze Omegi informacja o koniecznosci posiadania patentu)
* Możliwość wyboru ilości godzin na input range (oraz dynamiczna aktualizacja finalnej ceny podczas zmiany ilości godzin na suwaku)
* Możliwość dodania kapoka lub instruktora jako dodatek za pomocą checkboxa
* Możliwość wyboru płatnosci za pomocą selecta
* Zaakceptowanie regulaminu za pomocą checkboxa

---
## 2. Architektura rozwiązania
(Wyjaśnij, dlaczego zdecydowaliście się na jeden komponent App.ts i
 jak podzieliliście w nim kod na sekcje).

---
## 3. Zarządzanie stanem (`useState`)
(Wypełnij poniższą tabelę wszystkimi hookami useState, których użyliście w kodzie).

| Nazwa zmiennej stanu | Typ danych | Za co odpowiada? |
          name            string     Zapamiętuje imię klienta
          boat            string     Przechowuje rodzaj zaznaczonego pojazdu
          hours           int        Przechowuje ilość wybranych godzin na suwaku
          extra           boolean    Posiada informacje na temat zaznaczenia pola z instruktorem
          kapok           boolean    Posiada informacje na temat zaznaczenia pola z kapokiem
          payment         string     Przechowuje typ płatności wybrany w select
          terms           boolean    Posiada informacje o tym, czy regulamin został zaakceptowany

---
## 4. Algorytm obliczania ceny
(Opisz krok po kroku, w jaki sposób Twoja aplikacja wylicza cenę końcową.
Możesz użyć pseudokodu lub wzoru matematycznego).

* Na początku cena bazowa równa jest wartości wybranego pojazdu na podstawie tablicy z kluczami i wartościami PRICES[key:string : number]
* Następnie cena finalna jest wyliczana ze wzoru: (cena pojazdu * liczba godzin wypożyczenia) + (instuktor * liczba godzin) + kapok
---
## 5. Layout i Stylizacja (`Flexbox`)
(Opisz, jakich właściwości `Flexbox` użyliście, aby formularz był responsywny i wyśrodkowany.
Wymień co najmniej 3 właściwości CSS).
1. `display: ...` - (opis zastosowania)
2. `...` - (opis zastosowania)
3. `...` - (opis zastosowania)
---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?**
* Kajetan: Dla mnie największą trudnością paradoksalnie było zrozumienie działania githuba (git pull, git push, kiedy trzeba zmienić gałąź, kiedy nie można mergować itp.).
* Kuba:
  
* **Czego nowego się nauczyliście?**
* Kajetan: Korzystania z githuba, jeszcze większe obycie z useState oraz Handlerami i na pewno coś z czym nie miałem wcześniej doświadczenia, czyli grupowy projekt programistyczny.  
* Kuba:
  
* **Co byście zmienili, gdybyście mieli więcej czasu?**
* Kajetan: Ja jestem bardzo zadowolony z mojej części pracy i tak samo sądzę o pracy Kuby, bardzo spoko zrobiona aplikacja internetowa :)
* Kuba:
  
---
## 7. Checklisty (Zaznacz [x])
- [x] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [x] Pull Requesty zostały zaakceptowane przez partnera.
