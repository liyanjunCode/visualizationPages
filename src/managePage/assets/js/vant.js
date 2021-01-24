import { Swipe, SwipeItem }  from 'vant';
const H5comopnents = [Swipe, SwipeItem];
export default {
    install(app){
        H5comopnents.forEach(componet=>{
            app.use(componet)
        })
    } 
}