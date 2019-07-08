(function () {
 var dndHandler={
draggedElement:null,
applyDragEvents:function (element) {
element.draggable=true;
var dndHandler=this;

element.addEventListener('dragstart',function (e) {
dndHandler.draggedElement=e.target;
e.dataTransfer.setData('text','');

});

},
applyDropEvents:function (dropper) {
 dropper.addEventListener('dragover',function (e) {
e.preventDefault();
this.className="drop_hover dropper";

 });
 dropper.addEventListener('dragleave',function () {
this.className="dropper";

 });
 dropper.addEventListener('drop',function (e) {
e.preventDefault();
var target=e.currentTarget;
 draggedElement=dndHandler.draggedElement;
 clonedElement=draggedElement.cloneNode(true);
 target.className="dropper";
clonedElement=target.appendChild(clonedElement);
dndHandler.applyDragEvents(clonedElement);
draggedElement.remove();

 });


}
 };
 var elements=document.querySelectorAll(".draggable");
 for (var i = 0; i < elements.length; i++) {
 	dndHandler.applyDragEvents(elements[i]);
 }
 var droppers=document.querySelectorAll(".dropper");
for (var i = 0; i < droppers.length; i++) {
	dndHandler.applyDropEvents(droppers[i]);
}



})();



