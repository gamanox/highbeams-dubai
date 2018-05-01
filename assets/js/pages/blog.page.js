
parasails.registerPage('blog', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {

    heroHeightSet: false,
    posts: {},

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
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    // Private methods not tied to a particular DOM event are prefixed with _
    _setHeroHeight: function() {
      // new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
      var feed = this.feeds;
      console.log(feed);
      var $hero = this.$find('[full-page-hero]');
      var headerHeight = $('#page-header').outerHeight();
      var heightToSet = $(window).height();
      // heightToSet = Math.max(heightToSet, 600);
      heightToSet = Math.min(heightToSet, 1000);
      // $hero.css('min-height', heightToSet);
      // $hero.css('min-height', heightToSet - headerHeight+'px');
      this.heroHeightSet = true;
      $('.navbar .nav-link').removeClass('active');
      $('#menu-blog').addClass('active');
    },

    clickHeroButton: function() {
      // Scroll to the 'get started' section:
      $('html, body').animate({
        scrollTop: this.$find('[role="scroll-destination"]').offset().top
      }, 500);
    }

  }
});
