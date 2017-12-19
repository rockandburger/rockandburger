/*********************************************************************
*  =MAP
*********************************************************************/

class GoogleMaps{

    init(){
        this.gMapScript = document.createElement('script')
        this.gMapScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWspGMzOzQGZGj1lKmlreVLIB8GlOuiP8')
        document.body.appendChild(this.gMapScript)
    }
    load(){

        const w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            screen_width = w.innerWidth || e.clientWidth || g.clientWidth,
            screen_height = w.inner

        const contentString =
            '<div id="content">' +
            '<div id="siteNotice">' +
            'Av. Atlântica, 254<br /> Praia do Cassino' +
            '</div>' +
            '</div>'
        // console.log(contentString)

        const pos = new google.maps.LatLng(-32.181694, -52.157056),
            // const map;
            map = new google.maps.Map(document.getElementById('map'), {
                center: pos,
                zoom: 16,
                scrollwheel: false,
                draggable: (screen_width > 1024) ? true : false,
                disableDefaultUI: true,
            })

        const infowindow = new google.maps.InfoWindow({
            content: contentString
        })

        const image = 'assets/img/pin.png'

        const pinMarker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: image
        })

    }

}


export default GoogleMaps
