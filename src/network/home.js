// 封装首页对数据的请求
import {request} from './request'

export function getHomeMultiData() {
  return request({
    url:'home/multidata'
  });
}

export function getGoodsData(type, page) {
  return request({
    url:'/test/getGoods',
    params:{
      type,
      page
    }
  });
}
