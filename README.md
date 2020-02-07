# halfeind-utils [![NPM](https://img.shields.io/npm/v/halfeind-utils.svg)](https://www.npmjs.com/package/halfeind-utils) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save halfeind-utils
```
```bash
yarn add halfeind-utils
```

## Usage

```jsx
import { randomHexColor } from 'halfeind-utils';
 
const App = () => (
  <>
    <div style={{width:'100%',height:'100%',backgroundColor:randomHexColor()}}></div>
  </>
);
```
Featured functions
======
## Color
```
randomHexColor()

Creates a random hexadecimal color.
```

```
contrastColor(color)

Generates a contrast color based on the a given color.
```

```
hsvToRgb(h, s, v)

Converts HSV-color to rgb.
```

```
hsvToHsl(h, s, v)

Converts HSV-color to HSL.
```

```
rgbToHsv(r, g, b)

Converts rgb-color to HSV.
```

```
hexToRgb(hex)

Converts hex-color to rgb.
```

```
rgbToHex(r, g, b)

Converts rgb-color to hex.
```

```
hslToRgb(h, s, l)

Converts HSL-color to rgb.
```

## String

```
acronym(string)

Generates the acronym based on the given string.
```
```
isEmpty(string)

Returns true or false, depending if the given string is an empty string or undefined.
```
```
RandomString(length)

Returns a random string with the amount of characters based on the given length.
```

## Date

```
getCurrentYear()

Returns the current year.
```
```
getCurrentMonth()

Returns the current month.
```
```
getCurrentDay()

Returns the current day.
```
```
getMonthName(monthNumber)

Returns month info based on the given monthNumber.
```
```
getDayByDayNumber(dayNumber)

Returns day info based on the given dayNumber.
```
```
getDayByDate(month, dayOfMonth, year)

Returns day info based on the given month, dayOfMonth and year.
```
```
daysInMonth(monthNumber, year)

Returns the amount of days based on the given month and year.
```
```
daysInCurrentMonth()

Returns the amount of days in current month.
```


## License

MIT © [halfeind](https://github.com/halfeind)
