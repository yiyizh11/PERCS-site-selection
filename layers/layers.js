var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Edgedensitym2ha_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Edge density (m2/ha)<br />\
    <img src="styles/legend/Edgedensitym2ha_1_0.png" /> <= 54.69<br />\
    <img src="styles/legend/Edgedensitym2ha_1_1.png" /> 54.69 - 131.36<br />\
    <img src="styles/legend/Edgedensitym2ha_1_2.png" /> 131.36 - 252.50<br />\
    <img src="styles/legend/Edgedensitym2ha_1_3.png" /> 252.50 - 423.63<br />\
    <img src="styles/legend/Edgedensitym2ha_1_4.png" /> > 423.63<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Edgedensitym2ha_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13747797.854610, 6261640.217404, -13502856.197036, 6374441.544233]
        })
    });
var lyr_Percentage_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Percentage (%)<br />\
    <img src="styles/legend/Percentage_2_0.png" /> <= 0.00<br />\
    <img src="styles/legend/Percentage_2_1.png" /> 0.00 - 20.00<br />\
    <img src="styles/legend/Percentage_2_2.png" /> 20.00 - 40.00<br />\
    <img src="styles/legend/Percentage_2_3.png" /> 40.00 - 60.00<br />\
    <img src="styles/legend/Percentage_2_4.png" /> 60.00 - 80.00<br />\
    <img src="styles/legend/Percentage_2_5.png" /> > 80.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Percentage_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13747797.854610, 6261640.217404, -13502856.197036, 6374441.544233]
        })
    });
var lyr_AGPerennial_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'AG - Perennial<br />\
    <img src="styles/legend/AGPerennial_3_0.png" /> AG - Perennial<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AGPerennial_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13747794.806488, 6261736.036710, -13502996.947667, 6374441.533261]
        })
    });
var lyr_AGAnnual_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'AG - Annual<br />\
    <img src="styles/legend/AGAnnual_4_0.png" /> AG - Annual<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AGAnnual_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13747794.806488, 6261736.036710, -13502996.947667, 6374441.533261]
        })
    });
var lyr_AGGrass_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'AG - Grass<br />\
    <img src="styles/legend/AGGrass_5_0.png" /> AG -Grass<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AGGrass_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13747794.806488, 6261736.036710, -13502996.947667, 6374441.533261]
        })
    });

lyr_ESRISatellite_0.setVisible(true);lyr_Edgedensitym2ha_1.setVisible(true);lyr_Percentage_2.setVisible(true);lyr_AGPerennial_3.setVisible(true);lyr_AGAnnual_4.setVisible(true);lyr_AGGrass_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Edgedensitym2ha_1,lyr_Percentage_2,lyr_AGPerennial_3,lyr_AGAnnual_4,lyr_AGGrass_5];
