import {svgNS} from './svgNS'

/**
 * 创建SVG标签
 * @param {String} tagName 
 * @param {Object} attrObject 
 */
export const createTag = (tagName, attrObject) => {
  const oTag = document.createElementNS(svgNS, tagName)

  for(let [key, value] of Object.entries(attrObject)){
    oTag.setAttribute(key, value)
  }

  return oTag
}