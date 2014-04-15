# [Pretty Date](http://fengyuanchen.github.io/prettydate)

A jQuery date prettify plugin.


# Getting started


## Installation

Include files:

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<script src="/path/to/prettydate.js"></script>
```


## Usage

### Initialize with `prettydate` attribute

#### Basic

```html
<span prettydate>Jan 01 2014 20:14:11</span>
```

#### Add options with `data-*` attribute

```html
<span prettydate data-date-format="YYYY.M.D h:m:s">2014.1.1 20:14:11</span>
```


### Initialize with `$.fn.prettydate` method

#### Basic

```html
<span class="prettydate">Jan 01 2014 20:14:11</span>
```

```javascript
$(".prettydate").prettydate();
```

#### Add options

```html
<span class="prettydate"></span>
```

```javascript
$(".prettydate").prettydate({
    date: "01/01/2014 20:14:11",
    dateFormat: "MM/DD/YYYY hh:mm:ss"
});
```


## Configure

### Setup

Setup with `$("#target").prettydate(options)`, or global setup with `$.fn.prettydate.setDefaults(options)`.


### Options

#### afterSuffix

* type: string
* default: "later"


#### beforeSuffix

* type: string
* default: "ago"


#### autoUpdate

* type: boolean
* default: false

Auto update the pretty date string.


#### date

* type: object / number / string
* default: undefined

The target date for prettify. Allow date object, date number (milliseconds), valid date string, or custom date string with a date format.


#### dateFormat

* type: string
* default: "YYYY-MM-DD hh:mm:ss"

"Y" for year, "M" for month, "D" for day, "h" for hour, "m" for minute, "s" for second.


#### duration

* type: number
* default: 60000

The duration milliseconds of the auto update action.


#### messages

* type: object
* default:

```javascript
{
    second: "Just now",
    seconds: "%s seconds %s",
    minute: "One minute %s",
    minutes: "%s minutes %s",
    hour: "One hour %s",
    hours: "%s hours %s",
    day: "One day %s",
    days: "%s days %s",
    week: "One week %s",
    weeks: "%s weeks %s",
    month: "One month %s",
    months: "%s months %s",
    year: "One year %s",
    years: "%s years %s",

    // Extra
    yesterday: "Yesterday",
    beforeYesterday: "The day before yesterday",
    tomorrow: "Tomorrow",
    afterTomorrow: "The day after tomorrow"
}
```

For each message, the first "%s" placeholder will be replaced with the date diff number, and the second "%s" placeholder will be replaced with the before or after suffix.


## Methods

* prettify - Prettify and replace the date view again.
* destory - Remove the instance from the element, and clear the auto update `setInterval` object if it's set. By default, the prettydate instance will be destory after prettified, so you don't destory it manually. Normally, It's used when the "autoUpdate" option is be set with "true", and you want to stop it later.

Use with `$("#target").prettydate("destory")`.
