var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["newspaper"] = 1] = "newspaper";
    PrintMedia[PrintMedia["newsletter"] = getmedia('newletter')] = "newsletter";
    PrintMedia[PrintMedia["magazine"] = PrintMedia.newsletter * 5] = "magazine";
    PrintMedia[PrintMedia["Book"] = 10] = "Book";
})(PrintMedia || (PrintMedia = {}));
var printmedia2;
(function (printmedia2) {
    printmedia2[printmedia2["newspaper"] = 1] = "newspaper";
    printmedia2[printmedia2["newsletter"] = 2] = "newsletter";
    printmedia2[printmedia2["magazine"] = 3] = "magazine";
    printmedia2[printmedia2["Book"] = 4] = "Book";
})(printmedia2 || (printmedia2 = {}));
function getmedia(media) {
    if (media === 'newletter') {
        return 5;
    }
}
PrintMedia.newsletter;
console.log(PrintMedia.magazine);
function getmedia2(media) {
    if (media === 'forbs' || media === 'Outlook') {
        return printmedia2[3];
    }
}
function getmedia3(media) {
    if (media === 'forbs' || media === 'Outlook') {
        return printmedia2.magazine;
    }
}
var temp = getmedia2('forbs');
var temp2 = getmedia3('forbs');
console.log(temp);
console.log(temp2);
