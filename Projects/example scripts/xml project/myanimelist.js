// https://myanimelist.net/rss.php?type=rwe&u=waldy713
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://myanimelist.net/rss.php?type=rwe&u=waldy713', false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);