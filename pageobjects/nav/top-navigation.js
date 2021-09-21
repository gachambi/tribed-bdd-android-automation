class TopNav {
  get profile() {
    return $$('//android.view.ViewGroup[@index="0"]');
  }
  get logoYolba() {
    return $('//android.view.ViewGroup[@index="1"]');
  }
  get notificationOpt(){
    return $('//android.view.ViewGroup[@index="2"]')
  }
}

module.exports = new TopNav();
