{
  function clock() {
    const time = new Date();
    const seconds = time.getSeconds() < 10? '0' + time.getSeconds() : time.getSeconds();
    const minutes = time.getMinutes() < 10? '0' + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() < 10? '0' + time.getHours() : time.getHours();
    document.querySelector('.clock span').textContent = `${hours}:${minutes}:${seconds}`
  }
}
setInterval(clock, 500);

//-----------------------------------------------------------------------------------------------
{
  const endTime = new Date('2021-12-31 23:59:59').getTime();
  setInterval(() => {
    const nowTime = new Date().getTime();
    const time = Math.floor((endTime - nowTime)/1000);
    console.log(time);
  })
}