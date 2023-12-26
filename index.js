let model='light'
function setScheme(theme){
  if(theme === 'dark'){
    document.querySelector(":root").setAttribute('user-color-scheme','dark')
  }else if(theme==='light'){
    document.querySelector(':root').setAttribute('user-color-scheme','light')
  }
}
// 获取主题类型 document.querySelector(":root").getAttribute('user-color-scheme')

function alertTheme(){
  const theme = getTheme()
  alert('当前主题：'+theme) 
}

function getTheme(){
  return document.querySelector(":root").getAttribute('user-color-scheme')
}


setScheme(model)