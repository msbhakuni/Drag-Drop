function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  window.addEventListener('DOMContentLoaded', function() {

    //changing background colour
    var boxes = document.getElementsByClassName('box');

    for (var i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = getRandomColor();
    }

    // Add draggable attribute to boxes
    for (var i = 0; i < boxes.length; i++) {                                                                       
        boxes[i].draggable = true;
        boxes[i].addEventListener('dragstart', handleDragStart, false);
        boxes[i].addEventListener('dragover', handleDragOver, false);
        boxes[i].addEventListener('dragenter', handleDragEnter, false);
        boxes[i].addEventListener('dragleave', handleDragLeave, false);
        boxes[i].addEventListener('drop', handleDrop, false);
        boxes[i].addEventListener('dragend', handleDragEnd, false);
      }

      var dragSrcElement = null;


       // Drag start event handler
    function handleDragStart(e) {
        dragSrcElement = this;
        this.style.opacity = '0.4';
        
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
      }
      
      // Drag over event handler
      function handleDragOver(e) {
        if (e.preventDefault) {
          e.preventDefault();
        }
        
        e.dataTransfer.dropEffect = 'move';
        
        return false;
      }
      
      // Drag enter event handler
      function handleDragEnter(e) {
        this.classList.add('over');
      }
      
      // Drag leave event handler
      function handleDragLeave(e) {
        this.classList.remove('over');
      }
      
      // Drop event handler
      function handleDrop(e) {
        if (e.stopPropagation) {
          e.stopPropagation();
        }
        
        if (dragSrcElement !== this) {
          dragSrcElement.innerHTML = this.innerHTML;
          this.innerHTML = e.dataTransfer.getData('text/html');
        }
        
        return false;
      }
      
      // Drag end event handler
      function handleDragEnd(e) {
        this.style.opacity = '1';
        
        // Remove the 'over' class from all boxes
        var boxes = document.querySelectorAll('.box');
        for (var i = 0; i < boxes.length; i++) {
          boxes[i].classList.remove('over');
        }
      }

  });



