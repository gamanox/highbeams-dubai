parasails.registerPage('parties', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {

    heroHeightSet: false,

  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);

    
  },
  mounted: function(){
    this._setHeroHeight();

    this.initMap();



  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    // Private methods not tied to a particular DOM event are prefixed with _
    _setHeroHeight: function() {
      var $hero = this.$find('[full-page-hero]');
      var headerHeight = $('#page-header').outerHeight();
      var heightToSet = $(window).height();
      // heightToSet = Math.max(heightToSet, 600);
      // heightToSet = Math.min(heightToSet, 1000);
      $hero.css('min-height', heightToSet+15);
      // $hero.css('min-height', heightToSet - headerHeight+'px');
      this.heroHeightSet = true;
    },

    initMap: function() {
            console.log('HOLA');
            var map = new google.maps.Map(document.getElementById('map-parties'), {
              center: {lat: 25.195354, lng: 55.277439}, 
              zoom: 4,
              disableDefaultUI: true, 
              styles: [{"elementType": "geometry", "stylers": [{"color": "#212121"} ] }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"elementType": "labels.text.fill", "stylers": [{"color": "#0d0d0d"} ] }, {"elementType": "labels.text.stroke", "stylers": [{"color": "#212121"} ] }, {"featureType": "administrative", "elementType": "geometry", "stylers": [{"color": "#757575"} ] }, {"featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] }, {"featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{"color": "#484848"} ] }, {"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#181818"} ] }, {"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [{"color": "#1b1b1b"} ] }, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"color": "#2c2c2c"} ] }, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#8a8a8a"} ] }, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#373737"} ] }, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#3c3c3c"} ] }, {"featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{"color": "#4e4e4e"} ] }, {"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "transit", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"} ] }, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#3d3d3d"} ] } ]
              
            });
            var icons = {
                      party: {
                        icon: '/images/hbd-map-marker.png'
                      }
                    };
            var parties_locations = [
                      {
                        position: new google.maps.LatLng(25.197498, 55.274366),
                        type: 'party',
                        url: 'https://goo.gl/maps/E4fNKzzvNg92'
                      }
                    ];
            parties_locations.forEach(function(party_location) {
                      var marker = new google.maps.Marker({
                        position: party_location.position,
                        icon: icons[party_location.type].icon,
                        map: map,
                        url: party_location.url
                      });
                      map.setZoom(14);
                                  map.panTo(marker.position);
                                  google.maps.event.addListener(marker, 'click', function() {
                                    // window.location.href = this.url;
                                    window.open(this.url);
                                  });
                    });

          },

    clickHeroButton: function() {
      // Scroll to the 'get started' section:
      $('html, body').animate({
        scrollTop: this.$find('[role="scroll-destination"]').offset().top
      }, 500);
    }

  }
});
