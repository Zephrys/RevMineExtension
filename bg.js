// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
// If the tabs url starts with "http://specificsite.com"...
  var pat = /\/B[A-Z0-9]{8,9}/
  var isbn_pat = /\/[0-9]{10}/
  var snap_pat = /\/[0-9]{9,12}/
  var flip_pat = /itm[a-z0-9]{13}/i
  if (  (pat.test(tab.url) || isbn_pat.test(tab.url) || snap_pat.test(tab.url) || flip_pat.test(tab.url)) == true && (tab.url.indexOf('www.amazon.in') != -1 || tab.url.indexOf('www.snapdeal.com') !=-1 || tab.url.indexOf('www.flipkart.com') != -1 ) ){
    chrome.pageAction.show(tabId);

      // var parser = document.createElement('a');
      // parser.href = tab.url;
      // var pat = /\/(B[A-Z0-9]{8,9})$/
      // var isbn_pat = /\/([0-9]{10})/
      // var snap_pat = /\/([0-9]{9,12})/
      // var flip_pat = /(itm[a-z0-9]{13})/i
      // var flip_pat_name = /\/([a-zA-Z\-0-9]+)\/p/
      // var snap_pat_name = /product\/([a-zA-Z\-0-9]+)/

      // var pid = 'BOGUS'
      // var prod_name = 'NAME'

      // if (pat.test(parser.pathname)){
      //   pid = pat.exec(parser.pathname)[1];
      // }
      // else if(snap_pat.test(parser.pathname) && snap_pat_name.exec(parser.pathname)){
      //   pid = snap_pat.exec(parser.pathname)[1].toString();
      //   prod_name = snap_pat_name.exec(parser.pathname)[1].toString();
      // }
      // else if(flip_pat.test(parser.pathname)){
      //   pid = flip_pat.exec(parser.pathname)[1].toString();
      //   prod_name = flip_pat_name.exec(parser.pathname)[1].toString();
      // }
      // else if(isbn_pat.test(parser.pathname)){
      //   pid = isbn_pat.exec(parser.pathname)[1].toString();
      // }
      // else {
      //   pat = /\/(B[A-Z0-9]{8,9})[\/\?]/
      //   pid = pat.exec(parser.pathname)[1] || 'BOGUS'
      // }

      // var searchUrl = 'http://api.revmine.tk/' + parser.hostname + '/' + pid + '/' + prod_name;
      // var x = new XMLHttpRequest();
      // x.timeout = 400000;
      // console.log('ho gaya babu');
      // x.open('GET', searchUrl);
      // x.send();
  }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
