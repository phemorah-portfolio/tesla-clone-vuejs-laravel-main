import Home from './components/Home'
import Categories from './screens/admin/category/categories'
import AddCategory from './screens/admin/category/addCategory'
import EditCategory from './screens/admin/category/editCategory'
import AddProduct from './screens/admin/product/addProduct'
import Products from './screens/admin/product/products'
import EditProduct from './screens/admin/product/editProduct'
import homePage from './screens/client/HomePage'
import Login from './screens/auth/Login'
import Register from './screens/auth/Register'
import Shop from './screens/client/shop/Shop'
import ProductDetails from './screens/client/shop/ProductDetails'
import CategoryProducts from './screens/client/shop/CategoryProducts'
import Cart from './screens/client/shop/Cart'
import axios from 'axios'

export default {
    mode:'history',
    routes: [
        {
            path:'/admin',
            component: Home
        },
        {
            path:'/admin/categories',
            component: Categories,
            name: Categories,
            beforeEnter: (to, from, next) => {
                axios.get('/api/authenticated').then(() => {
                    next()
                })
                .catch(() => {
                    return next({name: 'Login'})
                })
            }
            // meta: {requiresAuth: true}
        },
        {
            path:'/admin/addCategory',
            component: AddCategory
        },
        {
            path:'/admin/editCategory',
            component: EditCategory,
            props: true,
            name: 'EditCategory'
        },
        {
            path:'/admin/addProduct',
            component: AddProduct
        },
        {
            path:'/admin/products',
            component: Products
        },
        {
            path:'/admin/editProduct',
            component: EditProduct,
            props: true,
            name: 'EditProduct'
        },
        {
            path:'/home',
            component: homePage
        },
        {
            path:'/login',
            component: Login,
            name: 'Login'
        },
        {
            path:'/register',
            component: Register,
            name: 'Register'
        },
        {
            path:'/shop',
            component: Shop,
            name: 'Shop'
        },
        {
            path:'/shop/productDetails',
            component:ProductDetails,
            props: true,
            name: 'ProductDetails'
        },
        {
            path: '/shop/category/products',
            component: CategoryProducts,
            name: 'CategoryProducts',
            props: true
        },
        {
            path: '/shop/cart',
            component: Cart,
            name: 'Cart'
        }
    ]
}