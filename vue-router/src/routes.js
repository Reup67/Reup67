import user from './components/user.vue';
import New from './components/New.vue';
import Author from './components/Author.vue';
import UserStart from './components/UserStart.vue';
import UserDetail from './components/UserDetail.vue';
import UserEdit from './components/UserEdit.vue';
import Header from './components/Header.vue';
export const routes =[
    {
    	path: '',
    	name :'user',
    	components:{
    		default: user,
    		'header-top':Header
    	} 
	},
	{
		path: '/New',
		components: {
			default: New,
    		'header-bottom':Header
		},
		children:[
			{
				path:'',
				component:UserStart
			},
			{
				path:':id',
				component:UserDetail,
				beforeEnter: (to,from,next) => {
					console.log('inside route setup');
					next();
				}
			},
			{
				path:':id/edit',
				component:UserEdit,
				name: 'userEdit'
			}
		]
	},
	{
		path:'/Author',
		component:Author
	},
	{
		path: '/redirect-me', 
		redirect: {
			name: 'user'
		}
	},
	{
		path:'*',
		redirect: {
			name: 'user'
		}
	}
];