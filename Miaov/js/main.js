// import {svgNS} from './svgNS'
// import {createTag} from './createTag'

const svgNS = 'http://www.w3.org/2000/svg'
const createTag = (tagName, attrObject) => {
  const oTag = document.createElementNS(svgNS, tagName)

  for(let [key, value] of Object.entries(attrObject)){
    oTag.setAttribute(key, value)
  }

  return oTag
}

window.onload = function(){
  const container = document.getElementById('container')
  let centerX = container.offsetWidth / 2
  let centerY = container.offsetHeight / 2

  const CIRCLE_NUMBER = 9
  const CIRCLE_DEGREE_MAX = 360
  const CIRCLE_DEGREE = CIRCLE_DEGREE_MAX / CIRCLE_NUMBER
  const CENTER_RADIUS = 150
  
  const otherData = []

  for(let i = 0; i < CIRCLE_NUMBER; i++){
    let x = Math.cos(i * CIRCLE_DEGREE * Math.PI / 180) * CENTER_RADIUS + centerX
    let y = Math.sin(i * CIRCLE_DEGREE * Math.PI / 180) * CENTER_RADIUS + centerY

    otherData.push({
      x,
      y,
      text: i
    })
  }

  const data = {
    centerNode: {
      text: '科鲁兹',
    },
    otherNode: otherData,
  }

  /**
   * 创建中心标签
   */
  function addTag(){
    const {centerNode, otherNode} = data
    let oSvg, oG, oCircle, oText

    oSvg = createTag('svg', {
      xmlns: svgNS, 
      width: '100%', 
      height: '100%'
    })

    // 优先添加其他标签
    for(let i = 0; i < otherNode.length; i++){
      addOtherTag(otherNode[i], oSvg)
    }

    oG = createTag('g', {
      style: 'cursor: pointer'
    })

    oCircle = createTag('circle', {
      cx: centerX, 
      cy: centerY, 
      r: 40, 
      fill: 'white', 
      stroke: 'red', 
      'stroke-width': 1
    })

    oText = createTag('text', {
      x: centerX, 
      y: centerY + 8, 
      'font-size': 20, 
      'text-anchor': 'middle'
    })
    oText.innerHTML = data.centerNode.text

    oG.appendChild(oCircle)
    oG.appendChild(oText)
    oSvg.appendChild(oG)
    container.appendChild(oSvg)
  }

  /**
   * 添加其他标签
   * @param {Object} attrObject 
   * @param {Object} oSvg 
   */
  function addOtherTag(attrObject, oSvg){
    addLineGroup(attrObject, oSvg)
    addCircleGroup(attrObject, oSvg)
  }

  /**
   * 添加线
   * @param {Object} attrObject
   * @param {Object} oSvg
   */
  function addLineGroup(attrObject, oSvg){
    const oG = createTag('g', {
      class: 'line-group',
      style: 'cursor: pointer'
    })
    const oLine1 = createTag('line', {
      x1: attrObject.x,
      y1: attrObject.y,
      x2: centerX,
      y2: centerY,
      stroke: '#ccc',
    })
    const oLine2 = createTag('line', {
      x1: attrObject.x,
      y1: attrObject.y,
      x2: centerX,
      y2: centerY,
      stroke: 'transparent',
      'stroke-width': 10,
    })
    const oRect = createTag('rect', {
      x: (attrObject.x + centerX) / 2 - 10,
      y: (attrObject.y + centerY) / 2 - 10,
      fill: '#999',
      width: 20,
      height: 20,
      rx: 5,
    })
    const oText = createTag('text', {
      x: (attrObject.x + centerX) / 2,
      y: (attrObject.y + centerY) / 2 + 8,
      fill: 'white',
      'font-size': 20,
      'text-anchor': 'middle',
    })

    oText.innerHTML = '?'

    oG.appendChild(oLine1)
    oG.appendChild(oLine2)
    oG.appendChild(oRect)
    oG.appendChild(oText)
    oSvg.appendChild(oG)
  }

  /**
   * 添加圆
   * @param {Object} attrObject 
   * @param {Object} oSvg 
   */
  function addCircleGroup(attrObject, oSvg){
    const oG = createTag('g', {
      class: 'circle-group',
      style: 'cursor: pointer'
    })
    const oCircle = createTag('circle', {
      cx: attrObject.x,
      cy: attrObject.y,
      r: 30,
      fill: 'white',
      stroke: 'red',
      'stroke-width': 1,
    })
    const oText = createTag('text', {
      x: attrObject.x,
      y: attrObject.y + 8,
      'font-size': 20,
      'text-anchor': 'middle',
    })

    oText.innerHTML = attrObject.text

    oG.appendChild(oCircle)
    oG.appendChild(oText)
    oSvg.appendChild(oG)
  }

  function bindTag(){
    const aLine = document.getElementsByClassName('line-group')
    const aCircle = document.getElementsByClassName('circle-group')

    for(let i = 0; i < aCircle.length; i++){
      aCircle[i].addEventListener('mouseenter', function(){
        
      }, false)
      aCircle[i].addEventListener('mouseleave', function(){
        
      }, false)
    }

    for(let i = 0; i < aLine.length; i++){
      aLine[i].addEventListener('mouseenter', function(){
        
      }, false)
      aLine[i].addEventListener('mouseleave', function(){
        
      }, false)
    }
  }

  addTag()
  bindTag()
}

  