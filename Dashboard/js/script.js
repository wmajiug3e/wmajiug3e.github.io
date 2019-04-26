// Выбор темы

let hours = (new Date).getHours();
let el = document.querySelector('link[style="theme"]');
let is_night = hours < 10 || hours > 18;
if (el) {
		el.setAttribute('href', is_night ? 'css/dark.css' : 'css/light.css');
}

el = document.querySelector('.weatherwidget-io');
if (el) {
el.setAttribute('data-theme', is_night ? 'dark' : 'pure');
}

el = document.querySelector('.weatherwidget-io');
if (el) {
el.setAttribute('data-cloudfill', is_night ? '#1e1e2d' : '#fff')
}

// курс валют

$.ajax({
			type: 'get',
			url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange',
			dataType: 'xml',
			success: function(response) {
								$(response).find("currency").each(function(i,elem) {
											if($(elem).find('r030').text() == '840') {
														usd = +$(elem).find('rate').text();
														$('#usd-rate').html(`<i class="fas fa-dollar-sign"></i> ${(usd).toFixed(2)}₴`);
											};
											if($(elem).find('r030').text() == '643') {
														rub = +$(elem).find('rate').text();
														$('#rub-rate').html(`<i class="fas fa-ruble-sign"></i> ${(rub).toFixed(2)}₴`);
											};
											if($(elem).find('r030').text() == '978') {
														eur = +$(elem).find('rate').text();
														$('#eur-rate').html(`<i class="fas fa-euro-sign"></i> ${(eur).toFixed(2)}₴`);
											};
					})
		}
});
$('input').on('keyup',function(){
var uah1, uah2, uah3;
uah1 = parseFloat($('#UAH1').val()).toFixed(2);
uah2 = parseFloat($('#UAH2').val()).toFixed(2);
uah3 = parseFloat($('#UAH3').val()).toFixed(2);

$('#USD').val((uah1 * usd).toFixed(2));
$('#RUB').val((uah2 * rub).toFixed(2));
$('#EUR').val((uah3 * eur).toFixed(2));

});

// Курс биткоина
