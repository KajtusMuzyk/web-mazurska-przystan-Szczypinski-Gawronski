# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Jakub Gawroński & Kajetan Szczypiński (Załoga ZETA)
**Klasa:** 3 Technikum
**Data:** 09.03.2026

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

Zastosowaliśmy jeden komponent App.ts, gdyż ta aplikacja jest stosunkowo prosta i cała logika formularza może być zarządzana w jednym miejscu, co sprawia że jest czytelna.
Kod jest podzielony na następujące sekcje:
* Kontener div, który umożliwia wyśrodkowanie formularza pionowo jak i poziomo
* Formularz, w którym każdy element jest układany jeden pod drugim
* Pola formularza, czyli inputy, selecty, checkboxy, które umożliwiają wprowadzenie danych przez użytkownika
* komunikat dotyczący wypożyczenia omegii - wyświetla wiadomość o potrzebie posiadania patentu żeglarskiego przy wybraniu opcji wypożyczenia omegii
* Suwak godzin - umożliwia wybór godzin wypożyczenia od 1 do 8, na podstawie których obliczana jest finalna cena
* Wyświetlanie ceny - pokazuje cenę wypożyczenia sprzętu, na podstawie obliczeń zachodzących w pliku `.ts`. Wyświetlana cena aktualizuje się automatycznie
* Przycisk 'Zarezerwuj' - jest możliwy do kliknięcia po wprowadzeniu wszystkich wymaganych danych oraz po akceptacji regulaminu. Po jego kliknięciu jest wyświetlany `alert` w przeglądarce z podsumowaniem zamówienia

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
1. `display: flex` - zastosowane w głównym kontenerze oraz dla formularza, aby umożliwić łatwe rozmieszczanie elementów
2. `justifyContent: center` - zastosowane w głównym kontenerze, aby wyśrodkować formularz poziomo na stronie
3. `alignItems: center` - zastosowane w głównym kontenerze, aby pionowo wyśrodkować formularz na stronie
4. `flexDirection: column,` - zastosowane dla formularza, aby pola w formularzu były wyświetlane pionowo jedno pod drugim
---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?**
* Kajetan: Dla mnie największą trudnością paradoksalnie było zrozumienie działania githuba (git pull, git push, kiedy trzeba zmienić gałąź, kiedy nie można mergować itp.).
* Kuba: Najtrudniejsze było dla mnie zrozumienie zasady pracy z gitem (push, pill, pull request, jak dobrze połączyć gałęzie, by wszystko było na pewno dobrze) oraz by strona była w pełni responsywna
  
* **Czego nowego się nauczyliście?**
* Kajetan: Korzystania z githuba, jeszcze większe obycie z useState oraz Handlerami i na pewno coś z czym nie miałem wcześniej doświadczenia, czyli grupowy projekt programistyczny.  
* Kuba: Pracowanie nad projektem w zespole z użyciem gita oraz stosowanie odpowiednich właściwości flexbox, by strona była w pełni responsywna
  
* **Co byście zmienili, gdybyście mieli więcej czasu?**
* Kajetan: Ja jestem bardzo zadowolony z mojej części pracy i tak samo sądzę o pracy Kuby, bardzo spoko zrobiona aplikacja internetowa :)
* Kuba: Nie zmieniłbym nic, uważam że nasza aplikacja jest bardzo dobrze zrobiona patrząc na wygląd jak i funkcjonalność
  
---
## 7. Checklisty (Zaznacz [x])
- [x] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [x] Pull Requesty zostały zaakceptowane przez partnera.
