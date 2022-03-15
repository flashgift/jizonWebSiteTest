var elements = document.getElementsByClassName("tree-child-icon");
for(var item of elements)
{
    let nitem = item.parentElement.parentElement.children[1];
    item.onclick = (e) => {
        treeisclick(e, nitem);
    };
}



function treeisclick(e, elementList) {
    if(elementList.style.display !== "none")
        elementList.style.display = "none";
    else
        elementList.style.display = "contents";
}
