# leaflet-graphicscale

A more configurable graphic scale for Leaflet.js.

![Image](./readme/demo.png)

Forked from [nerik/leaflet-graphicscale](https://github.com/nerik/leaflet-graphicscale) as no maintenance was intended.

## Build

To build distribution files locally you'll need to install [sass](https://www.npmjs.com/package/sass) globally then run: 
```
npm run build
```

## Getting started

### Using minified files 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
    <link rel="stylesheet" href="Leaflet.GraphicScale.min.css" />
</head>
<body>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
    <script src="Leaflet.GraphicScale.min.js"></script>
    <script>
        var map = L.map('map');
        L.tileLayer('...').addTo(map);
        var graphicScale = L.control.graphicScale([options]).addTo(map);
    </script>
</body>
</html>
```

See below for ```[options]```

### Compile from source (using browserify and sass)

```
npm install -S @kalisio/leaflet-graphicscale
```

SASS : 
```
@import './node_modules/leaflet-graphicscale/src/Leaflet.GraphicScale.scss';
```

JS :
```
require('leaflet-graphicscale');
var graphicScale = L.control.graphicScale().addTo(map);
```

## Options

### fill: ```false|'fill'|'double'|'hollow'|'line'```

Default: `false`.

- false/'nofill'

![](./readme/nofill.png)

- 'fill'

With `fill` the scale alternates between filled and transparent sections.

![](./readme/fill.png)

- 'double'

With `double` the scale only contains filled sections but with alternate colors.

- 'hollow'

![](./readme/hollow.png)

- 'line'

![](./readme/line.png)


### doubleLine: ```false|true```

Default: `false`.

![](./readme/double.png)


### showSubunits: ```false|true```

Default: `false`. Show smaller divisions on the left of the zero.

![](./readme/sub.png)


### minUnitWidth: ```(Number)```

Default: `30`. The minimum width of a scale unit.

### maxUnitsWidth: ```(Number)```

Default: `240`. The maximum width of the scale without subunits.

### labelPlacement: ```'auto'|'top'|'bottom'``` 

Default: `auto`. Display the distance label on top/on the bottom of the scale bar. If set to auto, labels will be placed on top when the scale control is on the bottom of the map, and on the bottom when the scale control is on the top of the map (```position``` parameter).

### unitPlacement: ```'label'|'scale'``` 

Default: `label`. Display the unit labels beside the labels on the left/right side of the scale bar. If set to `scale`, labels will be placed on the left/right-side of the scale bar.

### getUnitConversionFactor ```(Function)```

Default: none. The `getUnitConversionFactor(meters)` function should return the conversion factor between meters and target unit to be displayed, e.g. to manage imperial system and switch between miles/feet
```
const getUnitConversionFactor = (meters) => (meters * 0.00062137 >= 25) ? 0.00062137 : 3.28084
```

> Take a look at the demo to see it in action with three different unit systems: metric, imperial, nautical.

### getDisplayUnit ```(Function)```

Default: none. The `getDisplayUnit(value, factor)` function should return the unit label and value to be displayed, e.g. to manage imperial system and switch between miles/feet
```
const getDisplayUnit = (value, factor) => ({ unit: (factor === 3.28084) ? 'ft' : 'mi', amount: value })
```

> Take a look at the demo to see it in action with three different unit systems: metric, imperial, nautical.

### position:

See http://leafletjs.com/reference.html#control

### updateWhenIdle:

See http://leafletjs.com/reference.html#control-scale

