$(document).ready(function(){
   $("#js-shopping-list-form").submit(function(event){
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
  
  
  
  $('.shopping-item-delete').on("click", function(event) {
    $(this).closest('li').remove();
    });
  
  $('.shopping-item-toggle').on("click", function(event) {
    $(this).closest('li').toggleClass('.shopping-item shopping-item__checked');
  });

  });
  