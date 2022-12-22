$(function () {


	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 992) {
			$("#collapdable-nav").collapse('hide');
		}
	});

// In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });


});

(function (global) {

var dc = {};
var homeHtml = "./snippets/home-snippet.html";
var allCategoriesURL = "./data/menu-categories.json";
var categoriesTitleHtml = "./snippets/menu-title-snippet.html";
var categoryHtml = "./snippets/menu-snippet.html";

var itemTitleHtml = "./snippets/item-title-snippet.html";
var itemHtml = "./snippets/item-snippet.html";

// function to insert html
var insertHtml = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.innerHTML = html;
};

// function to show icon while loding page
var showLoading = function (selector) {
	var html = "<div class='text-center'>";
	html += "<img src='./images/ajax-loader.gif'></div>";
	insertHtml(selector, html);
};

// Substitute of property {{name}}, etc....
var insertProperty = function (string, propName, propValue) {
	var propToReplace = "{{" + propName + "}}";
	string = string.replace(new RegExp(propToReplace, "g"), propValue);
	return string;
}



// On page load
document.addEventListener("DOMContentLoaded", function (event) {

	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		homeHtml,
		function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
});

// Load menu categories
dc.loadMenuCategories = function () {
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(allCategoriesURL, buildAndShowCategoriesHtml);
}

// Build Categories HTML  from data
function buildAndShowCategoriesHtml (categories) {
	// load categories
	$ajaxUtils.sendGetRequest(
		categoriesTitleHtml,
		function (categoriesTitleHtml) {
			//retrieve single category snippet
			$ajaxUtils.sendGetRequest(
				categoryHtml,
				function(categoryHtml) {
					var categoryViewHtml = 
						buildCategoriesViewHtml(categories,
														categoriesTitleHtml,
														categoryHtml);
					insertHtml("#main-content", categoryViewHtml);
				}, 
				false);	
		}, 
		false);
}

// Build categories view
function buildCategoriesViewHtml (categories,
											 categoriesTitleHtml,
											 categoryHtml) {

	var finalHtml = categoriesTitleHtml;
	finalHtml += "<section class='row'>";
	//Loop categories
	for (var i = 0; i<categories.length; i++) {
		var html = categoryHtml;
		var name = "" + categories[i].name;
		var short_name = categories[i].short_name;
		html = insertProperty(html, "name", name);
		html = insertProperty(html, "short_name", short_name);
		finalHtml += html;
	}
	finalHtml += "</section>";
	return finalHtml;
}


// PROPERTIES FOR ITEMS 
//    category:   id, name, short_name, special_instructions
//		menu_item: 0 to n, 
//						description, name, price_large, short_name

// Load menu items
dc.loadMenuItems = function (itemName) {
	var allItemsURL = "./data/"+ itemName + ".json";
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(allItemsURL, buildAndShowItemsHtml);
}

// Build Categories HTML  from data
function buildAndShowItemsHtml () {
	// load items
	$ajaxUtils.sendGetRequest(
		itemTitleHtml,
		function (itemTitleHtml) {
			//retrieve items snippet
			$ajaxUtils.sendGetRequest(
				itemHtml,
				function(itemHtml) {
					var itemViewHtml = 
						buildImtesViewHtml(	menu_items,
													itemTitleHtml,
													itemHtml);
					insertHtml("#main-content", itemViewHtml);
				}, 
				false);	
		}, 
		false);
}

// Build categories view
function buildItemsViewHtml (	menu_items,
										itemTitleHtml,
										itemHtml) {

	var finalHtml = itemTitleHtml;
	finalHtml = insertProperty(finalHtml, "name", name);
	finalHtml = insertProperty(finalHtml, "special_instructions", name);
	finalHtml += "<section class='row'>";

	//Loop items
	for (var i = 0; i<menu_items.length; i++) {
		var html = itemHtml;
		var name = "" + items[i].name;
		var short_name = items[i].short_name;
		var description = "" + items[i].description;
		var price_large = "" + items[i].price_large;
		var price_small = "" + items[i].price_small;
		var large_portion_name = "" + items[i].large_portion_name;
		var small_portion_name = "" + items[i].small_portion_name;
		

		html = insertProperty(html, "name", name);
		html = insertProperty(html, "short_name", short_name);
		html = insertProperty(html, "description", description);
		html = insertProperty(html, "large_portion_name", large_portion_name);
		html = insertProperty(html, "price_large", price_large);
		html = insertProperty(html, "small_portion_name", small_portion_name);
		html = insertProperty(html, "price_small", price_small);
		finalHtml += html;
	}
	finalHtml += "</section>";
	return finalHtml;
}


global.$dc = dc;

})(window);	

