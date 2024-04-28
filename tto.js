var currentpage = window.location.pathname;
if(currentpage == "index.html" || currentpage == "index.html#"){
    console.log("This is the home page");
}else if(currentpage == "about.html"){
    console.log("This is the about page");
}else if(currentpage == "gallery.html"){
    console.log("This is the gallery page");
}else{
    console.log("This is not a page");
}
