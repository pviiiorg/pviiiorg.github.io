# #BlackoutUK Resources

*Welcome! This directory ('2016-ip-act-blackout') can receive PRs for any content related to BlackoutUK --
this content will be available on https://pviii.org/ipablackout (which sits behind CloudFlare).*

## Embeddable full-page notice/iframe

Place this in your website, ideally directly above the closing `</body>` tag.

```html
<script src="https://pviii.org/ipablackout/inject.js"></script>
```

Use `data-page` and `data-height` to configure the page you wish to show (any HTML file in `pages/`) and the CSS height:

```html
<script
	src="https://pviii.org/ipablackout/inject.js"
	data-page="original.html"
	data-height="50%"></script>
```
