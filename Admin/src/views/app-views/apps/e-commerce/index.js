import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './product-list'
import AddProduct from './add-product'
import EditProduct from './edit-product'
import Orders from './orders'
import AddCategory from "./add-category";
import CategoryList from "./category-list";
import EditCategory from "./edit-category";
import AddBlog from "./add-blog";
import AddBlock from "./add-block";
import AddAbout from "./add-about";
import BlogList from "./blog-list";
import AboutList from "./about-list";
import BlockList from "./block-list";
import EditBlog from "./edit-blog";
import EditAbout from "./edit-about";
import EditBlock from "./edit-block";

const Ecommerce = props => {
  const { match } = props
	return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/product-list`} />
      <Route path={`${match.url}/add-category`} component={AddCategory} />
      <Route path={`${match.url}/add-blog`} component={AddBlog} />
      <Route path={`${match.url}/add-about`} component={AddAbout} />
      <Route path={`${match.url}/add-block`} component={AddBlock} />
      <Route path={`${match.url}/add-product`} component={AddProduct} />
      <Route path={`${match.url}/category-list`} component={CategoryList} />
      <Route path={`${match.url}/block-list`} component={BlockList} />
      <Route path={`${match.url}/about-list`} component={AboutList} />
      <Route path={`${match.url}/product-list`} component={ProductList} />
      <Route path={`${match.url}/blog-list`} component={BlogList} />
      <Route path={`${match.url}/edit-category/:id`} component={EditCategory} />
      <Route path={`${match.url}/edit-blog/:id`} component={EditBlog} />
      <Route path={`${match.url}/edit-about/:id`} component={EditAbout} />
      <Route path={`${match.url}/edit-block/:id`} component={EditBlock} />
      <Route path={`${match.url}/edit-product/:id`} component={EditProduct} />

      <Route path={`${match.url}/orders`} component={Orders} />
    </Switch>
  );
}

export default Ecommerce

