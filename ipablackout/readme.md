# #BlackoutUK Resources

Background: BlackoutUK is an attempt to bring awareness to the new Investigatory Powers Act, and to educate the public about its ramifications.

*Welcome! This directory ('2016-ip-act-blackout') can receive PRs for any content related to BlackoutUK --
this content will be available on https://pviii.org/ipablackout (which sits behind CloudFlare).*

## Embeddable full-page notice/iframe

The `pages/` directory contains a number of HTML files that you can embed into your existing website. Using the injection script, these will be displayed atop your page's content, so the user can scroll past the banner when finished reading.

### Available pages/banners:

 * **[v2.html](https://pviii.org/ipablackout/pages/v2.html)**
 * **[whyprivacymatters.html](https://pviii.org/ipablackout/pages/whyprivacymatters.html)**
 * **[original.html](https://pviii.org/ipablackout/pages/original.html)**

### Injection

Place this in your website (it can go in the HEAD or the BODY; it doesn't matter):

```html
<script src="https://pviii.org/ipablackout/inject.js"></script>
```

#### (Optional) Options:

* Use `data-page` (default: 'v2.html') to configure the page you wish to show (any HTML file in `pages/`)
* Use `data-height` (default: `100vh`) to set the CSS height (default is the full height of the window)
* Use `data-exitable` (default: false) to add a 'close banner' button to the top-right of the page

E.g.

```html
<script
	src="https://pviii.org/ipablackout/inject.js"
	data-page="original.html"
	data-exitable
	data-height="50%"></script>
```
