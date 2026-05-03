const signInForm = () => import('./views/sign-in-form.vue')
const signUpForm = () => import('./views/sign-up-form.vue')

/**
 * Route definitions for the IAM bounded context.
 * All paths are relative to the `/iam` parent route.
 *
 * @type {import('vue-router').RouteRecordRaw[]}
 */
const iamRoutes = [
    { path: 'sign-in', name: 'iam-sign-in', component: signInForm, meta: { title: 'Sign-In' } },
    { path: 'sign-up', name: 'iam-sign-up', component: signUpForm, meta: { title: 'Sign-Up' } }
];

export default iamRoutes;