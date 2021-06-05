/*!
 * jQuery StickyTableHeader plugin
 *
 * Copyright 2014 Hung Nguyen
 *
 * Date: Tue Nov 4 2014 07:00:00 GMT
 */
/*jslint browser: true, nomen: true, unparam: true, node: true*/
/*global $, jQuery*/

// $(".tab-ones") 横向滚动时 判断 y轴 是否大于0，大于0则展示固定fixed
// $(".tab-ones") 纵向滚动时 判断 y轴 是否大于0，大于0则展示固定fixed

"use strict";
(function ($) {
    var timer; // 维护同一个timer
	function debounce(fn, delay) {
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn();
		}, delay);
	}
	$.fn.fixedTableHeader = function (opt) {
        var option = {
			ele: opt.ele || "emptyClass",
            tableOnes: opt.tableOnes || ".tab-ones",
			tableTwo: opt.tableTwo || ".tab-twos",
		};
		return this.each(function (key, item) {
			var $self = $(this),
				$fixedHeader,
				$originalHeader,
				tableTopOffset = -1,
				tableBottomOffset = -1,
				headerHeight = -1,
				originalWidth = [],
				originalHeight = [];

			if ($.isEmptyObject(originalWidth)) {
				$self.find("thead > tr > th").each(function (key, item) {
					originalWidth.push($(item).outerWidth());
                    originalHeight.push($(item).outerHeight());
				});
			}
			function init() {
				$originalHeader = $self.find("thead:first");

				$fixedHeader = $originalHeader.clone();

				$fixedHeader.css("position", "absolute");
				// $fixedHeader.css("display", "none");
				$fixedHeader.css("height", $self.find("thead").outerHeight());
				$fixedHeader.css("width", $self.find("thead").outerWidth());
				// $fixedHeader.css("top", "0px");
				// $fixedHeader.css("margin-top", "-40px");
				$fixedHeader.css("z-index", 1);
                // 防止重复渲染多个元素
                $fixedHeader.addClass(option.ele);
				// $fixedHeader.removeClass("vishide")

                $fixedHeader.find("th").each(function (key, item) {
					$(item).css("min-width", parseInt(originalWidth[key], 10));
					$(item).css("max-width", parseInt(originalWidth[key], 10));
                    $(item).css("width", parseInt(originalWidth[key], 10));

                    $(item).css("min-height", parseInt(originalHeight[key], 10));
					$(item).css("max-height", parseInt(originalHeight[key], 10));
                    $(item).css("height", parseInt(originalHeight[key], 10));
				});
				// $originalHeader.after($fixedHeader);
                // $originalHeader.hide();
                $originalHeader.addClass("vishide");
                $(option.tableTwo).before($fixedHeader);
                $fixedHeader.show();

                // if(){

                // }
			}
			function fixSize() {
                console.log(123456543);

                $originalHeader = $self.find("thead:first");
				$fixedHeader.css("position", "absolute");
				$fixedHeader.css("display", "none");
				$fixedHeader.css("height", $self.find("thead").outerHeight());
				$fixedHeader.css("width", $self.find("thead").outerWidth());
				// $fixedHeader.css("margin-top", "-40px");
				$fixedHeader.css("z-index", 1);

				$fixedHeader.find("th").each(function (key, item) {
                    var outTh = $originalHeader.find("th").eq(key);
                    $(item).css("min-width", outTh.outerWidth() + "px");
                    $(item).css("max-width", outTh.outerWidth() + "px");
                    $(item).css("width", outTh.outerWidth() + "px");
                    $(item).css("min-height", outTh.outerHeight() + "px");
					$(item).css("max-height", outTh.outerHeight() + "px");
                    $(item).css("height", outTh.outerHeight() + "px");
				});
				// $originalHeader.after($fixedHeader);
				$fixedHeader.show();
				// $originalHeader.addClass("vishide");

			}
            $(option.tableOnes).scroll(function () {
				// console.log("scroller: ", $(this).scrollLeft(), $(this).scrollTop());
                // var sibliings = $(this).parents().siblings().find("thead")
                var sibliings = $(this).parents().parents(".tab-three").find("thead").eq(0);
                // console.log("sibliings: ", sibliings);
				sibliings.css({
					transform: "translateX(-" + $(this).scrollLeft() + "px)",
				});
			});
			init();
			$(window).resize(function(){
                debounce(fixSize, 100);
            });
		});
	};
})(jQuery);
