/**
 * Created by Daniel on 6/10/2015.
 */


Blogger.RecentCommentsRoute = Ember.Route.extend({


   model:function() {

       return this.store.find('comment');   //  Return all comments in our data store
   }

});
