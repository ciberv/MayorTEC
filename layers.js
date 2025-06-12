var wms_layers = [];


        var lyr_OpenStreetMapStandard_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap Standard',
            'opacity': 0.612000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1 = new ol.format.GeoJSON();
var features_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1 = format_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1.readFeatures(json_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1.addFeatures(features_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1);
var lyr_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1, 
                style: style_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1,
                popuplayertitle: 'Indices_tecno_75(2) — indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio',
                interactive: true,
    title: 'Indices_tecno_75(2) — indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio<br />\
    <img src="styles/legend/Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1_0.png" /> 19,5<br />\
    <img src="styles/legend/Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1_1.png" /> 31<br />\
    <img src="styles/legend/Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1_2.png" /> 31,5<br />\
    <img src="styles/legend/Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1_3.png" /> 40,8<br />\
    <img src="styles/legend/Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1_4.png" /> 41<br />\
    <img src="styles/legend/Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1_5.png" /> <br />' });

lyr_OpenStreetMapStandard_0.setVisible(true);lyr_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1.setVisible(true);
var layersList = [lyr_OpenStreetMapStandard_0,lyr_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1];
lyr_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1.set('fieldAliases', {'fid': 'fid', 'c_tip_ent': 'c_tip_ent', 'n_tip_ent': 'n_tip_ent', 'n_mun': 'n_mun', 'n_prov': 'n_prov', 'n_auton': 'n_auton', 'c_auton_in': 'c_auton_in', 'c_prov_ine': 'c_prov_ine', 'c_mun_ine': 'c_mun_ine', 'c_mun': 'c_mun', 'c_ent_cyl': 'c_ent_cyl', 'm_sup_m': 'm_sup_m', 'inspireid': 'inspireid', 'num_mun_ent': 'num_mun_ent', 'Habitantes': 'Habitantes', 'layer': 'layer', 'path': 'path', 'porcentaje_mayores75': 'porcentaje_mayores75', 'pob_mayor75': 'pob_mayor75', 'habitat_tramo': 'habitat_tramo', 'uso_alguna_ve': 'uso_alguna_ve', });
lyr_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1.set('fieldImages', {'fid': 'TextEdit', 'c_tip_ent': 'Range', 'n_tip_ent': 'TextEdit', 'n_mun': 'TextEdit', 'n_prov': 'TextEdit', 'n_auton': 'TextEdit', 'c_auton_in': 'TextEdit', 'c_prov_ine': 'TextEdit', 'c_mun_ine': 'TextEdit', 'c_mun': 'TextEdit', 'c_ent_cyl': 'TextEdit', 'm_sup_m': 'TextEdit', 'inspireid': 'TextEdit', 'num_mun_ent': 'Range', 'Habitantes': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', 'porcentaje_mayores75': 'TextEdit', 'pob_mayor75': 'Range', 'habitat_tramo': 'TextEdit', 'uso_alguna_ve': 'TextEdit', });
lyr_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1.set('fieldLabels', {'fid': 'no label', 'c_tip_ent': 'no label', 'n_tip_ent': 'no label', 'n_mun': 'no label', 'n_prov': 'no label', 'n_auton': 'no label', 'c_auton_in': 'no label', 'c_prov_ine': 'no label', 'c_mun_ine': 'no label', 'c_mun': 'no label', 'c_ent_cyl': 'no label', 'm_sup_m': 'no label', 'inspireid': 'no label', 'num_mun_ent': 'no label', 'Habitantes': 'no label', 'layer': 'no label', 'path': 'no label', 'porcentaje_mayores75': 'no label', 'pob_mayor75': 'no label', 'habitat_tramo': 'no label', 'uso_alguna_ve': 'no label', });
lyr_Indices_tecno_752indices_tecno_75__poblacin_espana_municipios__poblacin_en_espaa_por_municipio_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});