var teamcontainer=document.getElementById("teamcontainer")
var search=document.getElementById("search")
 var productlist=teamcontainer.querySelectorAll("div")

  search=addEventListener("click",function()
{
  var checkvalue=event.target.value.toUpperCase()


  for(count=0;count<productlist.length;count=count+1)
  {
    var productname=productlist[count].querySelector("h2").textContent
    if(productname.toUpperCase().indexOf(checkvalue)<0)
    {
      productlist[count].style.display="none"
    }
    else
    {
      productlist[count].style.display="block"
    }
  }
})

// SIDE NAVBAR
var menuicon=document.getElementById("menuicon")
var sidenavbar=document.getElementById("sidenavbar")
var close=document.getElementById("close")
menuicon.addEventListener("click",function()
{
  sidenavbar.style.left=0
})
close.addEventListener("click",function()
{
  sidenavbar.style.left="-50%"
})