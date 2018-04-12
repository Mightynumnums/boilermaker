router.get('/auth/google', passport.authenticate('google', { scope: 'email' }));

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
}));