const isMobile = {
    userAgent: navigator.userAgent,
    Android: _ => isMobile.userAgent.match(/Android/i),
    BlackBerry: _ => isMobile.userAgent.match(/BlackBerry/i),
    iOS: _ => isMobile.userAgent.match(/iPhone|iPad|iPod/i),
    Opera: _ => isMobile.userAgent.match(/Opera Mini/i),
    Windows: _ => isMobile.userAgent.match(/IEMobile/i),
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
    }
}

export default isMobile