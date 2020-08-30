import {request} from './request'

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubcategory(key) {
  return request({
    url: '/subcategory',
    params: {
      maitKey: key
    }
  })
}

export function getCategoryDetail(key, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey: key,
      type
    }
  })
}