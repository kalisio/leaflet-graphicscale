# leaflet-graphicscale

A more configurable graphic scale for Leaflet.js.

[![Image](http://nerik.github.io/leaflet-graphicscale/readme/demo.png)][1]

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

### fill: ```false|'fill'|'hollow'|'line'```

Default: `false`.

- false/'nofill'

![](http://nerik.github.io/leaflet-graphicscale/readme/nofill.png)

- 'fill'

With `fill` the scale alternates between filled and transparent sections.

![](http://nerik.github.io/leaflet-graphicscale/readme/fill.png)

- 'double'

With `double` the scale only contains filled sections but with alternate colors.

- 'hollow'

![](http://nerik.github.io/leaflet-graphicscale/readme/hollow.png)

- 'line'

![](http://nerik.github.io/leaflet-graphicscale/readme/line.png)


### doubleLine: ```false|true```

Default: `false`.

![](http://nerik.github.io/leaflet-graphicscale/readme/double.png)


### showSubunits: ```false|true```

Default: `false`. Show smaller divisions on the left of the zero.

![](http://nerik.github.io/leaflet-graphicscale/readme/sub.png)


### minUnitWidth: ```(Number)```

Default: `30`. The minimum width of a scale unit.

### maxUnitsWidth: ```(Number)```

Default: `240`. The maximum width of the scale without subunits.

### labelPlacement: ```'auto'|'top'|'bottom'``` 

Default: `auto`. Display the distance label on top/on the bottom of the scale bar. If set to auto, labels will be placed on top when the scale control is on the bottom of the map, and on the bottom when the scale control is on the top of the map (```position``` parameter).

### unitPlacement: ```'label'|'scale'``` 

Default: `label`. Display the unit labels beside the labels on the left/right side of the scale bar. If set to `scale`, labels will be placed on the left/right-side of the scale bar.

### getDisplayUnit ```(Function)```

Default: none. The `getDisplayUnit(meters)` function should return the unit label and value to be displayed, e.g.
```
const getDisplayUnit = (meters) => ({ unit: (meters<1000) ? 'm' : 'km', amount: (displayUnit === 'km') ? meters / 1000 : meters })
```

### position:

See http://leafletjs.com/reference.html#control

### updateWhenIdle:

See http://leafletjs.com/reference.html#control-scale

