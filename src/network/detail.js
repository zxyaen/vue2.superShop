import { request } from "./request";

export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}


//请求推荐recommend
export function getRecommend(){
	return request({
		url:'/recommend'
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

// 对商店数据的封装
export class shopInfo{
    constructor(shopInfo){
        this.name=shopInfo.name
        this.logo=shopInfo.shopLogo
        this.allSell=shopInfo.cSells
        this.allGoods=shopInfo.cGoods
        this.score =shopInfo.score
    }
}

//参数信息
export class Param {
	constructor(info, rule) {
	    this.info = info.set;
		this.rule = rule.tables;
	}
}
