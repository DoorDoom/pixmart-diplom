$(document).ready(function(){$("select").niceSelect();$(".contact-form__input").on("blur",function(){$(this).addClass("touched")});$(".contact-form__checkbox").on("blur",function(){$(this).addClass("touched")})})