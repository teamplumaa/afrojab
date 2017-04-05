Meteor.publish('profile', function () {
  return Profiles.find(
    { author: this.userId },
    { limit: 1 }
  );
});
