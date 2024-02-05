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
        unitPlacement: 'scale'
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
    function createControl() {
        graphicScale = L.control.graphicScale(options).addTo(map);
        var doubleLineOptions = '<h1>Leaflet Graphic Scale</h1><b>doubleLine</b>: <span class="choice">true</span>-<span class="choice">false</span>';
        createOptions(doubleLineOptions, 'doubleLine');
        var showSubunitsOptions = '<b>showSubunits</b>: <span class="choice">true</span>-<span class="choice">false</span>';
        createOptions(showSubunitsOptions, 'showSubunits');
        var unitPlacementOptions = '<b>unitPlacement</b>: <span class="choice">label</span>-<span class="choice">scale</span>';
        createOptions(unitPlacementOptions, 'unitPlacement');
        var fillOptions = '<b>fill</b>: <span class="choice">hollow</span>-<span class="choice">line</span>-<span class="choice">fill</span>-<span class="choice">double</span>-<span class="choice">nofill</span><br/><br/>';
        createOptions(fillOptions, 'fill');
    };

    createControl();
})();
