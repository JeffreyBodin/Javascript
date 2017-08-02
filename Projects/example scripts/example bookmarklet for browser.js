// Embolden the 'e' Bookmarklet from reddit.com/r/EmboldenTheE
// Use as an example for a fully functional browser bookmarklet. Runs on click effects all visible editable? text? Replaces all 'e' with randomized bolded versions for easy compliance with EmboldentheE standards.

javascript:(
    function(){var $t = $('textarea:visible').filter(function(){ return !!$(this).val() }),
    val = $t.val().replace(/\*\*e\*\*/g, '°°°°').replace(/\*\*E\*\*/g, '~~~~'), c = val.match(/e/gi).length,
    s = Math.floor(Math.random()*val.match(/e/gi).length-1), i = -1; $t.val(val.replace(/(e)/gi, function(m,e){ return i++==s?'**' + e + '**' : e }).replace(/°{4}/g, '**e**').replace(/~{4}/g,'**E**'))
})()
