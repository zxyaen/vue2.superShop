import { request } from "./request";

export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

// 封装goods类统一接收返回数据
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.highPrice
        this.oldPrice = itemInfo.lowPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class shopInfo{
    constructor(shopInfo){
        this.name=shopInfo.name
        this.img=shopInfo.request
        this.allSell=shopInfo.cSells
        this.allGoods=shopInfo.cGoods
        this.score =shopInfo.score
    }
}