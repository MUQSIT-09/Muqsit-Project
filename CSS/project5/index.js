
// Country and currency data
const countries = {
    "Afghanistan": { flag: "AF", currency: "AFN" },
    "Albania": { flag: "AL", currency: "ALL" },
    "Algeria": { flag: "DZ", currency: "DZD" },
    "Andorra": { flag: "AD", currency: "EUR" },
    "Angola": { flag: "AO", currency: "AOA" },
    "Antigua and Barbuda": { flag: "AG", currency: "XCD" },
    "Argentina": { flag: "AR", currency: "ARS" },
    "Armenia": { flag: "AM", currency: "AMD" },
    "Australia": { flag: "AU", currency: "AUD" },
    "Austria": { flag: "AT", currency: "EUR" },
    "Azerbaijan": { flag: "AZ", currency: "AZN" },
    "Bahamas": { flag: "BS", currency: "BSD" },
    "Bahrain": { flag: "BH", currency: "BHD" },
    "Bangladesh": { flag: "BD", currency: "BDT" },
    "Barbados": { flag: "BB", currency: "BBD" },
    "Belarus": { flag: "BY", currency: "BYN" },
    "Belgium": { flag: "BE", currency: "EUR" },
    "Belize": { flag: "BZ", currency: "BZD" },
    "Benin": { flag: "BJ", currency: "XOF" },
    "Bhutan": { flag: "BT", currency: "BTN" },
    "Bolivia": { flag: "BO", currency: "BOB" },
    "Bosnia and Herzegovina": { flag: "BA", currency: "BAM" },
    "Botswana": { flag: "BW", currency: "BWP" },
    "Brazil": { flag: "BR", currency: "BRL" },
    "Brunei": { flag: "BN", currency: "BND" },
    "Bulgaria": { flag: "BG", currency: "BGN" },
    "Burkina Faso": { flag: "BF", currency: "XOF" },
    "Burundi": { flag: "BI", currency: "BIF" },
    "Cabo Verde": { flag: "CV", currency: "CVE" },
    "Cambodia": { flag: "KH", currency: "KHR" },
    "Cameroon": { flag: "CM", currency: "XAF" },
    "Canada": { flag: "CA", currency: "CAD" },
    "Central African Republic": { flag: "CF", currency: "XAF" },
    "Chad": { flag: "TD", currency: "XAF" },
    "Chile": { flag: "CL", currency: "CLP" },
    "China": { flag: "CN", currency: "CNY" },
    "Colombia": { flag: "CO", currency: "COP" },
    "Comoros": { flag: "KM", currency: "KMF" },
    "Congo (Congo-Brazzaville)": { flag: "CG", currency: "XAF" },
    "Costa Rica": { flag: "CR", currency: "CRC" },
    "Croatia": { flag: "HR", currency: "HRK" },
    "Cuba": { flag: "CU", currency: "CUP" },
    "Cyprus": { flag: "CY", currency: "EUR" },
    "Czechia (Czech Republic)": { flag: "CZ", currency: "CZK" },
    "Democratic Republic of the Congo": { flag: "CD", currency: "CDF" },
    "Denmark": { flag: "DK", currency: "DKK" },
    "Djibouti": { flag: "DJ", currency: "DJF" },
    "Dominica": { flag: "DM", currency: "XCD" },
    "Dominican Republic": { flag: "DO", currency: "DOP" },
    "Ecuador": { flag: "EC", currency: "USD" },
    "Egypt": { flag: "EG", currency: "EGP" },
    "El Salvador": { flag: "SV", currency: "USD" },
    "Equatorial Guinea": { flag: "GQ", currency: "XAF" },
    "Eritrea": { flag: "ER", currency: "ERN" },
    "Estonia": { flag: "EE", currency: "EUR" },
    "Eswatini (fmr. 'Swaziland')": { flag: "SZ", currency: "SZL" },
    "Ethiopia": { flag: "ET", currency: "ETB" },
    "Fiji": { flag: "FJ", currency: "FJD" },
    "Finland": { flag: "FI", currency: "EUR" },
    "France": { flag: "FR", currency: "EUR" },
    "Gabon": { flag: "GA", currency: "XAF" },
    "Gambia": { flag: "GM", currency: "GMD" },
    "Georgia": { flag: "GE", currency: "GEL" },
    "Germany": { flag: "DE", currency: "EUR" },
    "Ghana": { flag: "GH", currency: "GHS" },
    "Greece": { flag: "GR", currency: "EUR" },
    "Grenada": { flag: "GD", currency: "XCD" },
    "Guatemala": { flag: "GT", currency: "GTQ" },
    "Guinea": { flag: "GN", currency: "GNF" },
    "Guinea-Bissau": { flag: "GW", currency: "XOF" },
    "Guyana": { flag: "GY", currency: "GYD" },
    "Haiti": { flag: "HT", currency: "HTG" },
    "Honduras": { flag: "HN", currency: "HNL" },
    "Hungary": { flag: "HU", currency: "HUF" },
    "Iceland": { flag: "IS", currency: "ISK" },
    "India": { flag: "IN", currency: "INR" },
    "Indonesia": { flag: "ID", currency: "IDR" },
    "Iran": { flag: "IR", currency: "IRR" },
    "Iraq": { flag: "IQ", currency: "IQD" },
    "Ireland": { flag: "IE", currency: "EUR" },
    "Israel": { flag: "IL", currency: "ILS" },
    "Jamaica": { flag: "JM", currency: "JMD" },
    "Japan": { flag: "JP", currency: "JPY" },
    "Jordan": { flag: "JO", currency: "JOD" },
    "Kazakhstan": { flag: "KZ", currency: "KZT" },
    "Kenya": { flag: "KE", currency: "KES" },
    "Kiribati": { flag: "KI", currency: "AUD" },
    "Kuwait": { flag: "KW", currency: "KWD" },
    "Kyrgyzstan": { flag: "KG", currency: "KGS" },
    "Laos": { flag: "LA", currency: "LAK" },
    "Latvia": { flag: "LV", currency: "EUR" },
    "Lebanon": { flag: "LB", currency: "LBP" },
    "Lesotho": { flag: "LS", currency: "LSL" },
    "Liberia": { flag: "LR", currency: "LRD" },
    "Libya": { flag: "LY", currency: "LYD" },
    "Liechtenstein": { flag: "LI", currency: "CHF" },
    "Lithuania": { flag: "LT", currency: "EUR" },
    "Luxembourg": { flag: "LU", currency: "EUR" },
    "Madagascar": { flag: "MG", currency: "MGA" },
    "Malawi": { flag: "MW", currency: "MWK" },
    "Malaysia": { flag: "MY", currency: "MYR" },
    "Maldives": { flag: "MV", currency: "MVR" },
    "Mali": { flag: "ML", currency: "XOF" },
    "Malta": { flag: "MT", currency: "EUR" },
    "Marshall Islands": { flag: "MH", currency: "USD" },
    "Mauritania": { flag: "MR", currency: "MRU" },
    "Mauritius": { flag: "MU", currency: "MUR" },
    "Mexico": { flag: "MX", currency: "MXN" },
    "Micronesia": { flag: "FM", currency: "USD" },
    "Moldova": { flag: "MD", currency: "MDL" },
    "Monaco": { flag: "MC", currency: "EUR" },
    "Mongolia": { flag: "MN", currency: "MNT" },
    "Montenegro": { flag: "ME", currency: "EUR" },
    "Morocco": { flag: "MA", currency: "MAD" },
    "Mozambique": { flag: "MZ", currency: "MZN" },
    "Myanmar (Burma)": { flag: "MM", currency: "MMK" },
    "Namibia": { flag: "NA", currency: "NAD" },
    "Nauru": { flag: "NR", currency: "AUD" },
    "Nepal": { flag: "NP", currency: "NPR" },
    "Netherlands": { flag: "NL", currency: "EUR" },
    "New Zealand": { flag: "NZ", currency: "NZD" },
    "Nicaragua": { flag: "NI", currency: "NIO" },
    "Niger": { flag: "NE", currency: "XOF" },
    "Nigeria": { flag: "NG", currency: "NGN" },
    "North Korea": { flag: "KP", currency: "KPW" },
    "North Macedonia": { flag: "MK", currency: "MKD" },
    "Norway": { flag: "NO", currency: "NOK" },
    "Oman": { flag: "OM", currency: "OMR" },
    "Pakistan": { flag: "PK", currency: "PKR" },
    "Palau": { flag: "PW", currency: "USD" },
    "Palestine": { flag: "PS", currency: "ILS" },
    "Panama": { flag: "PA", currency: "PAB" },
    "Papua New Guinea": { flag: "PG", currency: "PGK" },
    "Paraguay": { flag: "PY", currency: "PYG" },
    "Peru": { flag: "PE", currency: "PEN" },
    "Philippines": { flag: "PH", currency: "PHP" },
    "Poland": { flag: "PL", currency: "PLN" },
    "Portugal": { flag: "PT", currency: "EUR" },
    "Qatar": { flag: "QA", currency: "QAR" },
    "Romania": { flag: "RO", currency: "RON" },
    "Russia": { flag: "RU", currency: "RUB" },
    "Rwanda": { flag: "RW", currency: "RWF" },
    "Saint Kitts and Nevis": { flag: "KN", currency: "XCD" },
    "Saint Lucia": { flag: "LC", currency: "XCD" },
    "Saint Vincent and the Grenadines": { flag: "VC", currency: "XCD" },
    "Samoa": { flag: "WS", currency: "WST" },
    "San Marino": { flag: "SM", currency: "EUR" },
    "Sao Tome and Principe": { flag: "ST", currency: "STN" },
    "Saudi Arabia": { flag: "SA", currency: "SAR" },
    "Senegal": { flag: "SN", currency: "XOF" },
    "Serbia": { flag: "RS", currency: "RSD" },
    "Seychelles": { flag: "SC", currency: "SCR" },
    "Sierra Leone": { flag: "SL", currency: "SLL" },
    "Singapore": { flag: "SG", currency: "SGD" },
    "Slovakia": { flag: "SK", currency: "EUR" },
    "Slovenia": { flag: "SI", currency: "EUR" },
    "Solomon Islands": { flag: "SB", currency: "SBD" },
    "Somalia": { flag: "SO", currency: "SOS" },
    "South Africa": { flag: "ZA", currency: "ZAR" },
    "South Korea": { flag: "KR", currency: "KRW" },
    "South Sudan": { flag: "SS", currency: "SSP" },
    "Spain": { flag: "ES", currency: "EUR" },
    "Sri Lanka": { flag: "LK", currency: "LKR" },
    "Sudan": { flag: "SD", currency: "SDG" },
    "Suriname": { flag: "SR", currency: "SRD" },
    "Sweden": { flag: "SE", currency: "SEK" },
    "Switzerland": { flag: "CH", currency: "CHF" },
    "Syria": { flag: "SY", currency: "SYP" },
    "Taiwan": { flag: "TW", currency: "TWD" },
    "Tajikistan": { flag: "TJ", currency: "TJS" },
    "Tanzania": { flag: "TZ", currency: "TZS" },
    "Thailand": { flag: "TH", currency: "THB" },
    "Timor-Leste": { flag: "TL", currency: "USD" },
    "Togo": { flag: "TG", currency: "XOF" },
    "Tonga": { flag: "TO", currency: "TOP" },
    "Trinidad and Tobago": { flag: "TT", currency: "TTD" },
    "Tunisia": { flag: "TN", currency: "TND" },
    "Turkey": { flag: "TR", currency: "TRY" },
    "Turkmenistan": { flag: "TM", currency: "TMT" },
    "Tuvalu": { flag: "TV", currency: "AUD" },
    "Uganda": { flag: "UG", currency: "UGX" },
    "Ukraine": { flag: "UA", currency: "UAH" },
    "United Arab Emirates": { flag: "AE", currency: "AED" },
    "United Kingdom": { flag: "GB", currency: "GBP" },
    "United States": { flag: "US", currency: "USD" },
    "Uruguay": { flag: "UY", currency: "UYU" },
    "Uzbekistan": { flag: "UZ", currency: "UZS" },
    "Vanuatu": { flag: "VU", currency: "VUV" },
    "Vatican City": { flag: "VA", currency: "EUR" },
    "Venezuela": { flag: "VE", currency: "VES" },
    "Vietnam": { flag: "VN", currency: "VND" },
    "Yemen": { flag: "YE", currency: "YER" },
    "Zambia": { flag: "ZM", currency: "ZMW" },
    "Zimbabwe": { flag: "ZW", currency: "ZWL" }
};
// Country information for bottom section
const countryInfo = {
    "USD": "The United States Dollar is the world's primary reserve currency.",
    "EUR": "The Euro is used by 19 of the 27 EU member states.",
    "GBP": "The British Pound is one of the oldest currencies still in use.",
    "JPY": "The Japanese Yen is the third most traded currency in the world.",
    "INR": "The Indian Rupee is one of the oldest currencies with a rich history dating back to ancient times.",
    "CNY": "The Chinese Yuan is the currency of the world's second-largest economy.",
    "AUD": "The Australian Dollar is one of the most traded currencies in the Asia-Pacific region.",
    "CAD": "The Canadian Dollar is backed by significant natural resources.",
    "CHF": "The Swiss Franc is known for its stability in times of global economic uncertainty.",
    "SGD": "The Singapore Dollar is one of Asia's strongest currencies.",
    "RUB": "The Russian Ruble has undergone several redenominations throughout its history.",
    "BRL": "The Brazilian Real was introduced in 1994 as part of the Plano Real to stabilize the economy.",
    "ZAR": "The South African Rand is named after the Witwatersrand, the ridge where most of South Africa's gold deposits were found.",
    "MXN": "The Mexican Peso was the first currency to use the '$' symbol which was later adopted by the US dollar.",
    "AED": "The UAE Dirham is pegged to the US dollar at a fixed rate of 3.6725 dirhams.",
    "SAR": "The Saudi Riyal has been pegged to the US dollar at 3.75 riyals since 1986.",
    "HKD": "The Hong Kong Dollar has been pegged to the US dollar since 1983.",
    "NZD": "The New Zealand Dollar is nicknamed the 'Kiwi' after the native bird featured on the one-dollar coin.",
    "SEK": "The Swedish Krona has been Sweden's currency since 1873.",
    "NOK": "The Norwegian Krone is the currency of Norway and its territories.",
    "PLN": "The Polish Złoty means 'golden' in Polish.",
    "TRY": "The Turkish Lira was redenominated in 2005, removing six zeros from the currency.",
    "KRW": "The South Korean Won was introduced after World War II, replacing the Korean yen.",
    "IDR": "The Indonesian Rupiah is one of the least valued currencies in the world, with typical denominations in the thousands.",
    "THB": "The Thai Baht is one of the most stable currencies in Southeast Asia.",
    "EGP": "The Egyptian Pound dates back to 1834 and was initially based on gold and silver.",
    "PHP": "The Philippine Peso derived from the Spanish peso and has been the currency since 1898.",
    "MYR": "The Malaysian Ringgit was originally based on the Spanish dollar during the colonial era.",
    "NGN": "The Nigerian Naira was introduced in 1973, replacing the Nigerian pound.",
    "ILS": "The Israeli New Shekel has been Israel's currency since 1986.",
    "CLP": "The Chilean Peso has historically been one of Latin America's most stable currencies.",
    "DKK": "The Danish Krone has been pegged to the euro since the introduction of the European currency."
};

// Global variables
// Initialize everything when the DOM is loaded


// DOM elements
const searchField1 = document.getElementById("searchbarfeild1");
const searchField2 = document.getElementById("searchbarfeild2");
const reverseButton = document.querySelector(".rervese button");
const searchButton = document.querySelector(".search button");
const flag1Element = document.querySelector(".flag1 img");
const flag2Element = document.querySelector(".flag2 img");
const exchangeRateElement = document.getElementById("exchangeRate");
const amountInput = document.getElementById("amount");
const convertedAmountElement = document.getElementById("convertedAmount");
const messageDisplayedElement = document.getElementById('mesaagedisplayed'); 

// Initialize on document load
document.addEventListener("DOMContentLoaded", function () {
    searchField1.value = "United States";
    searchField2.value = "India";
    updateFlags();

    reverseButton.addEventListener("click", reverseFields);
    searchButton.addEventListener("click", handleSearch);

    searchField1.addEventListener("keypress", function (event) {
        if (event.key === "Enter") handleSearch();
    });

    searchField2.addEventListener("keypress", function (event) {
        if (event.key === "Enter") handleSearch();
    });

    // Initial fetch
    // fetchExchangeRate();
});

// Update flags based on user input
function updateFlags() {
    const country1 = searchField1.value.trim();
    const country2 = searchField2.value.trim();

    flag1Element.src = countries[country1] ? `https://flagsapi.com/${countries[country1].flag}/flat/64.png` : '';
    flag2Element.src = countries[country2] ? `https://flagsapi.com/${countries[country2].flag}/flat/64.png` : '';
}

// Handle search functionality
async function handleSearch() {
    updateFlags();
    await fetchExchangeRate();
}

// Reverse the input fields
function reverseFields() {
    const temp = searchField1.value;
    searchField1.value = searchField2.value;
    searchField2.value = temp;
    updateFlags();
    fetchExchangeRate();
}
// Fetch exchange rates from API
async function fetchExchangeRate() {
    const country1 = searchField1.value.trim();
    const country2 = searchField2.value.trim();
    const currencyFrom = countries[country1]?.currency; // Get currency for first country
    const currencyTo = countries[country2]?.currency; // Get currency for second country

    if (currencyFrom && currencyTo) {
        try {
            const response = await fetch(`https://api.currencylayer.com/live?access_key=7bbaa25a398a492cc9c0e084298fd71b&format=1`);
            const data = await response.json();
            console.log(data); // Log response for debugging

            // Check if request was successful
            if (data.success) {
                let exchangeRate;
                
                // Special handling for USD conversions
                if (currencyFrom === 'USD') {
                    // Direct conversion from USD to another currency
                    exchangeRate = data.quotes[`USD${currencyTo}`];
                    
                    if (exchangeRate) {
                        exchangeRateElement.innerHTML = `1 USD = ${exchangeRate.toFixed(4)} ${currencyTo}`;
                    } else {
                        exchangeRateElement.innerHTML = 'Rate not available for this pair';
                        return;
                    }
                } else if (currencyTo === 'USD') {
                    // Conversion from another currency to USD
                    const rateToUSD = data.quotes[`USD${currencyFrom}`];
                    
                    if (rateToUSD) {
                        exchangeRate = 1 / rateToUSD; // Inverse for non-USD to USD
                        exchangeRateElement.innerHTML = `1 ${currencyFrom} = ${exchangeRate.toFixed(4)} USD`;
                    } else {
                        exchangeRateElement.innerHTML = 'Rate not available for this pair';
                        return;
                    }
                } else {
                    // Standard case - neither currency is USD
                    const rateFromUSD = data.quotes[`USD${currencyFrom}`]; // Rate from USD to currencyFrom
                    const rateToUSD = data.quotes[`USD${currencyTo}`]; // Rate from USD to currencyTo

                    if (rateFromUSD && rateToUSD) {
                        exchangeRate = rateToUSD / rateFromUSD; // Calculate exchange rate between currencies
                        exchangeRateElement.innerHTML = `1 ${currencyFrom} = ${exchangeRate.toFixed(4)} ${currencyTo}`;
                    } else {
                        exchangeRateElement.innerHTML = 'Rate not available for this pair';
                        return;
                    }
                }
                
                // Calculate the converted amount
                const amount = parseFloat(amountInput.value);
                if (!isNaN(amount)) {
                    const convertedAmount = amount * exchangeRate;
                    convertedAmountElement.innerHTML = `${amount} ${currencyFrom} = ${convertedAmount.toFixed(4)} ${currencyTo}`;
                } else {
                    convertedAmountElement.innerHTML = 'Please enter a valid amount';
                }
                
                // Get rates for comparison (to determine which currency is stronger)
                const rateFromUSD = currencyFrom === 'USD' ? 1 : data.quotes[`USD${currencyFrom}`];
                const rateToUSD = currencyTo === 'USD' ? 1 : data.quotes[`USD${currencyTo}`];
                
                // Compare currency strength and display relevant info
                // Lower rate from USD means stronger currency (it takes fewer units to equal 1 USD)
                if (rateFromUSD < rateToUSD) {
                    // First currency is stronger
                    messageDisplayedElement.innerHTML = countryInfo[currencyFrom] || '';
                } else if (rateFromUSD > rateToUSD) {
                    // Second currency is stronger
                    messageDisplayedElement.innerHTML = countryInfo[currencyTo] || '';
                } else {
                    // Currencies are equal in value
                    messageDisplayedElement.innerHTML = '';
                }
            } else {
                exchangeRateElement.innerHTML = 'Error in API response';
            }
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
            exchangeRateElement.innerHTML = 'Error fetching rate';
        }
    } else {
        exchangeRateElement.innerHTML = 'Invalid currency input';
    }
}
