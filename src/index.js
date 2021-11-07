import Post from './Post'
import json from './assets/json.json'
import NarutoImg from './assets/naruto.jpg'
import './styles/styles.css'



const post = new Post("Webpack post title", NarutoImg);

console.log('Post to String:', post.toString())

console.log('JSON:', json)