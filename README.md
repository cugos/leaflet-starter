Leaflet Starter
===============

Barebones application needed for building a [Leaflet](http://leafletjs.com) webmap with GeoJSON data. This specific example uses Mapbox's tilesets which can be obtained by creating an account at [mapbox.com](http://mapbox.com).

##What you'll need

1. **Mapbox tileset ID** ex: `examples.map-h67hf2ic`
2. **Data**. For testing and playing around, I recommend starting with *point data* from Natural Earth Data's [Populated Places dataset](http://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-populated-places/).

##Setup

1. Get your data into a GeoJSON format, via GDAL cli or QGIS (read more about geojson here).
2. Take the raw text of that GeoJSON data and add it to a javascript variable in a separate `.js` file - this is done for you here in the `data.js` file, which is linked to your `index.html` file.
3. Instantiate the leaflet API via your `site.js` file, this is where you'll include your mapbox tileset ID and your geojson data/variable. The `site.js` is prepared for you already to set up your map in the `#map` element of your `index.html` file.

##Woop~!
