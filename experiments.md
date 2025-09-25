
## Experiments

- Lato 2.0 system-ui stack (should work - but ugly)
- Google lato v13 Current PHM
- Lato 2 Experiment 1
- Lato 2 Experiment 2
- Lato 2 Experiment 3
- Google lato v24 Experiment 4

### Lato 2.0 system-ui stack

Lato 2.0 custom subset (latin / latin-ext)   
system-ui font stack

* keep hints
* auto fix vertical metrics

**BAD on Windows**

### Google v13 reference

Just for reference - current PHM font setup

google lato v13   
old font stack


### Lato 2 Experiment 1

Lato 2.0   
system-ui font stack

* font squirrel hint
* auto fix vertical metrics

**BAD on Windows**

```json
{
	"mode": "expert",
	"formats": [
		"woff",
		"woff2"
	],
	"tt_instructor": "default",
	"fix_vertical_metrics": "Y",
	"metrics_ascent": "",
	"metrics_descent": "",
	"metrics_linegap": "",
	"add_spaces": "Y",
	"add_hyphens": "Y",
	"fallback": "none",
	"fallback_custom": "100",
	"options_subset": "none",
	"subset_custom": "",
	"subset_custom_range": "",
	"subset_ot_features_list": "",
	"css_stylesheet": "type-hint-font-squirrel.css",
	"filename_suffix": "-webfont",
	"emsquare": "2048",
	"spacing_adjustment": "0",
	"rememberme": "Y"
}
```

### Lato 2 Experiment 2

Lato 2.0   
system-ui font stack

* ttfautohint
* xHeight match with Arial

**BAD on Windows**

```json
{
	"mode": "expert",
	"formats": [
		"woff",
		"woff2"
	],
	"tt_instructor": "ttfautohint",
	"fix_gasp": "xy",
	"fix_vertical_metrics": "N",
	"metrics_ascent": "",
	"metrics_descent": "",
	"metrics_linegap": "",
	"add_spaces": "Y",
	"add_hyphens": "Y",
	"fallback_custom": "100",
	"fallback": "arial",
	"options_subset": "none",
	"subset_custom": "",
	"subset_custom_range": "",
	"subset_ot_features_list": "",
	"css_stylesheet": "ttfautohing-xheight-arial.css",
	"filename_suffix": "-webfont",
	"emsquare": "2048",
	"spacing_adjustment": "0",
	"rememberme": "Y"
}
```

### Lato 2 Experiment 3

Lato 2.0   
system-ui font stack

* ttfautohint
* xheight match with georgia

**BAD on Windows**

```json
{
	"mode": "expert",
	"formats": [
		"woff",
		"woff2"
	],
	"tt_instructor": "ttfautohint",
	"fix_gasp": "xy",
	"fix_vertical_metrics": "N",
	"metrics_ascent": "",
	"metrics_descent": "",
	"metrics_linegap": "",
	"add_spaces": "Y",
	"add_hyphens": "Y",
	"fallback_custom": "100",
	"fallback": "georgia",
	"options_subset": "none",
	"subset_custom": "",
	"subset_custom_range": "",
	"subset_ot_features_list": "",
	"css_stylesheet": "ttfautohing-xheight-georgia.css",
	"filename_suffix": "-webfont",
	"emsquare": "2048",
	"spacing_adjustment": "0",
	"rememberme": "Y"
}
```


### Google lato v24 Experiment 4

Google lato 1 (v24)   
system-ui font stack

* unmodified

**Looks good on Windows**

```json
{
	"mode": "expert",
	"formats": [
		"woff",
		"woff2"
	],
	"tt_instructor": "keep",
	"fix_gasp": "xy",
	"fix_vertical_metrics": "N",
	"metrics_ascent": "",
	"metrics_descent": "",
	"metrics_linegap": "",
	"add_spaces": "Y",
	"add_hyphens": "Y",
	"fallback": "none",
	"fallback_custom": "100",
	"options_subset": "none",
	"subset_custom": "",
	"subset_custom_range": "",
	"subset_ot_features_list": "",
	"css_stylesheet": "googlev24.css",
	"filename_suffix": "-webfont",
	"spacing_adjustment": "0",
	"rememberme": "Y"
}
```
