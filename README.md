# Currency Converter

A simple currency converter built with vanilla JavaScript, HTML, and CSS. Select a "from" and "to" currency, enter an amount, and get the live converted value instantly — with country flags that update automatically based on the selected currency.

Built as a learning project to practice working with real APIs in plain JavaScript (no frameworks).

##  Live Demo

**[https://azeen-fatima.github.io/Corruncy-Converter-js/](https://azeen-fatima.github.io/Corruncy-Converter-js/)**

##  Features

- Convert between 150+ world currencies using live exchange rates
- Auto-updating country flags for the selected currencies
- Defaults to USD → INR on load, with a live rate shown immediately
- Basic input handling (defaults to 1 if the amount is empty, and warns if the same currency is selected on both sides)

##  What I Learned / Used

- **Fetch API & `async/await`** — fetching live exchange rate data from a public REST API
- **Working with JSON responses** — reading and displaying nested data (`data.rates[toCurrency]`)
- **Dynamic DOM manipulation** — populating dropdowns from a currency code list and updating the page without a reload
- **Event handling** — listening for dropdown changes and form submission to trigger updates
- **Third-party APIs** — combining two APIs together (exchange rates + flag images) in one project

##  Tech Stack

- HTML, CSS
- Vanilla JavaScript (no frameworks or libraries)
- [Frankfurter API](https://frankfurter.dev/) — free, no API key required, for live exchange rates
- [FlagsAPI](https://flagsapi.com/) — for country flag images

##  Project Structure

```text
CurrencyConverter_FetchAPI/
├── index.html      # Page structure and form
├── style.css       # Styling
├── codes.js        # List of currency codes and their country codes
└── app.js          # Fetch logic, dropdown population, and event handling
```

##  Notes

This project was built purely for learning purposes, to practice using the Fetch API with a real, live data source.
