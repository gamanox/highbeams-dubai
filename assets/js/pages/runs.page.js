parasails.registerPage('runs', {
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
      heightToSet = Math.max(heightToSet, 600);
      heightToSet = Math.min(heightToSet, 1000);
      $hero.css('min-height', heightToSet+15);
      // $hero.css('min-height', heightToSet - headerHeight+'px');
      this.heroHeightSet = true;
    },

    initMap: function() {
              console.log('HOLA');
              var map = new google.maps.Map(document.getElementById('map-runs'), {
                center: {lat: 25.195354, lng: 55.277439}, 
                zoom: 4,
                disableDefaultUI: true, 
                styles: [{"featureType": "all", "elementType": "labels", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "all", "elementType": "labels.text", "stylers": [{"color": "#474747"} ] }, {"featureType": "administrative", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}, {"lightness": 20 } ] }, {"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#000000"}, {"lightness": 17 }, {"weight": 1.2 } ] }, {"featureType": "administrative.country", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "administrative.country", "elementType": "geometry", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "administrative.province", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.locality", "elementType": "all", "stylers": [{"visibility": "simplified"}, {"saturation": "-100"}, {"lightness": "30"} ] }, {"featureType": "administrative.neighborhood", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.land_parcel", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"visibility": "simplified"}, {"gamma": "0.00"}, {"lightness": "74"} ] }, {"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 20 } ] }, {"featureType": "landscape.man_made", "elementType": "all", "stylers": [{"lightness": "3"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 21 } ] }, {"featureType": "road", "elementType": "geometry", "stylers": [{"visibility": "simplified"}, {"color": "#4e4e4e"}, {"saturation": "-65"} ] }, {"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "geometry", "stylers": [{"visibility": "on"} ] }, {"featureType": "transit", "elementType": "labels", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "transit", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"visibility": "on"}, {"color": "#4e4e4e"}, {"saturation": "-75"} ] }, {"featureType": "transit.station", "elementType": "geometry", "stylers": [{"color": "#525252"} ] }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#444444"} ] }, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "off"} ] } ]
              });
              var icons = {
                        run: {
                          icon: '/images/hbd-map-marker.png'
                        }
                      };
              var runs_locations = [
                        {
                          position: new google.maps.LatLng(25.195354, 55.277439),
                          type: 'run'
                        }
                      ];
              runs_locations.forEach(function(run_location) {
                        var marker = new google.maps.Marker({
                          position: run_location.position,
                          icon: icons[run_location.type].icon,
                          map: map
                        });
                        map.setZoom(14);
                                    map.panTo(marker.position);
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
