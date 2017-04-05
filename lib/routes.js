if (Meteor.isClient)	{
	Accounts.onLogin(function() {
		FlowRouter.go('feed');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
}

function checkLoggedIn (ctx, redirect) {
  if (!Meteor.userId()) {
    redirect('home')
  }
}


// FlowRouter.triggers.enter([function(context, redirect){
// 	if(!Meteor.userId()) {
// 		FlowRouter.go('home');
// 	}
// }]);

FlowRouter.route('/', {
	name:'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('feed');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/login', {
   name: 'login',
   action: function() {
   BlazeLayout.render('LoginRegisterLayout',{main: 'Login'})
  }
});

FlowRouter.route('/register', {
   name: 'register',
   action: function() {
   BlazeLayout.render('LoginRegisterLayout',{main: 'Register'})
  }
});

FlowRouter.route('/new', {
	name:'new',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'NewPost'})
	}
});

FlowRouter.route('/post', {
	name:'post',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Post'})
	}
});

FlowRouter.route('/feed', {
	name:'feed',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Feed'})
	}
});

FlowRouter.route('/super-konfamed', {
	name:'super-konfamed',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'StoreItem'})
	}
});

FlowRouter.route('/activities', {
	name:'activities',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Activities'})
	}
});

FlowRouter.route('/shop', {
	name:'shop',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'GlobalStore'})
	}
});

FlowRouter.route('/store', {
	name:'store',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Store'})
	}
});

FlowRouter.route('/jobs', {
	name:'jobs',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Jobs'})
	}
});

FlowRouter.route('/profile', {
	name:'profile',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Profile'})
	}
});

FlowRouter.route('/edit-profile', {
	name:'edit-profile',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'EditProfile'})
	}
});

FlowRouter.route('/settings', {
	name:'settings',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Settings'})
	}
});

FlowRouter.route('/job-history', {
	name:'job-history',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'MyGallery'})
	}
});

FlowRouter.route('/messages', {
	name:'messages',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Inbox'})
	}
});


FlowRouter.route('/payments', {
	name:'payments',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Payments'})
	}
});

FlowRouter.route('/my-listings', {
	name:'my-listings',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'MyListings'})
	}
});



FlowRouter.route('/gallery', {
	name:'gallery',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'MyGallery'})
	}
});

FlowRouter.route('/upload', {
	name:'upload',
	triggersEnter: [checkLoggedIn],
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Upload'})
	}
});
