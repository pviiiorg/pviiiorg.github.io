# #BlackoutUK Resources

*Welcome! This directory ('2016-ip-act-blackout') can receive PRs for any content related to BlackoutUK --
this content will be available on https://pviii.org/ipablackout (which sits behind CloudFlare).*

## Embeddable full-page notice/iframe

Place this in your website, ideally directly above the closing `</body>` tag.

```html
<script src="https://pviii.org/ipablackout/inject.js"></script>
```

* Use `data-page` (default: 'full.html') to configure the page you wish to show (any HTML file in `pages/`)
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
