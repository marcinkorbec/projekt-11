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
  const spanD = document.querySelector('span.d');
  const spanH = document.querySelector('span.h');
  const spanM = document.querySelector('span.m');
  const spanS = document.querySelector('span.s');

  setInterval(() => {
    const nowTime = new Date().getTime();
    const time = endTime - nowTime;
    const days = Math.floor((endTime/(1000*60*60*24)) - (nowTime/(1000*60*60*24)));
    const hours = Math.floor((endTime/(1000*60*60) - nowTime/(1000*60*60)) % 24);
    const minutes = Math.floor((endTime/(1000*60*60) - nowTime/(1000*60*60)) % 60);
    const seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
    spanD.textContent =`${days} dni,`;
    spanH.textContent = `${hours} godzin,`;
    spanM.textContent = `${minutes} minut,`;
    spanS.textContent = `${seconds} sekund.`;
  })
}