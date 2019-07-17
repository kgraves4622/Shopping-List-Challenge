$(document).ready(function(){
   $('#js-shopping-list-form').submit(function(event){
     event.preventDefault();
  
  var myItemHtml = `<li>
          <span class="shopping-item">` + $("#shopping-list-entry").val() + `</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
  
  
      $('ul.shopping-list').append(myItemHtml);
    });
  
  
  
  $(document).on("click", ".shopping-item-delete", function(event) {
    $(this).closest('li').remove();
    });
  
  $(document).on("click", ".shopping-item-toggle", function(event) {
    $(this).closest('li').toggleClass('.shopping-item shopping-item__checked');

});

});
