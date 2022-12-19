$(function () {


	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 992) {
			$("#collapdable-nav").collapse('hide');
		}
	});
});

(function (global) {

var dc = {};
var homeHtml = "../snippets/home-snippet.html";

// function to insert html
var insertHtml = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.insertHtml = html;
};

// function to show icon while loding page
var showLoadind = function (selector) {
	var html = "<div class='text-center'>";
	html += "<img src='../images/ajax-loader.gif'></div>";
	insertHtml(selector, html);
};

// On page load
document.addEventListener("DOMContentLoaded", function (event) {

	showLoading("main-content");
	$ajaxUtils.sendGetRequest(
		homeHtml,
		function (responseText) {
			document.querySelector("main-content").innerHTML = responseText;
		},
		false);
});

global.$dc = dc;

})(window);	