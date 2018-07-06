const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//星级评分的实现
const starsLevel = stars => {
  const level = stars.toString().substring(0,1);
  const array = [];
  for(let i=1; i<=5; i++){
    if (i <= level ){
      array.push(1);
    }
    else{
      array.push(0);
    }
  }
  return array;
}

module.exports = {
  formatTime: formatTime,
  starsLevel: starsLevel
}
