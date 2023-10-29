<script type="text/javascript">
N = (document.all) ? 0 : 1;
 
if (N) {
ob = document.getElementById('im1');
}
 
document.onmousedown = MD; 
 
function MD(e) {
document.onmousemove = MM;
document.onmouseup = MU;
 
     if (N) {
 
          X=e.pageX;
          Y=e.pageY;
 
          X0=ob.style.left;
          Y0=ob.style.top;
          X0 = X0.substr(0,X0.length-2);
          Y0 = Y0.substr(0,Y0.length-2);
          X0 = X0*1;
          Y0 = Y0*1;
     }
     else {
 
          ob = event.srcElement.parentElement.style;
 
          X=event.offsetX;
          Y=event.offsetY;
     }
}
 
function MM(e) {
     if (ob) {
          if (N) {
 
               ob.style.left = X0+e.pageX-X;
               ob.style.top = Y0+e.pageY-Y;
          }
          else {
               ob.pixelLeft = event.clientX-X + document.body.scrollLeft;
               ob.pixelTop = event.clientY-Y + document.body.scrollTop;
	  return false;
          }
     }
}
function MU() {
     document.onmousemove = null;
}
</script>