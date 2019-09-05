
var chart_pie_DtRunStatistic;
$(document).ready(function() {
	var colors = Highcharts.getOptions().colors;
	var name = 'DynTets run statistics';
	var url = 'https://tfsb.abb.com/tfs/RobotProducts/Paint/';
	var data = { data: [{ color: 'forestgreen', name: 'Test cases excueted', y: 159, drilldown: { name: 'Test cases excueted', data: { data: [{ color: 'forestgreen', name: 112489, y: 1 }, { color: 'forestgreen', name: 125169, y: 1 }, { color: 'forestgreen', name: 115815, y: 1 }, { color: 'forestgreen', name: 112284, y: 1 }, { color: 'forestgreen', name: 112289, y: 1 }, { color: 'forestgreen', name: 112180, y: 1 }, { color: 'forestgreen', name: 179411, y: 1 }, { color: 'forestgreen', name: 179409, y: 1 }, { color: 'forestgreen', name: 112175, y: 1 }, { color: 'forestgreen', name: 179408, y: 1 }, { color: 'forestgreen', name: 194034, y: 1 }, { color: 'forestgreen', name: 131226, y: 1 }, { color: 'forestgreen', name: 175400, y: 1 }, { color: 'forestgreen', name: 198620, y: 1 }, { color: 'forestgreen', name: 132912, y: 1 }, { color: 'forestgreen', name: 114053, y: 1 }, { color: 'forestgreen', name: 120273, y: 1 }, { color: 'forestgreen', name: 112484, y: 1 }, { color: 'forestgreen', name: 113352, y: 1 }, { color: 'forestgreen', name: 115204, y: 1 }, { color: 'forestgreen', name: 198675, y: 1 }, { color: 'forestgreen', name: 198694, y: 1 }, { color: 'forestgreen', name: 198695, y: 1 }, { color: 'forestgreen', name: 112485, y: 1 }, { color: 'forestgreen', name: 137900, y: 1 }, { color: 'forestgreen', name: 177052, y: 1 }, { color: 'forestgreen', name: 112482, y: 1 }, { color: 'forestgreen', name: 112488, y: 1 }, { color: 'forestgreen', name: 113234, y: 1 }, { color: 'forestgreen', name: 114747, y: 1 }, { color: 'forestgreen', name: 198674, y: 1 }, { color: 'forestgreen', name: 198679, y: 1 }, { color: 'forestgreen', name: 112483, y: 1 }, { color: 'forestgreen', name: 112487, y: 1 }, { color: 'forestgreen', name: 112492, y: 1 }, { color: 'forestgreen', name: 168938, y: 1 }, { color: 'forestgreen', name: 183937, y: 1 }, { color: 'forestgreen', name: 198677, y: 1 }, { color: 'forestgreen', name: 198691, y: 1 }, { color: 'forestgreen', name: 112472, y: 1 }, { color: 'forestgreen', name: 112480, y: 1 }, { color: 'forestgreen', name: 112491, y: 1 }, { color: 'forestgreen', name: 120272, y: 1 }, { color: 'forestgreen', name: 198678, y: 1 }, { color: 'forestgreen', name: 198692, y: 1 }, { color: 'forestgreen', name: 198693, y: 1 }, { color: 'forestgreen', name: 112464, y: 1 }, { color: 'forestgreen', name: 112481, y: 1 }, { color: 'forestgreen', name: 112461, y: 1 }, { color: 'forestgreen', name: 112477, y: 1 }, { color: 'forestgreen', name: 112479, y: 1 }, { color: 'forestgreen', name: 147668, y: 1 }, { color: 'forestgreen', name: 178862, y: 1 }, { color: 'forestgreen', name: 198676, y: 1 }, { color: 'forestgreen', name: 198680, y: 1 }, { color: 'forestgreen', name: 112433, y: 1 }, { color: 'forestgreen', name: 112471, y: 1 }, { color: 'forestgreen', name: 112478, y: 1 }, { color: 'forestgreen', name: 112473, y: 1 }, { color: 'forestgreen', name: 112486, y: 1 }, { color: 'forestgreen', name: 112490, y: 1 }, { color: 'forestgreen', name: 113793, y: 1 }, { color: 'forestgreen', name: 115922, y: 1 }, { color: 'forestgreen', name: 115918, y: 1 }, { color: 'forestgreen', name: 187833, y: 1 }, { color: 'forestgreen', name: 187842, y: 1 }, { color: 'forestgreen', name: 115917, y: 1 }, { color: 'forestgreen', name: 115921, y: 1 }, { color: 'forestgreen', name: 115912, y: 1 }, { color: 'forestgreen', name: 115911, y: 1 }, { color: 'forestgreen', name: 115920, y: 1 }, { color: 'forestgreen', name: 187836, y: 1 }, { color: 'forestgreen', name: 187840, y: 1 }, { color: 'forestgreen', name: 115909, y: 1 }, { color: 'forestgreen', name: 115868, y: 1 }, { color: 'forestgreen', name: 115913, y: 1 }, { color: 'forestgreen', name: 115919, y: 1 }, { color: 'forestgreen', name: 114402, y: 1 }, { color: 'forestgreen', name: 115312, y: 1 }, { color: 'forestgreen', name: 115910, y: 1 }, { color: 'forestgreen', name: 115914, y: 1 }, { color: 'forestgreen', name: 114685, y: 1 }, { color: 'forestgreen', name: 114759, y: 1 }, { color: 'forestgreen', name: 114909, y: 1 }, { color: 'forestgreen', name: 114635, y: 1 }, { color: 'forestgreen', name: 114854, y: 1 }, { color: 'forestgreen', name: 115004, y: 1 }, { color: 'forestgreen', name: 114982, y: 1 }, { color: 'forestgreen', name: 115001, y: 1 }, { color: 'forestgreen', name: 115003, y: 1 }, { color: 'forestgreen', name: 115189, y: 1 }, { color: 'forestgreen', name: 115158, y: 1 }, { color: 'forestgreen', name: 115161, y: 1 }, { color: 'forestgreen', name: 115188, y: 1 }, { color: 'forestgreen', name: 115154, y: 1 }, { color: 'forestgreen', name: 115249, y: 1 }, { color: 'forestgreen', name: 115229, y: 1 }, { color: 'forestgreen', name: 115250, y: 1 }, { color: 'forestgreen', name: 115280, y: 1 }, { color: 'forestgreen', name: 115286, y: 1 }, { color: 'forestgreen', name: 115291, y: 1 }, { color: 'forestgreen', name: 115293, y: 1 }, { color: 'forestgreen', name: 115289, y: 1 }, { color: 'forestgreen', name: 115285, y: 1 }, { color: 'forestgreen', name: 115294, y: 1 }, { color: 'forestgreen', name: 115370, y: 1 }, { color: 'forestgreen', name: 115368, y: 1 }, { color: 'forestgreen', name: 115365, y: 1 }, { color: 'forestgreen', name: 185712, y: 1 }, { color: 'forestgreen', name: 136391, y: 1 }, { color: 'forestgreen', name: 137645, y: 1 }, { color: 'forestgreen', name: 137548, y: 1 }, { color: 'forestgreen', name: 159771, y: 1 }, { color: 'forestgreen', name: 155609, y: 1 }, { color: 'forestgreen', name: 120375, y: 1 }, { color: 'forestgreen', name: 196610, y: 1 }, { color: 'forestgreen', name: 196620, y: 1 }, { color: 'forestgreen', name: 196621, y: 1 }, { color: 'forestgreen', name: 150612, y: 1 }, { color: 'forestgreen', name: 150944, y: 1 }, { color: 'forestgreen', name: 196611, y: 1 }, { color: 'forestgreen', name: 196615, y: 1 }, { color: 'forestgreen', name: 149883, y: 1 }, { color: 'forestgreen', name: 196614, y: 1 }, { color: 'forestgreen', name: 196617, y: 1 }, { color: 'forestgreen', name: 196618, y: 1 }, { color: 'forestgreen', name: 196622, y: 1 }, { color: 'forestgreen', name: 196625, y: 1 }, { color: 'forestgreen', name: 196626, y: 1 }, { color: 'forestgreen', name: 149886, y: 1 }, { color: 'forestgreen', name: 148910, y: 1 }, { color: 'forestgreen', name: 196616, y: 1 }, { color: 'forestgreen', name: 196619, y: 1 }, { color: 'forestgreen', name: 196623, y: 1 }, { color: 'forestgreen', name: 198063, y: 1 }, { color: 'forestgreen', name: 156009, y: 1 }, { color: 'forestgreen', name: 219891, y: 1 }, { color: 'forestgreen', name: 219900, y: 1 }, { color: 'forestgreen', name: 219892, y: 1 }, { color: 'forestgreen', name: 219890, y: 1 }, { color: 'forestgreen', name: 219899, y: 1 }, { color: 'forestgreen', name: 219901, y: 1 }, { color: 'forestgreen', name: 219902, y: 1 }, { color: 'forestgreen', name: 239740, y: 1 }, { color: 'forestgreen', name: 219857, y: 1 }, { color: 'forestgreen', name: 219894, y: 1 }, { color: 'forestgreen', name: 219895, y: 1 }, { color: 'forestgreen', name: 174659, y: 1 }, { color: 'forestgreen', name: 219893, y: 1 }, { color: 'forestgreen', name: 219896, y: 1 }, { color: 'forestgreen', name: 219897, y: 1 }, { color: 'forestgreen', name: 219898, y: 1 }, { color: 'forestgreen', name: 193565, y: 1 }, { color: 'forestgreen', name: 244760, y: 1 }, { color: 'forestgreen', name: 244890, y: 1 }, { color: 'forestgreen', name: 244508, y: 1 }, { color: 'forestgreen', name: 246422, y: 1 }, { color: 'forestgreen', name: 174657, y: 1 }, { color: 'forestgreen', name: 244759, y: 1 }] }, color: 'rgba(0, 0, 0, )' } }, { color: 'darksalmon', name: 'Test cases Ready but not executed', y: 0, drilldown: { name: 'Test cases Ready but not executed', data: { data: [] }, color: 'rgba(0, 0, 0, )' } }, { color: 'darkgray', name: 'Test cases not automatic sheduled', y: 1, drilldown: { name: 'Test cases not automatic sheduled', data: { data: [{ color: 'darkgray', name: 191975, y: 1 }] }, color: 'rgba(0, 0, 0, )' } }, { color: 'fuchsia', name: 'Test cases not Ready', y: 37, drilldown: { name: 'Test cases not Ready', data: { data: [{ color: 'fuchsia', name: 238574, y: 1 }, { color: 'fuchsia', name: 216584, y: 1 }, { color: 'fuchsia', name: 234642, y: 1 }, { color: 'fuchsia', name: 234643, y: 1 }, { color: 'fuchsia', name: 219232, y: 1 }, { color: 'fuchsia', name: 219240, y: 1 }, { color: 'fuchsia', name: 219242, y: 1 }, { color: 'fuchsia', name: 217794, y: 1 }, { color: 'fuchsia', name: 203855, y: 1 }, { color: 'fuchsia', name: 203851, y: 1 }, { color: 'fuchsia', name: 203829, y: 1 }, { color: 'fuchsia', name: 219234, y: 1 }, { color: 'fuchsia', name: 219235, y: 1 }, { color: 'fuchsia', name: 203821, y: 1 }, { color: 'fuchsia', name: 203857, y: 1 }, { color: 'fuchsia', name: 203801, y: 1 }, { color: 'fuchsia', name: 203820, y: 1 }, { color: 'fuchsia', name: 203793, y: 1 }, { color: 'fuchsia', name: 203849, y: 1 }, { color: 'fuchsia', name: 219238, y: 1 }, { color: 'fuchsia', name: 219239, y: 1 }, { color: 'fuchsia', name: 219241, y: 1 }, { color: 'fuchsia', name: 203836, y: 1 }, { color: 'fuchsia', name: 203863, y: 1 }, { color: 'fuchsia', name: 202629, y: 1 }, { color: 'fuchsia', name: 203804, y: 1 }, { color: 'fuchsia', name: 202512, y: 1 }, { color: 'fuchsia', name: 203713, y: 1 }, { color: 'fuchsia', name: 203810, y: 1 }, { color: 'fuchsia', name: 225368, y: 1 }, { color: 'fuchsia', name: 199636, y: 1 }, { color: 'fuchsia', name: 193299, y: 1 }, { color: 'fuchsia', name: 214920, y: 1 }, { color: 'fuchsia', name: 219889, y: 1 }, { color: 'fuchsia', name: 234298, y: 1 }, { color: 'fuchsia', name: 214816, y: 1 }, { color: 'fuchsia', name: 192827, y: 1 }] }, color: 'rgba(0, 0, 0, )' } }, { color: 'gold', name: 'Test cases With No environment', y: 0, drilldown: { name: 'Test cases With No environment', data: { data: [] }, color: 'rgba(0, 0, 0, )' } }] };
	chart_pie_DtRunStatistic = new Highcharts.Chart({
		chart: { renderTo:'chart_pie_DtRunStatistic_container', options3d: { alpha: 45, enabled: true }, plotShadow: false, type: 'pie', zoomType: 'xy' }, 
		credits: { enabled: false }, 
		legend: { enabled: false }, 
		plotOptions: { pie: { cursor: 'auto', dataLabels: { color: colors[1], enabled: true, formatter: function() {if (this.series.name !="DynTest run statistics"){return 'TestCaseId: '+this.key;}else{return this.point.name+' :'+this.y; } }, style: { fontWeight: 'bold' } }, depth: 35, point: { events: { click: PiePointClick_DtRunStatistic } } } }, 
		title: { text: '' }, 
		exporting: { filename: 'test1234.jpg', type: 'image/jpeg' }, 
		series: [{ data: [{ color: 'forestgreen', name: 'Test cases excueted', y: 159, drilldown: { name: 'Test cases excueted', data: { data: [{ color: 'forestgreen', name: 112489, y: 1 }, { color: 'forestgreen', name: 125169, y: 1 }, { color: 'forestgreen', name: 115815, y: 1 }, { color: 'forestgreen', name: 112284, y: 1 }, { color: 'forestgreen', name: 112289, y: 1 }, { color: 'forestgreen', name: 112180, y: 1 }, { color: 'forestgreen', name: 179411, y: 1 }, { color: 'forestgreen', name: 179409, y: 1 }, { color: 'forestgreen', name: 112175, y: 1 }, { color: 'forestgreen', name: 179408, y: 1 }, { color: 'forestgreen', name: 194034, y: 1 }, { color: 'forestgreen', name: 131226, y: 1 }, { color: 'forestgreen', name: 175400, y: 1 }, { color: 'forestgreen', name: 198620, y: 1 }, { color: 'forestgreen', name: 132912, y: 1 }, { color: 'forestgreen', name: 114053, y: 1 }, { color: 'forestgreen', name: 120273, y: 1 }, { color: 'forestgreen', name: 112484, y: 1 }, { color: 'forestgreen', name: 113352, y: 1 }, { color: 'forestgreen', name: 115204, y: 1 }, { color: 'forestgreen', name: 198675, y: 1 }, { color: 'forestgreen', name: 198694, y: 1 }, { color: 'forestgreen', name: 198695, y: 1 }, { color: 'forestgreen', name: 112485, y: 1 }, { color: 'forestgreen', name: 137900, y: 1 }, { color: 'forestgreen', name: 177052, y: 1 }, { color: 'forestgreen', name: 112482, y: 1 }, { color: 'forestgreen', name: 112488, y: 1 }, { color: 'forestgreen', name: 113234, y: 1 }, { color: 'forestgreen', name: 114747, y: 1 }, { color: 'forestgreen', name: 198674, y: 1 }, { color: 'forestgreen', name: 198679, y: 1 }, { color: 'forestgreen', name: 112483, y: 1 }, { color: 'forestgreen', name: 112487, y: 1 }, { color: 'forestgreen', name: 112492, y: 1 }, { color: 'forestgreen', name: 168938, y: 1 }, { color: 'forestgreen', name: 183937, y: 1 }, { color: 'forestgreen', name: 198677, y: 1 }, { color: 'forestgreen', name: 198691, y: 1 }, { color: 'forestgreen', name: 112472, y: 1 }, { color: 'forestgreen', name: 112480, y: 1 }, { color: 'forestgreen', name: 112491, y: 1 }, { color: 'forestgreen', name: 120272, y: 1 }, { color: 'forestgreen', name: 198678, y: 1 }, { color: 'forestgreen', name: 198692, y: 1 }, { color: 'forestgreen', name: 198693, y: 1 }, { color: 'forestgreen', name: 112464, y: 1 }, { color: 'forestgreen', name: 112481, y: 1 }, { color: 'forestgreen', name: 112461, y: 1 }, { color: 'forestgreen', name: 112477, y: 1 }, { color: 'forestgreen', name: 112479, y: 1 }, { color: 'forestgreen', name: 147668, y: 1 }, { color: 'forestgreen', name: 178862, y: 1 }, { color: 'forestgreen', name: 198676, y: 1 }, { color: 'forestgreen', name: 198680, y: 1 }, { color: 'forestgreen', name: 112433, y: 1 }, { color: 'forestgreen', name: 112471, y: 1 }, { color: 'forestgreen', name: 112478, y: 1 }, { color: 'forestgreen', name: 112473, y: 1 }, { color: 'forestgreen', name: 112486, y: 1 }, { color: 'forestgreen', name: 112490, y: 1 }, { color: 'forestgreen', name: 113793, y: 1 }, { color: 'forestgreen', name: 115922, y: 1 }, { color: 'forestgreen', name: 115918, y: 1 }, { color: 'forestgreen', name: 187833, y: 1 }, { color: 'forestgreen', name: 187842, y: 1 }, { color: 'forestgreen', name: 115917, y: 1 }, { color: 'forestgreen', name: 115921, y: 1 }, { color: 'forestgreen', name: 115912, y: 1 }, { color: 'forestgreen', name: 115911, y: 1 }, { color: 'forestgreen', name: 115920, y: 1 }, { color: 'forestgreen', name: 187836, y: 1 }, { color: 'forestgreen', name: 187840, y: 1 }, { color: 'forestgreen', name: 115909, y: 1 }, { color: 'forestgreen', name: 115868, y: 1 }, { color: 'forestgreen', name: 115913, y: 1 }, { color: 'forestgreen', name: 115919, y: 1 }, { color: 'forestgreen', name: 114402, y: 1 }, { color: 'forestgreen', name: 115312, y: 1 }, { color: 'forestgreen', name: 115910, y: 1 }, { color: 'forestgreen', name: 115914, y: 1 }, { color: 'forestgreen', name: 114685, y: 1 }, { color: 'forestgreen', name: 114759, y: 1 }, { color: 'forestgreen', name: 114909, y: 1 }, { color: 'forestgreen', name: 114635, y: 1 }, { color: 'forestgreen', name: 114854, y: 1 }, { color: 'forestgreen', name: 115004, y: 1 }, { color: 'forestgreen', name: 114982, y: 1 }, { color: 'forestgreen', name: 115001, y: 1 }, { color: 'forestgreen', name: 115003, y: 1 }, { color: 'forestgreen', name: 115189, y: 1 }, { color: 'forestgreen', name: 115158, y: 1 }, { color: 'forestgreen', name: 115161, y: 1 }, { color: 'forestgreen', name: 115188, y: 1 }, { color: 'forestgreen', name: 115154, y: 1 }, { color: 'forestgreen', name: 115249, y: 1 }, { color: 'forestgreen', name: 115229, y: 1 }, { color: 'forestgreen', name: 115250, y: 1 }, { color: 'forestgreen', name: 115280, y: 1 }, { color: 'forestgreen', name: 115286, y: 1 }, { color: 'forestgreen', name: 115291, y: 1 }, { color: 'forestgreen', name: 115293, y: 1 }, { color: 'forestgreen', name: 115289, y: 1 }, { color: 'forestgreen', name: 115285, y: 1 }, { color: 'forestgreen', name: 115294, y: 1 }, { color: 'forestgreen', name: 115370, y: 1 }, { color: 'forestgreen', name: 115368, y: 1 }, { color: 'forestgreen', name: 115365, y: 1 }, { color: 'forestgreen', name: 185712, y: 1 }, { color: 'forestgreen', name: 136391, y: 1 }, { color: 'forestgreen', name: 137645, y: 1 }, { color: 'forestgreen', name: 137548, y: 1 }, { color: 'forestgreen', name: 159771, y: 1 }, { color: 'forestgreen', name: 155609, y: 1 }, { color: 'forestgreen', name: 120375, y: 1 }, { color: 'forestgreen', name: 196610, y: 1 }, { color: 'forestgreen', name: 196620, y: 1 }, { color: 'forestgreen', name: 196621, y: 1 }, { color: 'forestgreen', name: 150612, y: 1 }, { color: 'forestgreen', name: 150944, y: 1 }, { color: 'forestgreen', name: 196611, y: 1 }, { color: 'forestgreen', name: 196615, y: 1 }, { color: 'forestgreen', name: 149883, y: 1 }, { color: 'forestgreen', name: 196614, y: 1 }, { color: 'forestgreen', name: 196617, y: 1 }, { color: 'forestgreen', name: 196618, y: 1 }, { color: 'forestgreen', name: 196622, y: 1 }, { color: 'forestgreen', name: 196625, y: 1 }, { color: 'forestgreen', name: 196626, y: 1 }, { color: 'forestgreen', name: 149886, y: 1 }, { color: 'forestgreen', name: 148910, y: 1 }, { color: 'forestgreen', name: 196616, y: 1 }, { color: 'forestgreen', name: 196619, y: 1 }, { color: 'forestgreen', name: 196623, y: 1 }, { color: 'forestgreen', name: 198063, y: 1 }, { color: 'forestgreen', name: 156009, y: 1 }, { color: 'forestgreen', name: 219891, y: 1 }, { color: 'forestgreen', name: 219900, y: 1 }, { color: 'forestgreen', name: 219892, y: 1 }, { color: 'forestgreen', name: 219890, y: 1 }, { color: 'forestgreen', name: 219899, y: 1 }, { color: 'forestgreen', name: 219901, y: 1 }, { color: 'forestgreen', name: 219902, y: 1 }, { color: 'forestgreen', name: 239740, y: 1 }, { color: 'forestgreen', name: 219857, y: 1 }, { color: 'forestgreen', name: 219894, y: 1 }, { color: 'forestgreen', name: 219895, y: 1 }, { color: 'forestgreen', name: 174659, y: 1 }, { color: 'forestgreen', name: 219893, y: 1 }, { color: 'forestgreen', name: 219896, y: 1 }, { color: 'forestgreen', name: 219897, y: 1 }, { color: 'forestgreen', name: 219898, y: 1 }, { color: 'forestgreen', name: 193565, y: 1 }, { color: 'forestgreen', name: 244760, y: 1 }, { color: 'forestgreen', name: 244890, y: 1 }, { color: 'forestgreen', name: 244508, y: 1 }, { color: 'forestgreen', name: 246422, y: 1 }, { color: 'forestgreen', name: 174657, y: 1 }, { color: 'forestgreen', name: 244759, y: 1 }] }, color: 'rgba(0, 0, 0, )' } }, { color: 'darksalmon', name: 'Test cases Ready but not executed', y: 0, drilldown: { name: 'Test cases Ready but not executed', data: { data: [] }, color: 'rgba(0, 0, 0, )' } }, { color: 'darkgray', name: 'Test cases not automatic sheduled', y: 1, drilldown: { name: 'Test cases not automatic sheduled', data: { data: [{ color: 'darkgray', name: 191975, y: 1 }] }, color: 'rgba(0, 0, 0, )' } }, { color: 'fuchsia', name: 'Test cases not Ready', y: 37, drilldown: { name: 'Test cases not Ready', data: { data: [{ color: 'fuchsia', name: 238574, y: 1 }, { color: 'fuchsia', name: 216584, y: 1 }, { color: 'fuchsia', name: 234642, y: 1 }, { color: 'fuchsia', name: 234643, y: 1 }, { color: 'fuchsia', name: 219232, y: 1 }, { color: 'fuchsia', name: 219240, y: 1 }, { color: 'fuchsia', name: 219242, y: 1 }, { color: 'fuchsia', name: 217794, y: 1 }, { color: 'fuchsia', name: 203855, y: 1 }, { color: 'fuchsia', name: 203851, y: 1 }, { color: 'fuchsia', name: 203829, y: 1 }, { color: 'fuchsia', name: 219234, y: 1 }, { color: 'fuchsia', name: 219235, y: 1 }, { color: 'fuchsia', name: 203821, y: 1 }, { color: 'fuchsia', name: 203857, y: 1 }, { color: 'fuchsia', name: 203801, y: 1 }, { color: 'fuchsia', name: 203820, y: 1 }, { color: 'fuchsia', name: 203793, y: 1 }, { color: 'fuchsia', name: 203849, y: 1 }, { color: 'fuchsia', name: 219238, y: 1 }, { color: 'fuchsia', name: 219239, y: 1 }, { color: 'fuchsia', name: 219241, y: 1 }, { color: 'fuchsia', name: 203836, y: 1 }, { color: 'fuchsia', name: 203863, y: 1 }, { color: 'fuchsia', name: 202629, y: 1 }, { color: 'fuchsia', name: 203804, y: 1 }, { color: 'fuchsia', name: 202512, y: 1 }, { color: 'fuchsia', name: 203713, y: 1 }, { color: 'fuchsia', name: 203810, y: 1 }, { color: 'fuchsia', name: 225368, y: 1 }, { color: 'fuchsia', name: 199636, y: 1 }, { color: 'fuchsia', name: 193299, y: 1 }, { color: 'fuchsia', name: 214920, y: 1 }, { color: 'fuchsia', name: 219889, y: 1 }, { color: 'fuchsia', name: 234298, y: 1 }, { color: 'fuchsia', name: 214816, y: 1 }, { color: 'fuchsia', name: 192827, y: 1 }] }, color: 'rgba(0, 0, 0, )' } }, { color: 'gold', name: 'Test cases With No environment', y: 0, drilldown: { name: 'Test cases With No environment', data: { data: [] }, color: 'rgba(0, 0, 0, )' } }], name: 'DynTest run statistics', color: 'white' }]
	});

	function TooltipFormatter(){
		var point = this.point, s = '';
                      if (point.drilldown) {
                        s += point.drilldown.name +':<b>'+ this.y +'<br/>'
                        s += 'Click to view '+ point.drilldown.name;
                      } else {
                        s += 'Click for details';
                      }
                      return s;
	}

	function PiePointClick_DtRunStatistic(){
		var drilldown = this.drilldown;
                            if (drilldown) { // drill down
                              setChart(drilldown.name, drilldown.categories, drilldown.data.data, drilldown.color);
                              var dvele = document.getElementById("dvBackButton_DtRunStatistic");
                              if(dvele===null){
                              createBackButton();
                              document.getElementById("dvBackButton_DtRunStatistic").style.display = "block";document.getElementById("dvBackButton_DtRunStatistic").style.textAlign="center"}
                              else{ document.getElementById("dvBackButton_DtRunStatistic").style.display = "block";document.getElementById("dvBackButton_DtRunStatistic").style.textAlign="center"}
                            } else { // restore
//as discussed with Prashant,this URL redirection not required.
                              //window.open(url+ this.y,'_blank');
                            }
	}

	function createBackButton(){
		var dv = document.createElement("div");
                      dv.style.cssText = "text - align:center";
                      dv.id = "dvBackButton_DtRunStatistic";
                      var btn = document.createElement("Button");
                      btn.id = "dvBackButton_DtRunStatistic";
                      var t = document.createTextNode("Click to Return");
                      btn.appendChild(t);
                      dv.appendChild(btn);
                      document.getElementById("chart_pie_DtRunStatistic_container").appendChild(dv);
                      var ele = document.getElementById("dvBackButton_DtRunStatistic");
                      ele.onclick = function(){
                          chart_pie_DtRunStatistic.series[0].remove();
                          chart_pie_DtRunStatistic.addSeries({
                          name: name,
                          data: data.data,
                          color: 'white'
                          });
                      document.getElementById("dvBackButton_DtRunStatistic").style.display = "none";
                      }
                  if(typeof (this.drilldown)!="undefined")
      {document.getElementById("dvBackButton_DtRunStatistic").style.display = "block";document.getElementById("dvBackButton_DtRunStatistic").style.textAlign="center"}
      else{ document.getElementById("dvBackButton_DtRunStatistic").style.display = "none";}
	}

	function setChart(name, categories, data, color){
		chart_pie_DtRunStatistic.xAxis[0].setCategories(categories);
                    chart_pie_DtRunStatistic.series[0].remove();
                    chart_pie_DtRunStatistic.addSeries({
                        name: name,
                        data: data,
                        color: color || 'white'
                    });
	}
});

