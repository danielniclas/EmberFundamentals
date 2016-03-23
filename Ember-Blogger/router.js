/**
 * Created by Daniel on 6/7/2015.
 */


// Page Router:

Blogger.Router.map(function() {              //  Set routes inside this function

                                             //  By default the path to a page is the same as the name of the entry in the router
                                             //  {path:   }  MAPPING for the ROUTE <<  provide path explicitly

    this.resource('posts', {path: '/'});     // to make this the home page -->  LOADS Template, Controller and Model
    this.resource('about');                  //  /about path (from URL) >>  loads the about ROUTE
    this.resource('contact', function() {    //  NESTED ROUTE
        this.resource('phone');              //  Anywhere you add an {{outlet}} helper >> a nested route will get rendered into that spot
        this.resource('email');
    });
    this.resource('recent-comments');
    this.resource('post', {path: 'posts/:post_id'});    //  Router Entry for a route with a DYNAMIC SEGMENT
                                                        //  RESOURCE named 'post' for a single post
                                                        //  Since the ROUTE is named 'post' automatically load 'post' template and controller
                                                        //  We need to make it load the post with the given ID to use as the MODEL
                                                        //  MAPPING:   posts:post_id

});


//  By default the path to a page is the same as the name of the entry in the router

//  ORDER of EVENTS:
//  Visit URL
//  Ember looks up the PATH from the ROUTER, and finds a MATCH   ('posts)
//  Ember loads a ROUTE (in the ROUTES directory) that loads a TEMPLATE ('posts'), CONTROLLER ('posts')and MODEL
//  By default a route loads a TEMPLATE and a CONTROLLER with the same name as the route  ('posts')
//  So the 'post' route loads the posts TEMPLATE and the posts CONTROLLER

//  There is no default for what MODEL gets loaded - we have to specify