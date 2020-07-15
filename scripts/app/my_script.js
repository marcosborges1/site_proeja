/*
 |--------------------------------------------------------------------------
 | Shards Dashboards: Blog Overview Template
 |--------------------------------------------------------------------------
 */


// 'use strict';

// (function ($) {
//   $(document).ready(function () {

//     //Configuration Marcos (File MyUtils.js)
//     MyUtils.includeHTML()
//     //End Configuration Marcos
//   });
// })(jQuery);

const getInformacoesProejaPorCodigo = (codigo) => {
	$.getJSON(`https://spreadsheets.google.com/feeds/cells/1nvHPe949X6WV_toO7MwNhikiPAREo5Sn4uBzN-jru58/${codigo}/public/full?alt=json`, (data)=> {

		let x = ""
		data.feed.entry.map((r,i)=> {

		  if(i>5) {
		    if(i%5==1) x += `<tr>`
		    x+=tupla(r,i)
		    if(i%5==0) x += `</tr>`
		  }
		})

		$(`#loading_${codigo}`).hide()
		$(`#proeja_turma_${codigo}`).html(x)    
	})
}
function tupla(r,i) {

	if(i%5==2) {
	return `<td class="border-0 d-none d-lg-block d-sm-none d-md-block">${r.content.$t}</td>`
	}
	return `
	<td>${r.content.$t}</td>
	`
}