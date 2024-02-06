(function() {
	'use strict';

	var map = L.map('map', {
        maxZoom: 30
    }).setView([16.252583, -61.539917], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var options = {
        doubleLine: true,
        showSubunits: true,
        fill: 'hollow',
        unitPlacement: 'scale',
        unitSystem: 'metric'
    };
    var graphicScale;
    function createOptions(html, property) {
        var element = L.DomUtil.create('div', 'scaleText' );
        graphicScale._container.insertBefore(element, graphicScale._container.lastChild);
        element.innerHTML = html;
        var choices = element.querySelectorAll('.choice');
        for (var i = 0; i < choices.length; i++) {
            choices[i].addEventListener('click', function(e) {
                graphicScale.remove();
                var value = e.currentTarget.innerHTML;
                if (value === 'true') value = true;
                if (value === 'false') value = false;
                options[property] = value;
                createControl();
            });
        }
    }
    function getUnitConversionFactor (meters) {
        if (options.unitSystem === 'metric') {
            return 1;
        } else if (options.unitSystem === 'imperial') {
            const miles = meters * 0.00062137;
            return (miles>=30) ? 0.00062137 : 3.28084;
        } else if (options.unitSystem === 'nautical') {
            const nm = meters * 0.000539957;
            return (nm>=25) ? 0.000539957 : 0.0539957;
        }
    }
    function getDisplayUnit (value, factor) {
        if (options.unitSystem === 'metric') {
            const displayUnit = (value<1000) ? 'm' : 'km';
            return {
                unit: displayUnit,
                amount: (displayUnit === 'km') ? value / 1000 : value
            };
        } else if (options.unitSystem === 'imperial') {
            const displayUnit = (factor === 3.28084) ? 'ft' : 'mi';
            return {
                unit: displayUnit,
                amount: value
            };
        } else if (options.unitSystem === 'nautical') {
            const displayUnit = (factor === 0.0539957) ? 'nm°' : 'nm';
            return {
                unit: displayUnit,
                amount: value
            };
        }
    }
    function createControl() {
        graphicScale = L.control.graphicScale(Object.assign({
            getUnitConversionFactor,
            getDisplayUnit,
        }, options)).addTo(map);
        var doubleLineOptions = '<h1>Leaflet Graphic Scale</h1><b>doubleLine</b>: <span class="choice">true</span>-<span class="choice">false</span>';
        createOptions(doubleLineOptions, 'doubleLine');
        var showSubunitsOptions = '<b>showSubunits</b>: <span class="choice">true</span>-<span class="choice">false</span>';
        createOptions(showSubunitsOptions, 'showSubunits');
        var unitPlacementOptions = '<b>unitPlacement</b>: <span class="choice">label</span>-<span class="choice">scale</span>';
        createOptions(unitPlacementOptions, 'unitPlacement');
        var unitSystemOptions = '<b>unitSystem</b>: <span class="choice">metric</span>-<span class="choice">imperial</span>-<span class="choice">nautical</span>';
        createOptions(unitSystemOptions, 'unitSystem');
        var fillOptions = '<b>fill</b>: <span class="choice">hollow</span>-<span class="choice">line</span>-<span class="choice">fill</span>-<span class="choice">double</span>-<span class="choice">nofill</span><br/><br/>';
        createOptions(fillOptions, 'fill');
    };

    createControl();
})();
