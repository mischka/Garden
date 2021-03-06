jQuery(document).ready(function($) {
   
   // Show drafts delete button on hover
   // Show options on each row (if present)
   $('.DiscussionRow').livequery(function() {
      var row = this;
      var opts = $(row).find('ul.Options');
      var btn = $(row).find('a.DeleteDraft');
      $(opts).hide();
      $(btn).hide();
      $(row).hover(function() {
         $(opts).show();
         $(btn).show();
         $(row).addClass('Active');
      }, function() {
         if (!$(opts).find('li.Parent').hasClass('Active'))
            $(opts).hide();
            
         $(btn).hide();
         $(row).removeClass('Active');            
      });
   });
   
   // Set up paging
   if ($.morepager)
      $('.MorePager').livequery(function() {
         $(this).morepager({
            pageContainerSelector: 'ul.Discussions:last'
         });
      });

});
