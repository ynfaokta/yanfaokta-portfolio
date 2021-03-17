(function (document, window, undefined) {
    'use strict';
    
    // Find each tooltip
    var tooltip = document.querySelectorAll('.tooltip, .tooltip2');
  
    [].forEach.call(tooltip, function(el) {
      // Create tooltip element
      var tooltipText = document.createElement('div');
      
      // Set tooltip text
      tooltipText.textContent = el.getAttribute('data-tooltip-text');
      tooltipText.classList.add('tooltip-text');
    
      // Add tooltip to body on mouse over
      el.addEventListener('mouseover', function() {
        document.body.appendChild(tooltipText);
      }, false);
    
      // Remove tooltip on mouseout
      el.addEventListener('mouseout', function() {
        document.body.removeChild(tooltipText);
      }, false);
    
      // Attach the tooltip to the mouse cursor
      el.addEventListener('mousemove', function(e) {
        tooltipText.style.top = (e.pageY + 20) + 'px';
        tooltipText.style.left = (e.pageX + 20) + 'px';
      }, false);
    
    });
    
  })(document, window);