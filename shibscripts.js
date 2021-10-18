function randomCrypto() {
   const cryptoArr = [href="https://coinmarketcap.com/currencies/dogelon/", href="https://coinmarketcap.com/currencies/baby-doge-coin/", href="https://coinmarketcap.com/currencies/rendoge/", href="https://coinmarketcap.com/currencies/dogefi/", href="https://coinmarketcap.com/currencies/bone-shibaswap/", href="https://coinmarketcap.com/currencies/shiba-puppy/", href="https://coinmarketcap.com/currencies/shibx/", href="https://coinmarketcap.com/currencies/baby-shiba-inu/"];
    const randCrypto = cryptoArr[Math.floor(Math.random()*cryptoArr.length)];
            window.open(randCrypto, '_blank');

}    

function randomYouTube() {
    const youtubeArr = ["<iframe width="275" height="150" src="https://www.youtube.com/embed/SVFCJ-xL8YA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>",];
        const randVideo = youtubeArr[Math.floor(Math.random()*youtubeArr.length)];
        document.write(randVideo);
}