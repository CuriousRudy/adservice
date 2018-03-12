## Product Lister

A simple react app to show products with their sku and the advertiser.

## Features

1. Master list loads 1000 results at a time, with a show more button at the bottom to load 1000 more.
2. Dropdown list in the navbar features a filter by advertiser name. Show more keeps filter state to keep listing by advertiser name selected in the filter.
3. Show all in filter keeps state, and does not reload the product list.
4. Reload List runs a fetch to reload from API, should take less time after the initial page load.
5. Materialize CSS for simple styling, responsiveness

## TO_DO

1. Add a search feature to allow search by sku
2. Add service worker to cache results locally, mitigating page loads.
3. Improve import time to include the seed in controller action, thereby removing the necessity to execute the seed task before starting server.
