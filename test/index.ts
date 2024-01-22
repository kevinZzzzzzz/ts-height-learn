import { type } from "os"

const aMap = {
  MeCollectionByDate: '血液采集实时情况',
  MeStorage: '血液实时总库存',
  MeWarehousing: '当日成品入库情况',
  MeInspect: '血液待检库实时库存',
  MeTakeout: '合格血液实时库存',
  MeDonor: '血液发放',
  MeAnalyse: '献血人群综合分析',
  MeCollection: '血液采集实时情况',
  MeCollectionHistory: '历史采血汇总',
  MeTransfersHistory: '血液调拨分析',
  MeShieldHistory: '献血者屏蔽分析',
  MeDirectFreeHistory: '医院用血直免分析',
  MeDifferentReimbursementHistory: '异地用血报销分析',
  MeDonorFS: '血液发放',
  MeGrantHistory: '历史血液发放汇总',
  MeGrantHospitalHistory: '血液发放去向分析',
  MeGrantHospitalHistoryFS: '血液发放去向分析',
  MeInventoryPDS: '库存分析一览表',
  MeOutput: '内部调拨出库',
  MeRedcellstoreguard: '红细胞库存预警',
  MeTakeoutFS: '合格血液实时库存',
  MeTakeoutQQHE: '合格血液实时库存',
  MeVisitedData: '活跃度统计分析',
  MeDispatch: '血液调剂实时情况汇总',
}

type Arrkey = keyof typeof aMap

// let b = keyof a

// interface aType<T> {
//   [index: number]: T 
// }
const Arr1: Array<keyof typeof aMap>= [
  'MeRedcellstoreguard'
]
console.log(typeof aMap)

